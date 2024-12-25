package com.JakesFunnyServer.board.common;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Profile("local")
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 경로에 대해
                .allowedOrigins("http://localhost:3000") // 서버 URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS"); // 허용할 HTTP 메서드
//                .allowCredentials(true)
//                .maxAge(3600); // 프리플라이트 요청 캐시 시간 (초 단위)
    }
}

