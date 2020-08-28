package br.org.arce.api.repository.produto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.org.arce.api.model.Produto;
import br.org.arce.api.repository.filter.ProdutoFilter;

public interface ProdutoRepositoryQuery {

	public Page<Produto> listar(ProdutoFilter filtro, Pageable pageable);

}
