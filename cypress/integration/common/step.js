/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS

Given(/^that access to the Medical Guide$/, () => {
	cy.visit('/guia-medico')  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)
    cy.get(el.tabSearchAdvanced).click()
});