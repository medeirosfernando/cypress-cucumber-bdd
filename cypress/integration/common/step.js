/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS

Given(/^I have access to the Medical Guide$/, () => {
	cy.visit('/guia-medico')  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)    
});