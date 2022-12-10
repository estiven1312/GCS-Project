package com.project.zorritoplus.service;

import com.project.zorritoplus.model.dto.PerfilDTO;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface PerfilService {

    public ResponseEntity<Map<String, Object>> createPerfil(PerfilDTO perfilDTO);
}
