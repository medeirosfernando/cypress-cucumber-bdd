/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS

When(/^I conduct research$/, () => {
	cy.get(el.selectSpecialty).first().click().type('Acupuntura{enter}')
    cy.get(el.selectState).should('contain', 'Estado').type('Rio de Janeiro{enter}')
    cy.get(el.searchButton).last().click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.get(el.labelSpecialty).last().should('have.text', 'Acupuntura ')
    cy.get(el.labelState).should('contain.text', 'Volta Redonda')
});


When(/^I conduct research$/, () => {
	return true;
});

Then(/^I see options for doctors$/, () => {
	return true;
});


