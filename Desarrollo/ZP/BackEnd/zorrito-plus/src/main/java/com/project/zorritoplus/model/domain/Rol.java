package com.project.zorritoplus.model.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "rol")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "tipo_rol")
    private String nombre;


}
