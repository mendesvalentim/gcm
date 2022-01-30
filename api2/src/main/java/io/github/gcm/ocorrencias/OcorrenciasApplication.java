package io.github.gcm.ocorrencias;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class OcorrenciasApplication extends  SpringBootServletInitializer{

    public static void main(String[] args) {
        SpringApplication.run(OcorrenciasApplication.class, args);

    }
}
