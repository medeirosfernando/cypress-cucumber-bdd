/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS
const state = 'Rio de Janeiro'
const state_1 = 'RJ'
const city = 'Araruama'
const city_1 = 'Armação dos Búzios'
const city_2 = 'Rio de Janeiro'
const district = 'Centro'
const district_1 = 'Bangu'
const doctor = 'Karla Valeria Medina Fisioterapia '
const establishment_1 = 'Médico'
const qualification = 'Residência'

// should seek doctors only in the city of Rio de Janeiro through the detailed search
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced).click({ force: true })
});

When(/^I select the state$/, () => {
	cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`) 
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton).last().click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
    cy.get(el.labelState).should('contain.text', state_1)
});


// Seek doctors only in the Rio de Janeiro city through detailed search and only urgent and emergency care
When(/^I click on Detailed search$/, () => {
    cy.get(el.tabSearchAdvanced).click()
});

When(/^I select option urgent and emergency care$/, () => {
	cy.get(el.toogleEmergency).click()
});

When(/^I select the state$/, () => {
	cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`) 
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton).last().click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
    cy.get(el.labelState).should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by district
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced).click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters).click({ force: true })
});

When(/^I select the state$/, () => {
	cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity).focus().type(`${city_2}{enter}`)
});

When(/^I select the district$/, () => {
    cy.wait(1000)
	cy.get(el.inputDistrict, { timeout: 5000 }).focus().type(`${district}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton).last().click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
    cy.get(el.labelState).should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by network
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced).click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters).click({ force: true })
});

When(/^I select the state$/, () => {
	cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity).focus().type(`${city_2}{enter}`)
});

When(/^I select the network$/, () => {
	cy.get(el.inputNetwork).focus().type('ES04{enter}')
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton).last().click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
    cy.get(el.labelState).should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by plan type




   
    
    