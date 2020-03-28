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

O nosso backend utilizará do framework "express", que oferece toda a estrutura de rotas e interações do servidor que são necessários para o projeto.

## Frontend

### Abordagem Tradicional

Na abordagem tradicional, o navegador faz uma requisição para um back-end (independente da linguagem), solicitando que o back-end gere uma página (como a listagem de usuários). Assim sendo, o back-end captura os dados necessário e monta uma página estática com esses dados, enviando para o navegador que fez a requisição.

Dessa forma, o back-end lida com todas as partes do sistema: Regas de negócio, conexão com banco de dados e a apresentação do site.

Isso limita muito a ação do back-end, que só consegue prover páginas para navegadores, não possibilitando sua utilização por aplicativos, outros serviços, entre outros.

### Abordagem de SPA

SPA é a sigla para Single Page Application. Sua abordagem consiste de fazer requisições que retornam apenas dados, deixando-os à disposição do front-end, que faz as alterações necessárias por conta. Ao utilizar esse método, o navegador é o único responsável por carregar a interface do site, retirando essa responsabilidade do back-end.

Para isso, o back-end precisa utilizar uma estrutura de dados compreendida pelo front-end (no nosso caso, o JSON), que disponibiliza as informações requisitadas. Assim sendo, a página não tem necessidade de ser recarregada, pois o framework Javascript cuida das interações das interfaces.

### Porque o React?

Diferente do Javascript puro, as frameworks de Javascript adicionam diversas funções extras e outras facilidades. Existem diversos frameworks (como Angular, Vue e o próprio React), mas, atualmente, o React é tido como mais popular.

### Criando uma Aplicação com React

```bash
npx create-react-app frontend
```

## Mobile

### Abordagem Tradicional

Para desenvolver para Android e IOS são utilizadas linguagens diferentes, dentre elas o Objective-C, Swift, Java e Kotlin, cada um gerando um pacote com o código da aplicação, sendo possível de instalar nos dispositivos móveis.

Mas isso faz com que seja necessário fazer duas aplicações para cada sistema operacional, fazendo com que qualquer alteração e implementação tenham de ser feitas duas vezes.

### Abordagem do React Native

Aqui é desenvolvida uma única aplicação, que depois gera um .apk (Android) e um .ipa (IOS), não sendo necessário utilizar mais linguagens durante o desenvolvimento, e possibilitando reutilizar todo o conhecimento do back-end e do front-end para o mobile.

Essas aplicações são consideradas nativas, pois o React Native implementa em sua aplicação o Javascript Core, que é um framework que possibilita que o sistema operacional mobile consiga interpretar código Javascript para criar e manipular interfaces, não sendo um código convertido. Isso faz com que sua performance seja muito próxima da do desenvolvimento com código nativo.

### Por que utilizaremos o Expo?

O Expo é um conjunto de ferramentas (framework) para React Native que disponibiliza bibliotecas para utilizar as funções e os recursos que seu celular possui (como câmera, gps, mapa, sensores, etc).

#### Sem o Expo

Dessa forma, é necessário instalar as SDK's do Android e IOS para gerar o aplicativo final. Isso faz com que o desenvolvimento seja mais pesado, pois são ferramentas mais complicadas de configurar e executar.

#### Com o Expo

O Expo é um aplicativo instalado no seu celular, que possui todas as API's nativas do celular, não sendo necessário instalar as dependências por meio dos SDK's, facilitando o trabalho e as necessidades para desenvolvimento.

### Dificuldades

O Expo não pode ser usado para todas as aplicações, pois ele tem suas limitações, sendo extremamente importante diferenciar quando uma aplicação pode ou não ser desenvolvida com ele.