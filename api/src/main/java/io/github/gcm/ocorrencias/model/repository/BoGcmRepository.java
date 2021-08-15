package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.BoGcm;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoGcmRepository extends JpaRepository<BoGcm, Integer>{
    @Query(" select s from Ocorrencia s where s.numeroTalao = :numeroTalao ")
    List<BoGcm> findByNumeroTalao(@Param("numeroTalao") Integer numeroTalao);
}
