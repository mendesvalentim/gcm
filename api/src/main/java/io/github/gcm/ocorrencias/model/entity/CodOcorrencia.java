package io.github.gcm.ocorrencias.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data//plugin lombok precisa dessa annotation  para gerar a lista de itens
public class CodOcorrencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String codigo;

    @Column(nullable = false, length = 150)
    private String text;
}
