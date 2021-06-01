![cypress](https://user-images.githubusercontent.com/25454762/120258163-e5ef0900-c267-11eb-9631-e33eb593f91a.png)

# Testes de UI com Cypress, Cucumber usando a prática BDD

## Projeto desenvolvido para estudo pessoal

- [Site](https://www.unimed.coop.br) 

## Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Cypress 7.4.0](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
- [Cucumber 6.0.0](https://cucumber.io/tools/cucumberstudio/?&utm_medium=ppcg&utm_source=aw&utm_term=%2Bcucumber%20%2Bframework&utm_content=444348764785&utm_campaign=%7Bcampaign%7D&gclsrc=aw.ds&gclid=EAIaIQobChMI9ZqB7qb18AIVkYKRCh190wtyEAAYASAAEgLAmfD_BwE)
- [NodeJs 14.15.0](https://nodejs.org/en/)
- [NPM 7.13.0](https://docs.npmjs.com/cli/v7/commands/npm-install)

## Dependências

Instale as dependências:

- [Cypress Cucumber Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) 
- [Cypress Tab](https://github.com/Bkucera/cypress-plugin-tab)

## Desafio
```sh
- Elaborar cenários de testes e em programação necessárias para automatização dos testes.

- Criar um projeto de automação utilizando BDD.
```

## Passos para configuração do projeto

> Dentro de uma pasta, abrir o terminal (prompt) e realizar os seguintes comandos:
> 
> Inicialização do projeto: npm init --yes
> 
> Instalação da última versão do Cypress: npm install -D cypress
> 
> Executar o comando para criação da estrutura padrão do Cypress via terminal na pasta raiz: npx cypress open
> 
> Apagar a pasta examples dentro do diretório Integration

## Execução dos testes

| Passos para configuração e execução do testes  | Comando                    |
| ---------------------------------------------- | ---------------------------|
| Instalação das dependências                    | `npm install`              |
| Execução dos testes modo open                  | `npm run cy:open`          |
| Execução dos testes modo open com cucumber     | `npm run cy:open:cucumber` |
| Execução dos testes modo headless              | `npm run cy:run`           |
| Execução dos testes modo headless com cucumber | `npm run cy:run:cucumber`  |  

## Execução de cenários individuais

- Para executar um único cenário no cypress, inserir a tag `.only` na frente do teste.

it`only`('example', () => {
    // test code
  });

- Para executar um único cenário no cucumber, inserir a tag `@focus` acima do cenário.

`@focus`
Scenario: Scenario name

## Conceitos e abordagens

> [Pairwise]testing (https://en.wikipedia.org/wiki/All-pairs_testing)
> 
> Page objects
> 
> Padrão AAA - [ARRANGE-ACT-ASSERT](https://freecontent.manning.com/making-better-unit-tests-part-1-the-aaa-pattern/)
> 
> BDD

## Vídeo

[Testes com Cucumber](https://www.youtube.com/watch?v=AxpC-IX-Q1Y)

`Explorar é acreditar que algo novo possa ser revelado, descoberto.` `Nando Medeiros`
