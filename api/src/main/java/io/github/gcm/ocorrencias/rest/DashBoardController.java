package io.github.gcm.ocorrencias.rest;

import io.github.gcm.ocorrencias.model.entity.DashBoard;
import io.github.gcm.ocorrencias.model.repository.DashBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/dashboard")
public class DashBoardController {
    private  DashBoardRepository repository;

    @Autowired
    public DashBoardController(DashBoardRepository repository){
        this.repository = repository;
    }


    @GetMapping
    public List obterTodos(){
        return repository.findAllCuston();
    }

    @GetMapping("{dataInicial}/{dataFinal}")
    public List obterTodosPorData( @PathVariable String dataInicial, @PathVariable String dataFinal ){
        return repository.findAllCustonDate(dataInicial, dataFinal);
    }
}
