package com.ubuntu.back.security;

import com.ubuntu.back.exceptions.ValidateTokenException;
import com.ubuntu.back.models.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class TokenUtil {

    private static final String SECRET_KEY = "90cde71c4dfbf63c05ccce32aee7ca4402bcaff15d05227d1d360f1d10e1bcb2a2973afb2b1f02623c32408a3857dc7f49b90241f23504117d9778277e1c5b38";

    public static String getSigningKey() {
        return SECRET_KEY;
    }

    public static String generateToken(User user) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 3600000); // 1 hour expiration
        String authorities = user.getRole().toString();
         return Jwts.builder()
                .setSubject((user.getEmail()))
                 .setId((user.getId().toString()))
                .claim("roles", authorities)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, getSigningKey())
                .compact();
    }

    public String extractTokenFromHeader(String authHeader) {
        if (authHeader.isEmpty()) {
            throw new ValidateTokenException("Token is missing in the request header.");
        } else if (!authHeader.startsWith("Bearer ")){
            throw new ValidateTokenException("Token sent in an invalid format");
        }
        return authHeader.substring(7);
    }

}
