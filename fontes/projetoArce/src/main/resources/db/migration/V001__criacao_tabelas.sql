CREATE TABLE IF NOT EXISTS usuario (
  codigo bigint(20) NOT NULL,
  nome varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  senha varchar(150) NOT NULL,
  PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `permissao` (
  `codigo` bigint(20) NOT NULL,
  `descricao` varchar(50) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS usuario_permissao (
  codigo_usuario bigint(20) NOT NULL,
  codigo_permissao bigint(20) NOT NULL,
  PRIMARY KEY (codigo_usuario,codigo_permissao),
  KEY codigo_permissao (codigo_permissao),
  CONSTRAINT usuario_permissao_ibfk_1 FOREIGN KEY (codigo_usuario) REFERENCES usuario (codigo),
  CONSTRAINT usuario_permissao_ibfk_2 FOREIGN KEY (codigo_permissao) REFERENCES permissao (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS produto (
  codigo int(11) NOT NULL AUTO_INCREMENT,
  descricao varchar(100) NOT NULL,
  valor decimal(18,2) NOT NULL,
  PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

