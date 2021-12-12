package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.ConsultaSinesp;
import io.github.gcm.ocorrencias.model.repository.ConsultaSinespRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/sinesp")
public class ConsultaSinespController {

    private final ConsultaSinespRepository repository;

    @Autowired
    public ConsultaSinespController(ConsultaSinespRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<ConsultaSinesp> obterTodos(){
        return repository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ConsultaSinesp salvar( @RequestBody @Valid ConsultaSinesp consultaSinesp){
        return repository.save(consultaSinesp);
    }

    @GetMapping("{id}")
    public ConsultaSinesp buscaPorid( @PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Consulta não foi encontrada") );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar( @PathVariable Integer id, @RequestBody ConsultaSinesp consultaSinespAtualizada) {
        repository
                .findById(id)
                .map( ocorrencia -> {
                    consultaSinespAtualizada.setId(ocorrencia.getId());
                    return repository.save(consultaSinespAtualizada);})
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );



    }


}
