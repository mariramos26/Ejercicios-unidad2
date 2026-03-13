package com.parcialfinal.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.parcialfinal.demo.model1.Docente;

public interface DocenteRepository extends JpaRepository<Docente, Long> {
}
