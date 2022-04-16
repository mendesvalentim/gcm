package io.github.gcm.ocorrencias.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mysql.cj.jdbc.Blob;
import lombok.Data;
import lombok.extern.java.Log;

import java.time.LocalDate;
import javax.persistence.*;

@Entity
@Data
@Log
public class LivroDiario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Lob
    private String texto;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;
    @Column(length = 50)
    private String usuario;
    private Boolean status = true;

}
