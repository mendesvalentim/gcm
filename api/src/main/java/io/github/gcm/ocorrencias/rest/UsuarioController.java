package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.Usuario;
import io.github.gcm.ocorrencias.model.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor

public class UsuarioController {

    private final UsuarioRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void salvar(@RequestBody @Valid Usuario usuario){
        repository.save(usuario);

    }
}
