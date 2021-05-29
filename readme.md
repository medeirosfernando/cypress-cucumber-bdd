## Iniciando o projeto com Cypress

### Testes realizados no site da Unimed

- https://www.unimed.coop.br

Passos:
  a. instalação das dependências: `npm install`
  b. execução dos testes modo open: `npm run cy:open`
  c. execução dos testes modo headless: `npm run cy:run`
  d. execução dos testes modo open com cucumber: `npm run cy:open:cucumber`
  e. execução dos testes modo headless com cucumber: `npm run cy:run:cucumber`


Tecnologias

 escrever os passos: https://www.npmjs.com/package/cypress-cucumber-preprocessor

Para executar um único cenário no cypress, inserir a tag ".only" na frente do teste.

it.only'example', () => {
    // test code
  });

Para executar um único cenário no cucumber, inserir a tag "@focus" acima do cenário.

@focus
Scenario: Scenario name

