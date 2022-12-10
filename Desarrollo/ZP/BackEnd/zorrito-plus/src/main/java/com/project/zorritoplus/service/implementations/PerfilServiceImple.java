package com.project.zorritoplus.service.implementations;

import com.project.zorritoplus.model.domain.Cuenta;
import com.project.zorritoplus.model.domain.Perfil;
import com.project.zorritoplus.model.domain.Usuario;
import com.project.zorritoplus.model.dto.PerfilDTO;
import com.project.zorritoplus.repository.CuentaRepository;
import com.project.zorritoplus.repository.PerfilRepository;
import com.project.zorritoplus.repository.UsuarioRepository;
import com.project.zorritoplus.service.PerfilService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PerfilServiceImple implements PerfilService {
    Logger LOG = LoggerFactory.getLogger(PerfilServiceImple.class);
    @Autowired
    CuentaRepository cuentaRepository;

    @Autowired
    PerfilRepository perfilRepository;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Override
    public ResponseEntity<Map<String, Object>> createPerfil(PerfilDTO perfilDTO) {
        Map<String, Object> respuesta = new HashMap<>();
        LOG.info(perfilDTO.toString());
        try{
            Perfil perfil = new Perfil();
            Usuario usuario = usuarioRepository.findById(perfilDTO.getIdUsuario()).orElse(null);
            Cuenta cuenta = cuentaRepository.findById(perfilDTO.getIdCuenta()).orElse(null);
            if(usuario != null && cuenta != null){
                if(cuenta.getNumeroPerfiles() < 5) {
                    perfil.setCuenta(cuenta);
                    perfil.setUsuario(usuario);
                    perfil.setDuracion(perfil.getDuracion());
                    perfil.setPrecio(perfilDTO.getPrecio());
                    perfilRepository.save(perfil);
                    cuenta.setNumeroPerfiles(cuenta.getNumeroPerfiles() + 1);
                    cuentaRepository.save(cuenta);
                    respuesta.put("Estado", "creado correctamente");
                }
                else {
                    respuesta.put("Estado", "La cuenta no admite mas perfiles");

                }
            }
            return new ResponseEntity<>(respuesta, HttpStatus.OK);
        }catch (Exception ex){
            respuesta.put("Estado", "Se produjo un error");
            LOG.error(ex.getMessage(), ex);
            return new ResponseEntity<>(respuesta, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
