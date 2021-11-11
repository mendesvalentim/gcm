package io.github.gcm.ocorrencias.model.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Data
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, name = "login")
    @NotEmpty(message = "{campo.login.obriatorio}")
    private String username;

    @Column(name = "senha")
    @NotEmpty(message = "{campo.senha.obriatorio}")
    private String password;

}
