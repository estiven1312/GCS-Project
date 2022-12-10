package com.project.zorritoplus.controller;

import com.project.zorritoplus.model.dto.CuentaDTO;
import com.project.zorritoplus.service.CuentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(value = "/cuenta")
public class CuentaController {
    @Autowired
    CuentaService cuentaService;
    @PostMapping("/registrar")
    public ResponseEntity<Map<String, Object>> registerCuenta(@RequestBody CuentaDTO cuentaDTO){
        return cuentaService.addPlatformAccount(cuentaDTO);
    }
}
