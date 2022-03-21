package io.github.gcm.ocorrencias.model.repository;


import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.entity.PertubacaoSossego;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PertubacaoResitory extends JpaRepository<PertubacaoSossego,Integer> {
    @Query("select s from Ocorrencia s where s.boGcm IS NOT NULL and s.numeroTalao > 0  order by s.id desc")
    List<PertubacaoSossego> findByNumeroTaloa(Integer talao);

    /*    @Query("select s From PertubacaoSossego s")
        List<PertubacaoSossego> findAll();*/
}
