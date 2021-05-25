/// <reference types="cypress" />

const el = require('./elements').ELEMENTS

class Search {
    accessMedicalGuidePage () {
    cy.visit('/guia-medico')  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)
    }

    advancedSearch () {
      cy.get(el.tabSearchAdvanced).click()
      cy.get(el.selectSpecialty).first().click().type('Acupuntura{enter}')
      cy.get(el.selectState).should('contain', 'Estado').type('Rio de Janeiro{enter}')
      cy.get(el.searchButton).last().click({ force: true })
    }

    advancedSearchPaginator () {
      cy.get(el.tabSearchAdvanced).click()
      cy.get(el.selectState).should('contain', 'Estado').type('Rio de Janeiro{enter}')
      cy.get(el.searchButton).last().click({ force: true })
      cy.get(el.paginatorButton).click() 
      cy.get(el.paginatorButton).click()
    }

    advancedSearchAssertion () {
      cy.get(el.labelSpecialty).last().should('have.text', 'Acupuntura ')
      cy.get(el.labelState).should('contain.text', 'Volta Redonda')
    } 
    
    advancedSearchPaginatorAssertion () {
      cy.get(el.labelState).should('contain.text', 'Rio de Janeiro')
    }    
}

export default new Search()
