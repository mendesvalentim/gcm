package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.Ocorrencia;
import io.github.gcm.ocorrencias.model.repository.OcorrenciaRepository;
import javassist.runtime.Desc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/ocorrencias")

public class OcorrenciaController {

    private final OcorrenciaRepository repository;

    @Autowired
    public OcorrenciaController(OcorrenciaRepository repository){
        this.repository = repository;
    }

    @GetMapping
    public List<Ocorrencia> obterTodos(){
        return repository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @GetMapping("/bogcm")
    public List<Ocorrencia> obtemBogcm(){
        return repository.findByNumeroBogcm();

    }

    @GetMapping("/ultimotalao")
    public Ocorrencia buscaTalao(){
        return repository.findByUltimoTalao();
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
                    // ocorrenciaAtualizada.setId(ocorrencia.getId()); //atualiza completo
                    ocorrencia.setNumeroTalao(ocorrenciaAtualizada.getNumeroTalao());
                    ocorrencia.setEncarregadoVtr(ocorrenciaAtualizada.getEncarregadoVtr());
                    ocorrencia.setDataCadastro(ocorrenciaAtualizada.getDataCadastro());
                    ocorrencia.setUsuario(ocorrenciaAtualizada.getUsuario());
                    ocorrencia.setDataOcorrencia(ocorrenciaAtualizada.getDataOcorrencia());
                    ocorrencia.setCodOcorrencia(ocorrenciaAtualizada.getCodOcorrencia());
                    ocorrencia.setViatura(ocorrenciaAtualizada.getViatura());
                    ocorrencia.setEndereco(ocorrenciaAtualizada.getEndereco());
                    ocorrencia.setMotorista(ocorrenciaAtualizada.getMotorista());
                    ocorrencia.setKmInicial(ocorrenciaAtualizada.getKmInicial());
                    ocorrencia.setKmFinal(ocorrenciaAtualizada.getKmFinal());
                    ocorrencia.setEquipe(ocorrenciaAtualizada.getEquipe());
                    ocorrencia.setEncEquipe(ocorrenciaAtualizada.getEncEquipe());
                    ocorrencia.setBoGcm(ocorrenciaAtualizada.getBoGcm());
                    ocorrencia.setHoraInicial(ocorrenciaAtualizada.getHoraInicial());
                    ocorrencia.setHoraFinal(ocorrenciaAtualizada.getHoraFinal());
                    ocorrencia.setObs(ocorrenciaAtualizada.getObs());
                    ocorrencia.setAuxiliar1(ocorrenciaAtualizada.getAuxiliar1());
                    ocorrencia.setAuxiliar2(ocorrenciaAtualizada.getAuxiliar2());
                    ocorrencia.setAuxiliar3(ocorrenciaAtualizada.getAuxiliar3());
                    ocorrencia.setAuxiliar4(ocorrenciaAtualizada.getAuxiliar4());
                    return repository.save(ocorrenciaAtualizada);
                })
                .orElseThrow( () ->new ResponseStatusException(HttpStatus.NOT_FOUND) );



    }
}
