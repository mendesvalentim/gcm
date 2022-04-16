package io.github.gcm.ocorrencias.model.repository;
import io.github.gcm.ocorrencias.model.entity.BoGcm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoGcmRepository extends JpaRepository<BoGcm,Integer>{

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
            "    oco.autuacao,\n" +
            "    oco.pertubacao\n" +
            "FROM ocorrencia oco\n" +
            "LEFT JOIN cod_ocorrencia cod ON (oco.id_cod_ocorrencia=cod.id) " +
            " where oco.boGcm IS NOT NULL order by oco.id desc", nativeQuery = true)
    List<BoGcm> findByNumeroBo();
}
