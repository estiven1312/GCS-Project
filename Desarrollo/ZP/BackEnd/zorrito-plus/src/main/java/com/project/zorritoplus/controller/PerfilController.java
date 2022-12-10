package com.project.zorritoplus.controller;

import com.project.zorritoplus.model.dto.PerfilDTO;
import com.project.zorritoplus.service.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/perfil")
public class PerfilController {
    @Autowired
    PerfilService perfilService;
    @PostMapping(value="/create")
    public ResponseEntity<Map<String, Object>> createPerfil(@RequestBody PerfilDTO perfilDTO){
        return perfilService.createPerfil(perfilDTO);
    }
}
