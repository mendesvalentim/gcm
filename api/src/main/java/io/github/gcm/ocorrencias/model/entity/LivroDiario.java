package io.github.gcm.ocorrencias.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.*;

@Entity
@Data
public class LivroDiario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 50000)
    private String texto;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;
    @Column(length = 50)
    private String usuario;
    private Boolean status = true;

}
