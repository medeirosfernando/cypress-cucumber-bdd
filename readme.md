# Testes de UI com Cypress, Cucumber usando a prática BDD
![cucumber](https://user-images.githubusercontent.com/25454762/120257830-521d3d00-c267-11eb-8c4f-1efd6f405a87.png)
![cypress](https://user-images.githubusercontent.com/25454762/120257831-534e6a00-c267-11eb-9486-30b9b8f1f843.png)
![bdd](https://user-images.githubusercontent.com/25454762/120257832-534e6a00-c267-11eb-8358-88e7e2b8ad69.png)

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

- [Cypress Cucumber Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) 
- [Cypress Tab](https://github.com/Bkucera/cypress-plugin-tab)

## Desafio
```sh
Elaborar cenários de testes e em programação necessárias para automatização dos testes.

Criar um projeto de automação utilizando BDD.
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

- Modo navegador aberto: npm run cy:open
- Modo headless: npm run cy:run
- Modo navegador aberto cucumber: npm run cy:open:cucumber
- Modo navegador headless cucumber: npm run cy:run:cucumber

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

## Vídeos das execuções dos testes

### Sem cucumber
https://user-images.githubusercontent.com/25454762/120257877-6bbe8480-c267-11eb-95c2-2f5782579a1b.mp4

### Com cucumber


**Explorar é acreditar que algo novo possa ser revelado, descoberto. `Nando Medeiros`**
