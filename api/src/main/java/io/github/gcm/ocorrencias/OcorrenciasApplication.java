package io.github.gcm.ocorrencias;

import com.sun.glass.ui.Application;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.repository.OcorrenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.persistence.Column;
import java.time.LocalDate;
import java.util.Date;

@SpringBootApplication
public class OcorrenciasApplication {

    public static void main(String[] args) {
        SpringApplication.run(OcorrenciasApplication.class, args);

    }
}
