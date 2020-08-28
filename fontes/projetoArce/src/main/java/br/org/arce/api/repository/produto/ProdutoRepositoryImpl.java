package br.org.arce.api.repository.produto;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import br.org.arce.api.handlerexception.ErroRepositoryException;
import br.org.arce.api.model.Produto;
import br.org.arce.api.repository.filter.ProdutoFilter;

public class ProdutoRepositoryImpl implements ProdutoRepositoryQuery {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Page<Produto> listar(ProdutoFilter filtro, Pageable pageable) {
		try {
			String sql = "select p from Produto p ";

			if (filtro.getDescricao() != null && !filtro.getDescricao().isEmpty()) {
				sql += " where lower(p.descricao) like :descricao ";
			}

			TypedQuery<Produto> query = em.createQuery(sql, Produto.class);

			if (filtro.getDescricao() != null && !filtro.getDescricao().isEmpty()) {
				query.setParameter("descricao", "%" + filtro.getDescricao() + "%");
			}

			adicionarRestricoesDePaginacao(query, pageable);
			Long total = getTotalRegistros(filtro.getDescricao());
			return new PageImpl<>(query.getResultList(), pageable, total);
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			throw new ErroRepositoryException();
		}
	}

	public Long getTotalRegistros(String valor) throws ErroRepositoryException {
		try {
			String jpql = "SELECT COUNT(p.codigo) FROM Produto p where lower(p.descricao) like :descricao ";
			Query query = em.createQuery(jpql);
			query.setParameter("descricao", "%" + valor + "%");
			return (Long) query.getSingleResult();
		} catch (Exception e) {
			throw new ErroRepositoryException();
		}
	}

	private void adicionarRestricoesDePaginacao(TypedQuery<Produto> query, Pageable pageable) {
		int paginaAtual = pageable.getPageNumber();
		int totalRegistrosPorPagina = pageable.getPageSize();
		int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;
		query.setFirstResult(primeiroRegistroDaPagina);
		query.setMaxResults(totalRegistrosPorPagina);

	}

}
