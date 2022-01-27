package io.github.gcm.ocorrencias.model.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "gcm.pertubacao_sussego")
public class PertubacaoSossego {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    @Column(name="data_ocorrencia")
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataOcorrencia;
    @Column(name="notificacao")
    private Integer notificacao ;
    @Column(name="atuacao")
    private String atuacao ;
    @Column(name="numero_bo_gcm")
    private Integer numeroBoGcm;
    @Column(name="lesgislacao")
    private String legislacao;
    @Column(name="nome_proprietario")
    private String nomeProprietario;
    @Column(name="endereco")
    private String endereco;

}



