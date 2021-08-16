package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.boGcm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BoGcmRepository extends JpaRepository<boGcm, Integer>{
    @Query(" select s from Ocorrencia s where s.numeroTalao = :numeroTalao ")
    List<boGcm> findByNumeroTalao(@Param("numeroTalao") Integer numeroTalao);
}
