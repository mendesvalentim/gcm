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
import org.springframework.web.server.ResponseStatusException;

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
        return repository.findAll(Sort.by(Sort.Direction.DESC, "id"));

    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public  PertubacaoSossego salvar(@RequestBody @Valid PertubacaoSossego pertubacaoSossego){
        return repository.save(pertubacaoSossego);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar( @PathVariable Integer id, @RequestBody PertubacaoSossego pertubacaoSossegoAtualizada) {
        repository
                .findById(id)
                .map( pertubacaoSossego -> {
                    pertubacaoSossegoAtualizada.setId(pertubacaoSossego.getId());
                    return repository.save(pertubacaoSossegoAtualizada);})
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar( @PathVariable Integer id){
        repository
                .findById(id)
                .map( pertubacaoSossego -> {
                    repository.delete(pertubacaoSossego);
                    return Void.TYPE;
                })
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Notificação não encontrada") );

    }
}