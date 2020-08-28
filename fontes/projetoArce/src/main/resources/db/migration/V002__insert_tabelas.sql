

INSERT INTO usuario (codigo, nome, email, senha) values (1, 'Administrador', 'admin@arce.com', '$2a$10$IwZmYmE7K3lhNEbhOsnpl.spG3kSveAsprXCodFcbYx4XW4g3aWzy');
INSERT INTO usuario (codigo, nome, email, senha) values (2, 'gerente', 'gerente@arce.com', '$2a$10$IwZmYmE7K3lhNEbhOsnpl.spG3kSveAsprXCodFcbYx4XW4g3aWzy');
INSERT INTO usuario (codigo, nome, email, senha) values (3, 'usuario', 'usuario@arce.com', '$2a$10$IwZmYmE7K3lhNEbhOsnpl.spG3kSveAsprXCodFcbYx4XW4g3aWzy');


INSERT INTO permissao (codigo, descricao) values (1, 'ROLE_CADASTRAR_PRODUTO');
INSERT INTO permissao (codigo, descricao) values (2, 'ROLE_PESQUISAR_PRODUTO');
INSERT INTO permissao (codigo, descricao) values (3, 'ROLE_DELETAR_PRODUTO');
INSERT INTO permissao (codigo, descricao) values (4, 'ROLE_EDITAR_PRODUTO');

-- admin
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 3);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (1, 4);

-- gerente
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 1);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 2);
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (2, 4);

-- usuário
INSERT INTO usuario_permissao (codigo_usuario, codigo_permissao) values (3, 2);

-- produtos
INSERT INTO produto (descricao, valor) VALUES ('Produto 01', 10);
INSERT INTO produto (descricao, valor) VALUES ('Produto 02', 20);
