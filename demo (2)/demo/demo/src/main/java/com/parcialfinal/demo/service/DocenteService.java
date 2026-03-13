package com.parcialfinal.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.parcialfinal.demo.model1.Docente;
import com.parcialfinal.demo.repository.DocenteRepository;

@Service
public class DocenteService {

    @Autowired
    private DocenteRepository repository;

    public List<Docente> listar() { return repository.findAll(); }
    public Docente guardar(Docente docente) { return repository.save(docente); }
    public Docente buscar(Long id) { return repository.findById(id).orElse(null); }
    public void eliminar(Long id) { repository.deleteById(id); }
}
