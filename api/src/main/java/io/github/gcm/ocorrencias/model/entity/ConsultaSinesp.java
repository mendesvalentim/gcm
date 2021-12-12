package io.github.gcm.ocorrencias.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Data
public class ConsultaSinesp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date data;

    @JsonFormat(pattern = "HH:mm")
    private String hora;

    @NotNull(message = "{campo.usuario.obrigatorio}")
    private String usuario;

    private Integer viatura;
    @Column(length = 150)
    private String averiguado;
    @Column(length = 50)
    private String cpf;
    @Column(length = 20)
    private String placa;
    @Column(length = 50)
    private String chassi;
    @Column(length = 150)
    private String sinarm;
    @Column(length = 500)
    private String obs;
}
