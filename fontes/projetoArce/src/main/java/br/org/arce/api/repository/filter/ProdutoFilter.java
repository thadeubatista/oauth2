package br.org.arce.api.repository.filter;

import java.math.BigDecimal;

public class ProdutoFilter {

	private Long codigo;
	private String descricao;
	private BigDecimal valor;

	public ProdutoFilter() {
		// TODO Auto-generated constructor stub
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

}
