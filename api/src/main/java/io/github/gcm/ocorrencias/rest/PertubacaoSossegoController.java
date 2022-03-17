package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.CodOcorrencia;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.entity.PertubacaoSossego;
import io.github.gcm.ocorrencias.model.repository.PertubacaoResitory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/notificacoes")
@RequiredArgsConstructor
public class PertubacaoSossegoController {
    
    private final PertubacaoResitory repository;

    @GetMapping
    public List<PertubacaoSossego> retrieveAllStudents() {
        return repository.findAll();

    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public  PertubacaoSossego salvar(@RequestBody @Valid PertubacaoSossego pertubacaoSossego){
        return repository.save(pertubacaoSossego);
    }
}