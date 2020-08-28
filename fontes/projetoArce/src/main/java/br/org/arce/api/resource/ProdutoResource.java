package br.org.arce.api.resource;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.org.arce.api.model.Produto;
import br.org.arce.api.repository.ProdutoRepository;
import br.org.arce.api.repository.filter.ProdutoFilter;
import br.org.arce.api.service.ProdutoService;

@RestController
@RequestMapping("/produtos")
public class ProdutoResource {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private ProdutoService produtoService;

	@GetMapping
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PRODUTO')")
	public List<Produto> listar() {
		return this.produtoRepository.findAll();
	}

	@GetMapping("/paginado")
	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_PRODUTO')")
	public Page<Produto> listar(ProdutoFilter filtro, Pageable pageable) {
		return this.produtoService.listarPaginado(filtro, pageable);
	}

	@DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_DELETAR_PRODUTO')")
	public void deletarProduto(@PathVariable Long codigo) {
		this.produtoRepository.deleteById(codigo);
	}

	/*
	 * @PostMapping
	 * 
	 * @ResponseStatus(HttpStatus.CREATED) public void criar(@RequestBody Produto
	 * produto) { produto = this.produtoRepository.save(produto); }
	 */

	@PostMapping
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PRODUTO')")
	public ResponseEntity<Produto> cadastrar(@Valid @RequestBody Produto produto) {
		produto = this.produtoRepository.save(produto);
		System.out.print("**************************************************************** " + produto.getValor());
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{codigo}")
				.buildAndExpand(produto.getCodigo()).toUri();

		return ResponseEntity.created(uri).body(produto);
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_PRODUTO')")
	public ResponseEntity<Produto> atualizar(@PathVariable Long codigo, @RequestBody Produto produto) {

		Produto produtoSalvo = this.produtoService.atualizar(produto, codigo);
		return ResponseEntity.ok(produtoSalvo);
	}

}
