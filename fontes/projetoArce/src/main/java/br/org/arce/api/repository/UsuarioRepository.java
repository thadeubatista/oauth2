package br.org.arce.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.arce.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	public Optional<Usuario> findByEmail(String email);

}
