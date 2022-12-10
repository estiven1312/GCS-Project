package com.project.zorritoplus.repository;

import com.project.zorritoplus.model.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
