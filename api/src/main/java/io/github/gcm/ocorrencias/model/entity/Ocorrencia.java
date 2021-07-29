package io.github.gcm.ocorrencias.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.boot.autoconfigure.web.servlet.ConditionalOnMissingFilterBean;
import org.springframework.core.SpringVersion;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Data//plugin lombok
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ocorrencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    @NotNull(message = "{campo.talao.obrigatorio}")
    private Integer numeroTalao;

    @Column(nullable = false, length = 50)
    @NotEmpty(message = "{campo.encarregadovtr.obrigatorio}")
    private String encarregadoVtr;

    @Column(updatable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataCadastro;

 /*   @Column(nullable = false)
    private Integer idUsuario;

    @Column(nullable = false)
    private Date dataOcorrencia;

    @Column(nullable = false, length = 10)
    private String codOcorrencia;
    @Column(nullable = false)
    private Integer vitura;
    @Column(nullable = false, length = 200)
    private String endereco;
    @Column(nullable = false, length = 50)
    private String motorista;

    @Column(nullable = false, length = 50)
    private String auxiliar1;
    private Integer kmInicial;
    private Integer kmFinal;
    private Time horaInicial;
    private Time horaFinal;
    @Column(nullable = true, length = 500)
    private String obs;
    private String auxiliar2;
    private String auxiliar3;
    private String auxiliar4; */

    @PrePersist
    public void prePersist(){
        setDataCadastro(LocalDate.now());
    }



}
