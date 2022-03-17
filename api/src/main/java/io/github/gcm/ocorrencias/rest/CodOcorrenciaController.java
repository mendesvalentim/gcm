package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.CodOcorrencia;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.repository.CodOcorrenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/codocorrencias")
public class CodOcorrenciaController {

    private final CodOcorrenciaRepository codrepository;


    @Autowired
    public CodOcorrenciaController(CodOcorrenciaRepository repository){
        this.codrepository = repository;
    }

    @GetMapping
    public List<CodOcorrencia> obtemCodOcorrencia(){return codrepository.findAll();}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CodOcorrencia salvar( @RequestBody @Valid CodOcorrencia codocorrencia){
        return codrepository.save(codocorrencia);
    }

    @GetMapping("{id}")
    public CodOcorrencia buscaPorid( @PathVariable Integer id){
        return codrepository
                .findById(id)
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Codigo de Ocorrência não encontrada") );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar( @PathVariable Integer id, @RequestBody CodOcorrencia codocorrenciaAtualizada) {
        codrepository
                .findById(id)
                .map( ocorrencia -> {
                    codocorrenciaAtualizada.setId(ocorrencia.getId());
                    return codrepository.save(codocorrenciaAtualizada);})
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );
    }
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar( @PathVariable Integer id){
        codrepository
                .findById(id)
                .map( codocorrencia -> {
                    codrepository.delete(codocorrencia);
                    return Void.TYPE;
                })
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Código de Ocorrência não encontrado!") );

    }
}
