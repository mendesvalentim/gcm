package io.github.gcm.ocorrencias.rest.dto;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class BoGcmDTO {
    private Integer idOcorrencia;
    private String dataOcorrencia;
    private String encarregadoVtr;
    private Integer numeroTalao;
    private Integer numeroBoGcm;
    private String equipe;
    private String encarregadiEquipe;
    private String usuario;
}
