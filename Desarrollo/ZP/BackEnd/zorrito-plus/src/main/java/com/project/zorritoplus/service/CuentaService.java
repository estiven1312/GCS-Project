package com.project.zorritoplus.service;

import com.project.zorritoplus.model.dto.CuentaDTO;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface CuentaService {
    public ResponseEntity<Map<String, Object>> addPlatformAccount(CuentaDTO cuentaDTO);
}
