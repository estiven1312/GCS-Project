package com.project.zorritoplus.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Table(name = "plataformas")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Plataforma {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nombrePlataforma")
    private String nombrePlataforma;
    private BigDecimal precio;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "plataforma", fetch = FetchType.LAZY)
    private List<Cuenta> cuentas;
}
