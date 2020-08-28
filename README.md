# oauth2
Pequeno projeto contendo um crud utilizando as seguintes tecnologias:

1 - ReactJS
2 - SpringBoot
3 - Autenticação OAuth2
4 - Docker, Docker Compose
5 - Loadbalance utilizando o Nginx

Para executar, basta clonar o projeto e no diretório que se encontra o arquivo docker-compose.yml executar o comando: docker-commpose up --build.

 O dockerfile irá gerar um container para a aplicação front-end e mais 3 containers contendo o back-end para receber as requisições através do load balance do nginx.
