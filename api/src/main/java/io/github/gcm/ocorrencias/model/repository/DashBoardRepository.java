package io.github.gcm.ocorrencias.model.repository;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface DashBoardRepository extends JpaRepository<Ocorrencia, Integer> {

    @Query(value = "select " +
            "cod.text, \n" +
            "count(oco.id_cod_Ocorrencia) AS quantidade \n" +
            "FROM ocorrencia oco \n" +
            "left join cod_ocorrencia cod on (oco.id_cod_ocorrencia=cod.id) \n" +
            "where oco.id_cod_Ocorrencia is not null \n" +
            "and cod.id not in (1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 216, 226) \n"+
            "group by oco.id_cod_Ocorrencia \n" +
            "order by quantidade desc", nativeQuery = true)
    List findAllCuston();

    @Query(value = "select " +
            "cod.text, \n" +
            "count(oco.id_cod_Ocorrencia) AS quantidade \n" +
            "FROM ocorrencia oco \n" +
            "left join cod_ocorrencia cod on (oco.id_cod_ocorrencia=cod.id) \n" +
            "where oco.id_cod_Ocorrencia is not null \n" +
            "and cod.id not in (1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 216, 226) \n" +
            "and oco.data_ocorrencia BETWEEN  :dataInicial AND :dataFinal "+
            "and oco.bo_gcm is not null " +
            "group by oco.id_cod_Ocorrencia \n" +
            "order by quantidade desc ", nativeQuery = true)
    List findAllCustonDate(String dataInicial, String dataFinal);
}
