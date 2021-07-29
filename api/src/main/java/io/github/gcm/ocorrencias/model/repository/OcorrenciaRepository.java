package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Integer> {

}
