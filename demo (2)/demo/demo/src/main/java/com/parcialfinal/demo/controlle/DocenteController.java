package com.parcialfinal.demo.controlle;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.parcialfinal.demo.model1.Docente;
import com.parcialfinal.demo.service.DocenteService;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/docentes")
public class DocenteController {

    @Autowired
    private DocenteService service;

    @GetMapping
    public List<Docente> listar() { return service.listar(); }

    @PostMapping
    public ResponseEntity<?> guardar(@Valid @RequestBody Docente docente, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errores = new HashMap<>();
            result.getFieldErrors().forEach(e -> errores.put(e.getField(), e.getDefaultMessage()));
            return ResponseEntity.badRequest().body(errores);
        }
        return ResponseEntity.ok(service.guardar(docente));
    }

    @GetMapping("/{id}")
    public Docente buscar(@PathVariable Long id) { return service.buscar(id); }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) { service.eliminar(id); }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizar(@PathVariable Long id, @Valid @RequestBody Docente docente, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errores = new HashMap<>();
            result.getFieldErrors().forEach(e -> errores.put(e.getField(), e.getDefaultMessage()));
            return ResponseEntity.badRequest().body(errores);
        }
        docente.setId(id);
        return ResponseEntity.ok(service.guardar(docente));
    }
}