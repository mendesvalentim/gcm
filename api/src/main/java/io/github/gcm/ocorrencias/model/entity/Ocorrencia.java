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

    private Integer idUsuario;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataOcorrencia;

    @Column(length = 10)
    private String codOcorrencia;
    private Integer viatura;
    @Column(length = 200)
    private String endereco;
    @Column(length = 50)
    private String motorista;

    private Integer kmInicial;
    private Integer kmFinal;
    private String equipe;
    private String encEquipe;
    private String boGcm;

   /* @JsonFormat(pattern = "HH:mm")
    private Time horaInicial;
    @JsonFormat(pattern = "HH:mm")
    private Time horaFinal;*/

    @Column(length = 500)
    private String obs;

    @Column(length = 50)
    private String auxiliar1;
    private String auxiliar2;
    private String auxiliar3;
    private String auxiliar4;

    @PrePersist
    public void prePersist(){
        setDataCadastro(LocalDate.now());
    }



}
