package com.project.zorritoplus.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "perfiles")
public class Perfil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private BigDecimal precio;
    private Integer duracion;
    @ManyToOne(fetch = FetchType.LAZY)
    private Cuenta cuenta;
    @ManyToOne(fetch = FetchType.LAZY)
    private Usuario usuario;
}
