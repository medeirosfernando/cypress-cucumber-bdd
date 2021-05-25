/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS

Given(/^that access to the Medical Guide$/, () => {
	cy.visit('/guia-medico')  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)
    cy.get(el.tabSearchAdvanced).click()
});

When(/^I conduct research$/, () => {
    cy.get(el.selectState).should('contain', 'Estado').type('Rio de Janeiro{enter}')
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
});

Then(/^I see options for doctors menos da cidade de São Paulo$/, () => {
	cy.get(el.labelState).should('contain.text', 'Rio de Janeiro')
});
