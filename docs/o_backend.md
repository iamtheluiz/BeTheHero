# O Backend

## Rotas e recursos

Quando olhamos uma rota como "localhost:3333/users", temos que:
* A rota é o conjunto completo
* O recurso é o que está sendo solicitado (no nosso caso "/users")

## Métodos HTTP

Existem diversos métodos HTTP, sendo alguns deles:
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação do back-end

O navegador, ao requisitar uma página, utiliza o método GET, sendo necessário um software para realizar o teste de outros tipos de rotas. No nosso caso, utilizaremos o Insomnia para fazer esse trabalho.

## Tipos de Parâmetros

O back-end também pode receber dados de diversas formas:
* Query Params: São parâmetros nomeados enviados na rota após "?", servindo para filtros e paginação
  - (http://localhost:3333/lista?name=Luiz&idade=18)
  - Acesso via "request.query"
* Route Params: São parâmetros utilizados para identificar recursos (dados de um único usuário, por exemplo)
  - Acesso via "request.params"
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  - Acesso via "request.body"

## Nodemon para Desenvolvimento

O nodemon é uma biblioteca que permite seu código ser atualizado ao ocorrer uma alteração, mas ele deve ser instalado como uma dependência de desenvolvimento (com a flag "-D"):

```bash
npm install nodemon -D
```

Com o nodemon instalado, adicione um script para iniciar o servidor com ele:

```json
"scripts": {
  "start": "nodemon index.js"
},
```

Dessa forma o seu ambiente de desenvolvimento pode ser iniciado utilizando o comando:

```bash
npm start
```

## Banco de Dados

### SQL

São bancos de dados que utilizam-se do formato SQL, como:
* MySQL
* SQLite
* PostgreSQL
* Oracle
* Microsoft SQL Server

Possuem uma estrutura muito bem definida, principalmente em seus relacionamentos, e como utilizaremos o banco de dados SQLite, não será necessário instalar dependências novas.

### NoSQL

São bancos de dados que não utilizam o formato SQL, como:
* MongoDB
* CouchDB

Esses bancos de dados não tem uma estrutura definida, possibilitando que os registros tenham dados diferentes um do outro, sendo interessante para escopos mais simples e que precisam de uma boa velocidade para o desenvolvimento.

### Trabalhando com SQL no Node

Podemos utilizar umas das seguintes estratégias:
* Driver: Utilizar o driver oficial (SELECT * FROM users)
* Query Builder: Literalmente um construtor de querys, utilizando a notação do Javascript para interagir com o banco de dados (no nosso caso utilizaremos o knexjs)

```bash
# Query Builder
npm install knex

# Driver
npm install sqlite3

npx knex init
```

Após esse processo, você terá um arquivo chamado 'knexfile.js', que contém as configurações do banco de dados para os ambientes de desenvolvimento, staging (simula a produção) e produção.

### Definindo as Entidades e Funcionalidades

#### Entidades

* ONG
* Caso (Incident)

#### Funcionalidades

* Login de ONG
* Logout de ONG
* Cadastro de ONG
* Listar casos específicos de uma ONG
* Cadastrar novos casos
* Deletar casos
* Listar todos os casos
* Entrar em contato com a ONG

### Migrations

As migrações consistem de uma forma de guardar as tabelas que foram criadas, mantendo um histórico das tabelas (uma espécie de controle de versões do banco), isso facilita o trabalho em grupo, pois, caso alguém crie novas tabelas, isso fica registrado no histórico e pode ser instalado por outros desenvolvedores.

Para criar uma magration, configure o knex para armazena-las em uma pasta:

```js
development: {
  client: 'sqlite3',
  connection: {
    filename: './src/database/db.sqlite'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  useNullAsDefault: true
},
```

E execute o comando que cria a migração

```bash
npx knex migrate:make create_ongs (nome da migration)
```

Isso criará um arquivo onde você pode definir todas as alterações no banco de dados necessárias (a documentação com todos os comandos pode ser encontrada no site do knexjs).

```js
exports.up = function(knex) { // Criação da tabela
  return knex.schema.createTable('ongs', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) { // Caso ocorra um erro
  return knex.schema.dropTable('ongs');
};
```

E para executar todas as migrations:

```bash
npx knex migrate:latest
```

Criando a tabela de casos

```js
exports.up = function(knex) { // Criação da tabela
  return knex.schema.createTable('incidents', table => {
    table.increments(); // ID auto_increment primary_key

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();

    // Foreign key
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) { // Caso ocorra um erro
  return knex.schema.dropTable('incidents');
};
```

Executando a migration:

```bash
npx knex migrate:latest
```

Caso seja necessário desfazer a última migration:

```bash
npx knex migrate:rollback
```

Para ver as migrations que já foram executadas:

```bash
npx knex migrate:status
```

### Arquivo de Conexão

Para se conectar com o banco de dados, é necessário criar um arquivo de conexão. Por conveniência estaremos criando ele dentro da pasta "database/" com o nome "connection.js":

```js
const knex = require('knex');
const configuration = require('../../knexfile');

// Gera uma conexão de desenvolvimento
const connection = knex(configuration.development);

module.exports = connection;
```