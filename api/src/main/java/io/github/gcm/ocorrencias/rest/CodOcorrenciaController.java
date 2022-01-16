package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.CodOcorrencia;
import io.github.gcm.ocorrencias.model.repository.CodOcorrenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/codocorrencias")
public class CodOcorrenciaController {

    private CodOcorrenciaRepository codrepository;


    @Autowired
    public CodOcorrenciaController(CodOcorrenciaRepository repository){
        this.codrepository = repository;
    }

    @GetMapping
    public List<CodOcorrencia> obtemCodOcorrencia(){return codrepository.findAll();}
}
