package com.ubuntu.back.constants;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.OrRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

public class URLConstants {
    public static final RequestMatcher publicUrls = new OrRequestMatcher(
            new AntPathRequestMatcher("/login/oauth2/**"),
            new AntPathRequestMatcher("/category/**", "GET"),
            new AntPathRequestMatcher("/microbusiness", "GET"),
            new AntPathRequestMatcher("/microbusiness/category/{id}", "GET"),
            new AntPathRequestMatcher("/microbusiness/**", "GET"),
            new AntPathRequestMatcher("/microbusiness/find", "GET"),
            new AntPathRequestMatcher("/publication", "GET"),
            new AntPathRequestMatcher("/publication/{id}", "GET"),
            new AntPathRequestMatcher("/publication/active", "GET"),
            new AntPathRequestMatcher("/chatbot/**"),
            new AntPathRequestMatcher("/province/**", "GET"),
            new AntPathRequestMatcher("/country/**", "GET"),
            new AntPathRequestMatcher("/publication/{id}/views"),
            new AntPathRequestMatcher("/message/**")
    );

    public static final RequestMatcher adminUrls = new OrRequestMatcher(
            new AntPathRequestMatcher("/microbusiness/**"),
            new AntPathRequestMatcher("/category/**"),
            new AntPathRequestMatcher("/publication/**"),
            new AntPathRequestMatcher("/chatbot/**"),
            new AntPathRequestMatcher("/country/**"),
            new AntPathRequestMatcher("/province/**"),
            new AntPathRequestMatcher("/statistics"),
            new AntPathRequestMatcher("/images/**"),
            new AntPathRequestMatcher("/message/**"),
            new AntPathRequestMatcher("/user/**")
    );
}
