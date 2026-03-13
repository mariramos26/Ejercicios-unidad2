package com.parcialfinal.demo.model1;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Docente {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "docente_seq")
    @SequenceGenerator(name = "docente_seq", sequenceName = "docente_seq", allocationSize = 1)
    private Long id;

    @NotBlank(message = "El tipo de documento es obligatorio")
    @Column(name = "tipo_doc", nullable = false)
    private String tipoDoc;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    @Column(name = "apellido", nullable = false)
    private String apellido;

    @NotBlank(message = "La fecha es obligatoria")
    @Column(name = "fecha_nac", nullable = false)
    private String fechaNac;

    @NotBlank(message = "El nivel es obligatorio")
    @Column(name = "nivel", nullable = false)
    private String nivel;

    @NotBlank(message = "El área es obligatoria")
    @Column(name = "area", nullable = false)
    private String area;

    public Docente() {}

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTipoDoc() { return tipoDoc; }
    public void setTipoDoc(String tipoDoc) { this.tipoDoc = tipoDoc; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getApellido() { return apellido; }
    public void setApellido(String apellido) { this.apellido = apellido; }
    public String getFechaNac() { return fechaNac; }
    public void setFechaNac(String fechaNac) { this.fechaNac = fechaNac; }
    public String getNivel() { return nivel; }
    public void setNivel(String nivel) { this.nivel = nivel; }
    public String getArea() { return area; }
    public void setArea(String area) { this.area = area; }
}