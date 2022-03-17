package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.CodOcorrencia;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodOcorrenciaRepository extends JpaRepository<CodOcorrencia, Integer> {

}
