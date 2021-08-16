package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.boGcm;
import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.repository.BoGcmRepository;
import io.github.gcm.ocorrencias.model.repository.OcorrenciaRepository;
import io.github.gcm.ocorrencias.rest.dto.BoGcmDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/bogcm")
@RequiredArgsConstructor
public class BoGcmController {

    private final OcorrenciaRepository ocorrenciaRepository;
    private final BoGcmRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public boGcm salvar(@RequestBody BoGcmDTO dto){
        LocalDate data = LocalDate.parse(dto.getDataOcorrencia(),
                         DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idOcorrencia = dto.getIdOcorrencia();
        Ocorrencia ocorrencia =
                ocorrenciaRepository
                        .findById(idOcorrencia)
                        .orElseThrow(() ->
                                new ResponseStatusException(
                                        HttpStatus.BAD_REQUEST, "Ocorrência não foi encontrada."));

        boGcm boGcm = new boGcm();
        boGcm.setOcorrencia(ocorrencia);
        boGcm.setDataOcorrencia(data);
        boGcm.setEncarregadoVtr(dto.getEncarregadoVtr());
        boGcm.setNumeroTalao(dto.getNumeroTalao());
        boGcm.setNumeroBoGcm(dto.getNumeroBoGcm());
        boGcm.setEquipe(dto.getEquipe());
        boGcm.setEncarregadoEquipe(dto.getEncarregadiEquipe());
        boGcm.setUsuario(dto.getUsuario());
        return  repository.save(boGcm);
    }

    @GetMapping
    public List<boGcm> pesquisar(
            @RequestParam(value = "numeroTalao", required = false) Integer numeroTalao
    ){
        return repository.findByNumeroTalao(numeroTalao);

    }
}
