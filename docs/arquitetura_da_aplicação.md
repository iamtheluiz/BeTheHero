# Arquitetura da Aplicação

## Back-end

O backend é aquilo que o usuário não consegue enxergar.

Suas responsabilidades incluem:
* Regras de negócio da aplicação
* Conexão com bancos de dados
* Envio de e-mail
* Comunicação com webservices (outros serviços)
* Autenticação do usuário
* Criptografia e segurança do sistema

O que estaremos desenvolvimento é uma "API RESTFUL" (Application Programming Interface), não possuindo a parte visual (que será desempenhada pelo ReactJS e React Native). Dessa forma, nosso backend se comunica servindo informações para um cliente, e essas informações são transmitidas utilizando a estrutura de dados JSON (Javascript Object Notation).