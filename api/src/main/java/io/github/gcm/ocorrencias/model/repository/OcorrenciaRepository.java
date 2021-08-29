package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.ResultSet;
import java.util.List;

public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Integer> {
    @Query("select s from Ocorrencia s where s.boGcm IS NOT NULL")
    List<Ocorrencia>findByNumeroBogcm();

    @Query("SELECT s FROM Ocorrencia s WHERE s.id = (SELECT MAX(id) FROM Ocorrencia) ")
    Ocorrencia findByUltimoTalao();

}
