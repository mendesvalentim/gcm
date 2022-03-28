package io.github.gcm.ocorrencias.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import java.util.Date;

import javax.persistence.*;

@Entity
@Data
public class LivroDiario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String texto;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataCadastro;
    @Column(length = 50)
    private String usuario;

}
