package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.PertubacaoSossego;
import io.github.gcm.ocorrencias.model.repository.PertubacaoResitory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}