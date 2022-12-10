package com.project.zorritoplus.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Table(name = "cuentas")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cuenta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String correo;
    private String password;
    @Column(name = "numero_perfiles")
    private Integer numeroPerfiles;
    private Boolean estado;
    @ManyToOne(fetch = FetchType.LAZY)
    private Plataforma plataforma;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "cuenta")
    private List<Perfil> perfiles;

}
