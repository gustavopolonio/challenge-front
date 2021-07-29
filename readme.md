![Eplus](https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png)

# E-Plus Frontend Challenge

# :pushpin: Tabela de Conteúdos

* [Sobre o Projeto](#book-sobre-o-projeto)
* [Funcionalidades](#rocket-funcionalidades)
* [Como Usar](#construction_worker-como-usar)
* [Tecnologias](#computer-tecnologias)
* [Licença](#closed_book-licença)

# :book: Sobre o Projeto

Esse é o Challenge fornecido pela [Agência E-Plus](https://www.agenciaeplus.com.br/) que tinha como objetivo desenvolver o seguinte [design](https://projects.invisionapp.com/share/NARHXUS6HCF#/screens/357617423_Eplus).

Foi necessário consumir um arquivo json para manipular os items do carrinho de compras e, além do desgin para web, também era necessário fazer uma adaptação responsiva para o projeto.

# :rocket: Funcionalidades 

Optei por fazer o projeto com HTML, CSS e Javascript, pois o layout tem apenas uma página e não há muitos dados dinâmicos. Comecei desenvolvendo o design em si, 
dividindo a parte superior (header) e o restante (main).

Utilizei o [Express](https://expressjs.com/) para iniciar um servidor e instalei o [Nodemon](https://www.npmjs.com/package/nodemon) para facilitar o trabalho.

Construi a box do mini-cart, deixando-a em uma posição absoluta em relação ao main, e consumi o arquivo json para pegar a lista dos produtos que estão no mini-cart.
Alguns dos dados da lista tiveram que ser tratados, como por exemplo o nome dos produtos no carrinho e o valor total da compra do cliente.

Utilizei o Template Engine [Nunjucks](https://mozilla.github.io/nunjucks/) para conseguir trabalhar com dados dinâmicos, e preenchi dinamicamente a lista de produtos do mini-cart.

Para finalizar fiz uma adaptação responsiva, selecionando alguns breakpoints e utilizando o menu hamburguer. 

O botão do mini-cart e do menu hamburguer ativam uma função toggle quando clicados, deixando os dados mais organizados.

# :construction_worker: Como Usar

Antes de começar, você precisa ter instalado na sua máquina: [Node](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/), [Git](https://git-scm.com/) e um editor de código (eu uso o [VSCode](https://code.visualstudio.com/)).

```bash

# Clone esse repositório via HTTPS:
$ git clone https://github.com/gustavopolonio/challenge-front.git

# Entre na pasta do repositório:
$ cd challenge-front

# Instale as dependências:
$ yarn install

# Inicie a aplicação num ambiente de desenvolvimento:
$ yarn start

```

# :computer: Tecnologias

* [Express](https://expressjs.com/)
* [Nodemon](https://nodemon.io/)
* [Nunjucks](https://github.com/mozilla/nunjucks)
* [Ícones](https://material.io/icons/)
* [VSCode](https://code.visualstudio.com/)

# :closed_book: Licença

Esse projeto está sob a licença MIT. Veja a [licença](https://github.com/gustavopolonio/challenge-front/blob/master/LICENSE) para mais informações.

---

Feito com :green_heart: por [Gustavo Polonio](https://github.com/gustavopolonio) 🚀

[![Linkedin Badge](https://img.shields.io/badge/-Gustavo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gustavo-polonio-04b77a169/)](https://www.linkedin.com/in/gustavo-polonio-04b77a169/)
[![Gmail Badge](https://img.shields.io/badge/-gustavopolonio1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gustavopolonio1@gmail.com)](mailto:gustavopolonio1@gmail.com)
