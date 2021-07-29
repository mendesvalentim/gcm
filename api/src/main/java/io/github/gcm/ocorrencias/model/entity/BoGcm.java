package io.github.gcm.ocorrencias.model.entity;

import lombok.Data;
import org.hibernate.mapping.ToOne;

import javax.persistence.*;

@Entity
@Data
public class BoGcm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "id_ocorrencia")
    private Ocorrencia ocorrencia;

    private Integer numeroBoGcm;
    @Column(nullable = false, length = 2)
    private String equipe;
    @Column(nullable = false, length = 50)
    private String encarregadiEquipe;
}
