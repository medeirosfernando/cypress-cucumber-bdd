## Iniciando o projeto com Cypress

### Testes realizados no site da Unimed

- https://www.unimed.coop.br

Passos para configuração e execução do projeto:
  a. instalação das dependências: `npm install`
  b. execução dos testes modo open: `npm run cy:open`
  c. execução dos testes modo open com cucumber: `npm run cy:open:cucumber`

# Tecnologias
- Cypress 7.4.0
- Cucumber
- NodeJs 14.15.0
- NPM 7.13.0
# Dependências

- Cypress Cucumber Preprocessor (site para configuração: https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- Cypress Tab (site para configuração: https://github.com/Bkucera/cypress-plugin-tab)


# Execução de cenários individuais

- Para executar um único cenário no cypress, inserir a tag ".only" na frente do teste.

it.only'example', () => {
    // test code
  });

- Para executar um único cenário no cucumber, inserir a tag "@focus" acima do cenário.

@focus
Scenario: Scenario name

