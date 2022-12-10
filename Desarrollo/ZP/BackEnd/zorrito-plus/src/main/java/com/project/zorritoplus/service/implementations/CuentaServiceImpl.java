package com.project.zorritoplus.service.implementations;

import com.project.zorritoplus.model.domain.Cuenta;
import com.project.zorritoplus.model.domain.Plataforma;
import com.project.zorritoplus.model.dto.CuentaDTO;
import com.project.zorritoplus.repository.CuentaRepository;
import com.project.zorritoplus.repository.PlataformaRepository;
import com.project.zorritoplus.service.CuentaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class CuentaServiceImpl implements CuentaService {

    Logger LOGGER = LoggerFactory.getLogger(CuentaServiceImpl.class);
    @Autowired
    PlataformaRepository plataformaRepository;
    @Autowired
    CuentaRepository cuentaRepository;
    @Override
    public ResponseEntity<Map<String, Object>> addPlatformAccount(CuentaDTO cuentaDTO) {
        Map<String, Object> responseBody = new HashMap<>();
        LOGGER.info(cuentaDTO.toString());
        Plataforma plataforma = plataformaRepository.findById(cuentaDTO.getPlataformaID()).orElse(null);
        if(plataforma == null){
            responseBody.put("respuesta", "no se pudo registrar");
            return new ResponseEntity<>(responseBody, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Cuenta cuenta = new Cuenta();
        cuenta.setNumeroPerfiles(cuentaDTO.getNumeroPerfiles());
        cuenta.setPlataforma(plataforma);
        cuenta.setPassword(cuentaDTO.getPassword());
        cuenta.setEstado(cuentaDTO.getEstado());
        cuenta.setCorreo(cuentaDTO.getCorreo());
        cuenta.setNumeroPerfiles(cuentaDTO.getNumeroPerfiles());
        cuentaRepository.save(cuenta);
        responseBody.put("respuesta", "correctamente registrado");
        return new ResponseEntity<>(responseBody, HttpStatus.OK);
    }
}
