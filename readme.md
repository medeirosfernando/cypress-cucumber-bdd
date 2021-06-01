# Testes de UI com `--Cypress, `--Cucumber usando a prática `--BDD

## Projeto desenvolvido para estudo pessoal

- [Site](https://www.unimed.coop.br) 

| Passos para configuração e execução do projeto | Comando                    |
| ---------------------------------------------- | ---------------------------|
| Instalação das dependências                    | `npm install`              |
| Execução dos testes modo open                  | `npm run cy:open`          |
| Execução dos testes modo open com cucumber     | `npm run cy:open:cucumber` |

## Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Cypress 7.4.0](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
- [Cucumber 6.0.0](https://cucumber.io/tools/cucumberstudio/?&utm_medium=ppcg&utm_source=aw&utm_term=%2Bcucumber%20%2Bframework&utm_content=444348764785&utm_campaign=%7Bcampaign%7D&gclsrc=aw.ds&gclid=EAIaIQobChMI9ZqB7qb18AIVkYKRCh190wtyEAAYASAAEgLAmfD_BwE)
- [NodeJs 14.15.0](https://nodejs.org/en/)
- [NPM 7.13.0](https://docs.npmjs.com/cli/v7/commands/npm-install)
## Dependências

Instale as dependências:

[Cypress Cucumber Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) 
[Cypress Tab](https://github.com/Bkucera/cypress-plugin-tab)

## Desafio
```sh
Elaborar cenários de testes e em programação necessárias para automatização dos testes
```
```sh
Criar um projeto de automação utilizando BDD.
```
## Execução de cenários individuais

- Para executar um único cenário no cypress, inserir a tag ".only" na frente do teste( palavra "it").

it.only'example', () => {
    // test code
  });

- Para executar um único cenário no cucumber, inserir a tag "@focus" acima do cenário.

@focus
Scenario: Scenario name

