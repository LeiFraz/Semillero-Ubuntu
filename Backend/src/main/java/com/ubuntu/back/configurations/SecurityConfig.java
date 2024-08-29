package com.ubuntu.back.configurations;


import com.ubuntu.back.constants.URLConstants;
import com.ubuntu.back.repositories.IUserRepository;
import com.ubuntu.back.security.JwtTokenAuthenticationFilter;
import com.ubuntu.back.services.UserAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.ubuntu.back.constants.URLConstants.adminUrls;
import static com.ubuntu.back.constants.URLConstants.publicUrls;

@Configuration
@EnableWebSecurity
@ComponentScan
public class SecurityConfig {
    private final IUserRepository userRepository;
    private final UserAuthService userAuthService;
    public SecurityConfig(IUserRepository userRepository, UserAuthService userAuthService) {
        this.userRepository = userRepository;
        this.userAuthService = userAuthService;
    }
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests( auth -> {
                    auth.requestMatchers(publicUrls).permitAll();
                    auth.requestMatchers(adminUrls).hasAuthority("ADMIN");
                    auth.anyRequest().authenticated();
                })
                .addFilterBefore(new JwtTokenAuthenticationFilter(userAuthService), UsernamePasswordAuthenticationFilter.class)
                .build();
    }

}

