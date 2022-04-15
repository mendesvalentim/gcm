package io.github.gcm.ocorrencias.rest;
import io.github.gcm.ocorrencias.model.entity.LivroDiario;
import io.github.gcm.ocorrencias.model.repository.CodOcorrenciaRepository;
import io.github.gcm.ocorrencias.model.repository.LivroDiarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/livrodiario")
public class LivroDiarioController {
    private final LivroDiarioRepository repository;

    @Autowired
    public LivroDiarioController(LivroDiarioRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<LivroDiario> obtemlivo(){return repository.findAll(Sort.by(Sort.Direction.DESC, "id"));}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public LivroDiario salvar( @RequestBody @Valid LivroDiario livroDiario){
        return repository.save(livroDiario);
    }

    @GetMapping("{id}")
    public LivroDiario buscaPorid( @PathVariable Integer id){
        return repository
                .findById(id)
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND, "Livro não encontrado") );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar( @PathVariable Integer id, @RequestBody LivroDiario livroAtualizado) {
        repository
                .findById(id)
                .map( livro -> {
                    livroAtualizado.setId(livro.getId());
                    return repository.save(livroAtualizado);})
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );
    }

}
