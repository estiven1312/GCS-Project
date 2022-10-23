package com.project.zorritoplus.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Table(name = "usuarios")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellidos;
    private String celular;
    private String username;
    private String password;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "usuario")
    private List<Perfil> perfiles;

}
