package br.org.arce.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.arce.api.model.Produto;
import br.org.arce.api.repository.produto.ProdutoRepositoryQuery;

public interface ProdutoRepository extends JpaRepository<Produto, Long>, ProdutoRepositoryQuery {

}
