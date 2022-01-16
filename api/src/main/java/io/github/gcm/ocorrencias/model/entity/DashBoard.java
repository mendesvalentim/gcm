package io.github.gcm.ocorrencias.model.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Data//plugin lombok
public class DashBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String codOcorrencia;

    @Column(nullable = false)
    private String quantidade;
}
