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
    private Long Id;
    private BigDecimal precio;
    @ManyToOne(fetch = FetchType.LAZY)
    private Cuenta cuenta;
    @ManyToOne(fetch = FetchType.LAZY)
    private Usuario usuario;
}
