package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.ResultSet;
import java.util.List;

public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Integer> {
    @Query(value = "SELECT\n" +
            "    oco.id,\n" +
            "    oco.auxiliar1,\n" +
            "    oco.auxiliar2,\n" +
            "    oco.auxiliar3,\n" +
            "    oco.auxiliar4,\n" +
            "    oco.bo_gcm,\n" +
            "    cod.codigo as cod_ocorrencia,\n" +
            "    oco.data_cadastro,\n" +
            "    oco.data_ocorrencia,\n" +
            "    oco.enc_equipe,\n" +
            "    oco.encarregado_vtr,\n" +
            "    oco.endereco,\n" +
            "    oco.equipe,\n" +
            "    oco.hora_final,\n" +
            "    oco.hora_inicial,\n" +
            "    oco.id_usuario,\n" +
            "    oco.km_final,\n" +
            "    oco.km_inicial,\n" +
            "    oco.motorista,\n" +
            "    oco.numero_talao,\n" +
            "    oco.obs,\n" +
            "    oco.viatura,\n" +
            "    oco.usuario,\n" +
            "    oco.status,\n" +
            "    oco.cpf,\n" +
            "    oco.imovel,\n" +
            "    oco.legislacao,\n" +
            "    oco.proprietario,\n" +
            "    oco.rg,\n" +
            "    oco.bairro,\n" +
            "    oco.id_cod_ocorrencia,\n" +
            "    oco.notificacao,\n" +
            "    oco.autuacao\n" +
            "FROM ocorrencia oco\n" +
            "LEFT JOIN cod_ocorrencia cod ON (oco.id_cod_ocorrencia=cod.id) where oco.numero_talao > 0 " +
            "order by oco.id desc", nativeQuery = true)
    List<Ocorrencia>findByAllOcorrencia();

    @Query("select s from Ocorrencia s where s.boGcm IS NOT NULL and s.numeroTalao > 0  order by s.id desc")
    List<Ocorrencia>findByNumeroBogcm();

    @Query("SELECT u.numeroTalao FROM Ocorrencia u WHERE u.id = (SELECT MAX(oco.id) FROM Ocorrencia oco where oco.numeroTalao > 0)")
    List<Integer> findByUltimoTalao();

    @Query("SELECT u.boGcm FROM Ocorrencia u WHERE u.id = (SELECT MAX(id) FROM Ocorrencia where boGcm is not null and numeroTalao > 0)")

    List<Integer> findByUltimoBoGcm();
}
