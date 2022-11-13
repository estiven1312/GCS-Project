package com.project.zorritoplus.repository;

import com.project.zorritoplus.model.domain.Cuenta;
import com.project.zorritoplus.model.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CuentaRepository extends JpaRepository<Cuenta, Long> {
    @Query("SELECT u FROM Usuario u WHERE u.id IN (SELECT p.usuario.id FROM Perfil p WHERE p.cuenta.id = :id)")
    public List<Usuario> findAllUsuarios(@Param("id") Long id);
}
