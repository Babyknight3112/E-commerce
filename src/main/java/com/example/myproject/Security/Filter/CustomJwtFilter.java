package com.example.myproject.Security.Filter;

import com.example.myproject.Security.SecurityService.MyUserDetailsService;
import com.example.myproject.Security.jwt.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class CustomJwtFilter extends OncePerRequestFilter {

    private final MyUserDetailsService myUserDetailsService;

    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if(request.getServletPath().equals("/login")){
            filterChain.doFilter(request, response);
        }

        final String authenticationHeader = request.getHeader("Authorization");
//        log.info("ok");
//        log.info(authenticationHeader);
//        log.info(request.getHeader(""));
        if(authenticationHeader != null && authenticationHeader.startsWith("Bearer")){
            String token = authenticationHeader.substring("Bearer ".length());
            log.info(token);
            if(jwtUtil.validate(token)){
                log.info("valid");
                String username = jwtUtil.getUsername(token);
                UserDetails userDetails = myUserDetailsService.loadUserByUsername(username);
                System.out.println(userDetails.getAuthorities());
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                filterChain.doFilter(request, response);
            }
            else {
                filterChain.doFilter(request, response);
            }
        }
        else {
            filterChain.doFilter(request, response);
        }
    }
}
