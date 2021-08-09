package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.repository.OcorrenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/ocorrencias")
@CrossOrigin("http://localhost:4200")
public class OcorrenciaController {

    private final OcorrenciaRepository repository;

    @Autowired
    public OcorrenciaController(OcorrenciaRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<Ocorrencia> obterTodos(){
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Ocorrencia salvar( @RequestBody @Valid Ocorrencia ocorrencia){
        return repository.save(ocorrencia);
    }

    @GetMapping("{id}")
    public Ocorrencia buscaPorid( @PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Ocorrência não encontrada") );
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar( @PathVariable Integer id){
        repository
            .findById(id)
            .map( ocorrencia -> {
                repository.delete(ocorrencia);
                return Void.TYPE;
            })
            .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Ocorrência não encontrada") );

    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar( @PathVariable Integer id, @RequestBody Ocorrencia ocorrenciaAtualizada) {
        repository
                .findById(id)
                .map( ocorrencia -> {
                    // ocorrenciaAtualizada.setId(ocorrencia.getId()); atualiza completo
                    ocorrencia.setEncarregadoVtr(ocorrenciaAtualizada.getEncarregadoVtr());
                    ocorrencia.setNumeroTalao(ocorrenciaAtualizada.getNumeroTalao());
                    return repository.save(ocorrenciaAtualizada);
                })
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND) );



    }
}
