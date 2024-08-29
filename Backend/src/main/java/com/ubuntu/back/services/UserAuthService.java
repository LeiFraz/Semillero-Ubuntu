package com.ubuntu.back.services;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.ubuntu.back.models.domain.User;
import com.ubuntu.back.models.dto.OAuth2TokenResponse;
import com.ubuntu.back.repositories.IUserRepository;
import com.ubuntu.back.security.TokenUtil;
import io.jsonwebtoken.lang.Assert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserAuthService {

    @Autowired
    IUserRepository userRepository;
    @Autowired
    TokenUtil tokenUtil;
    @Autowired
    UserService userService;
    private static final String GOOGLE_ISSUER = "https://accounts.google.com";

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;
    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;

    public Map<String, Object> authUser(String authHeader) throws GeneralSecurityException, IOException {
        var token = tokenUtil.extractTokenFromHeader(authHeader);
        var payload = validateGoogleTokenAndGetPayload(token);
        User user = userService.findUserByEmailOrCreateIt(payload);
        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("token", TokenUtil.generateToken(user));
        responseBody.put("name", user.getName());
        responseBody.put("lastName", user.getLastName());
        responseBody.put("email", user.getEmail());
        responseBody.put("rol", user.getRole());
        responseBody.put("id", user.getId());
        return responseBody;
    }

    private GoogleIdToken.Payload validateGoogleTokenAndGetPayload(String token) throws GeneralSecurityException, IOException {
        GoogleIdTokenVerifier verifier = getVerifier();
        GoogleIdToken idToken = verifier.verify(token);

        if (idToken != null) {
            return idToken.getPayload();
        } else {
            throw new IllegalArgumentException("ID token is invalid.");
        }
    }

    private GoogleIdTokenVerifier getVerifier() {
        return new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), GsonFactory.getDefaultInstance())
                .setAudience(Collections.singletonList(clientId))
                .setIssuer(GOOGLE_ISSUER)
                .build();
    }

    public Mono<OAuth2TokenResponse> getGoogleOauth2AccessToken(String authorizationCode) {
        WebClient webClient = WebClient.create();

        // Verificación de valores no nulos
        Assert.notNull(authorizationCode, "authorizationCode must not be null");
        Assert.notNull(clientId, "clientId must not be null");
        Assert.notNull(clientSecret, "clientSecret must not be null");

        return webClient.post()
                .uri("https://oauth2.googleapis.com/token")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .body(BodyInserters
                        .fromFormData("code", authorizationCode)
                        .with("client_id", clientId)
                        .with("client_secret", clientSecret)
                        .with("redirect_uri", "postmessage")
                        .with("grant_type", "authorization_code"))
                .retrieve()
                .onStatus(status -> status.is4xxClientError() || status.is5xxServerError(),
                        response -> response.bodyToMono(OAuth2TokenResponse.class)
                                .flatMap(errorBody -> Mono.error(new RuntimeException("Error de respuesta: " + errorBody))))
                .bodyToMono(OAuth2TokenResponse.class);
        }

}

