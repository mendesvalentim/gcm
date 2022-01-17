package io.github.gcm.ocorrencias.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class BoGcm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_ocorrencia")
    private Ocorrencia ocorrencia;

    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataOcorrencia;
    @Column
    private String encarregadoVtr;
    @Column
    private Integer numeroTalao;
    @Column
    private Integer numeroBoGcm;
    @Column(nullable = false, length = 2)
    private String equipe;
    @Column(nullable = false, length = 50)
    private String encarregadoEquipe;
    @Column
    private String usuario;
}
