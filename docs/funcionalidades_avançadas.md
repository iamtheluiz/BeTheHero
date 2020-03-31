# Funcionalidades Abançadas

## Validações

O celebrate é uma bibliotca baseada no joi, mas que possui integração com o express.
Essas validações deve estar em conjunto com as rotas, sendo que elas devem estar presentes nas rotas que necessitam de um parâmetro do usuário.

## Testes

### Por que fazer testes?

Para confirmar que a aplicação continua funcionando como um todo, não tendo a necessidade de testar manualmente todas as páginas/rotas que o sistema possui.

### TDD

O TDD é a sigla para Test-Driven Development (Desenvolvimento Dirigido a Testes). Ele pregra que os testes da aplicação devem ser criados primeiro e o desenvolvimento da feature deve ocorrer depois, guiando o seu desenvolvimento.

### Jest

Framework de testes que pode ser usado no Node, React e React Native.

### Tipos de Testes

#### Testes Unitários

Testa apenas um pedaço da aplicação, como uma função.

#### Testes de Integração

São testes que vão testar o fluxo inteiro de uma rota, testando uma funcionalidade por completo.

### Teste de Integração

#### Configurar Banco de Dados de Teste

No knextfile, criaremos uma nova conexão para testes:

```js
test: {
  client: 'sqlite3',
  connection: {
    filename: './src/database/test.sqlite'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  useNullAsDefault: true
},
```

Como essa configuração só deve ser usada no ambiente de testes, precisamos adicionar uma variável de ambiente que identifique ele, assim utilizaremos o "cross-env" e adicionaremos ele no script de teste:

```json
"scripts": {
  "start": "nodemon src/index.js",
  "test": "cross-env NODE_ENV=test jest"
},
```

Para fazer as requisições do nosso teste, iremos utilizar a biblioteca "supertest".

## Deploy

### Node

Ao criar uma aplicação experimental, é interessante utilizar o Heroku. Ele também é interessante para aplicações maiores, mas isso tem custo. Para fazer deploy no heroku, a Rocketseat tem tutoriais.
Caso essa seja uma aplicação comercial, a digital ocean possui um plano muito interessante mesmo para aplicações pequenas, e a Rocketseat também possui uma Masterclass #03 com deploy nesse serviço.
Agora, para serviços muito grandes, é difícil fazer uma sugestão, mas existem 3 opções:
* AWS
* Google Cloud
* Microsoft Azure

### React

Em casos de aplicações pequenas, o Netlify é uma ótima opção, sendo somente para frontend e de fácil deploy.

### React Native

O React Native precisa ser publicado nas stores, não tem jeito. Existe um code drop da Rocketseat de como gerar o apk e o ipa dos aplicativos.

## Estudos para Frente

### Padrões de Código

Entender o EsLint e Prettier

### Autenticação JWT (Login)

Segurança no login, existem vídeos

### Styled Components

Também existem vídeos

## Dicas

Colocar tudo o que você desenvolver no Github e postar todas as coisas que você aprendeu durante a semana no Linkedin, mostrando os projetos e as tecnologias.