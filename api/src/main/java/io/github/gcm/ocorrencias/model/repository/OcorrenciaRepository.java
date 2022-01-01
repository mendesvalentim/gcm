package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.ResultSet;
import java.util.List;

public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Integer> {
    @Query("select s from Ocorrencia s where s.boGcm IS NOT NULL order by s.id desc")
    List<Ocorrencia>findByNumeroBogcm();

    @Query("SELECT u.numeroTalao FROM Ocorrencia u WHERE u.id = (SELECT MAX(oco.id) FROM Ocorrencia oco)")
    List<Integer> findByUltimoTalao();

    @Query("SELECT u.boGcm FROM Ocorrencia u WHERE u.id = (SELECT MAX(id) FROM Ocorrencia where boGcm is not null)")

    List<Integer> findByUltimoBoGcm();
}
