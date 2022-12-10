package com.project.zorritoplus.model.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class PerfilDTO {
    private Long idCuenta;
    private Long idUsuario;
    private String nombrePerfil;
    private Long duracionPerfil;
    private BigDecimal precio;
}
