package br.org.arce.api.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.org.arce.api.model.Produto;
import br.org.arce.api.repository.ProdutoRepository;
import br.org.arce.api.repository.filter.ProdutoFilter;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	/**
	 * Método que lista os produtos cadastradas no banco
	 * 
	 * @param filtros  Objeto do tipo {@link ProdutoFilter} contendo os filtros
	 *                 utilizados na pesquisa
	 * @param pageable Objeto do tipo {@link Page} contendo a representação de uma
	 *                 paginação
	 * @return retorna um objeto do tipo {@link Page} contendo a lista de
	 *         {@link Produto}
	 */
	public Page<Produto> listarPaginado(ProdutoFilter filtro, Pageable pageable) {
		Page<Produto> listaProduto = this.produtoRepository.listar(filtro, pageable);

		List<Produto> listaP = new ArrayList<>();
		listaProduto.getContent().forEach(prod -> {
			Produto produto = new Produto();
			BeanUtils.copyProperties(prod, produto);
			listaP.add(produto);
		});
		return new PageImpl<>(listaP, pageable, listaProduto.getNumberOfElements());

	}

	/**
	 * Método para atualizar produto no banco de dados
	 * 
	 * @param produto objeto do tipo {@link Produto}
	 * @param codigo  codigo do produto para ser pesquisado na base
	 * @return retorna um objeto do tipo {@link Produto} atualizado
	 */
	public Produto atualizar(Produto produto, Long codigo) {
		Produto produtoSalvo = this.produtoRepository.findById(codigo).get();

		BeanUtils.copyProperties(produto, produtoSalvo, "codigo");

		produtoSalvo = this.produtoRepository.save(produtoSalvo);

		return produtoSalvo;

	}

}
