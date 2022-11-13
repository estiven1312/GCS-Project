package com.project.zorritoplus.model.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CuentaDTO {
    private String correo;
    private Boolean estado;
    private Integer numeroPerfiles;
    private String password;
    private Long plataformaID;
}
