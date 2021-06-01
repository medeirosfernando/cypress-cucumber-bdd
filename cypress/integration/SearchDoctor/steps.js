/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS
const state = 'Rio de Janeiro'
const state_1 = 'RJ'
const city = 'Araruama'
const city_1 = 'Armação dos Búzios'
const doctor = 'Karla Valeria Medina Fisioterapia'
const specialty = "Fonoaudiologia"
const city_label = "Cidade"

// Background - access to the Medical Guide
Given(/^I have access to the Medical Guide$/, () => {
	cy.visit('/guia-medico#', { timeout: 90000 }) 
});


// Scenario: Search for doctors by city using common search
When(/^I fill the search field$/, () => {
    cy.get(el.inputCommonSearch)
	.focus()
	.type(`${city_1}`)
});

When(/^I click on Search button$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors in the city$/, () => {
	cy.get(el.labelState, { timeout: 80000})
	.should('contain', city_1)
});

// Scenario: Search for doctors by specialty and city using detailed search
When(/^I select the specialty$/, () => {
	cy.get(el.selectSpecialty, { timeout: 30000 })
	.first()
	.click()
	.type(`${specialty}{enter}`)
    cy.wait(1000)
});

When(/^I select the state$/, () => {
	cy.get(el.selectStateDynamic, { timeout: 15000 })
	.click({ force: true })
	.should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectStateRJ)
	.contains(`${state}`)
	.click()  
    cy.wait(1000)
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectCityAraruama)
	.contains(`${city}`).click()
});

When(/^I click on Search button$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors by specialty for the city$/, () => {
	cy.wait(3000)
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Search for doctors by specialty and city using detailed search and urgent and emergency care only
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I select the Urgent and emergency care only button$/, () => {
	cy.get(el.toogleEmergency)
	.click()
});

When(/^I select the specialty$/, () => {
	cy.get(el.selectSpecialty, { timeout: 30000 })
	.first()
	.click()
	.type(`${specialty}{enter}`)
    cy.wait(1000)
});

When(/^I select the state$/, () => {
	cy.get(el.selectStateDynamic, { timeout: 15000 })
	.click({ force: true })
	.should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ)
	.contains(`${state}`)
	.click()  
    cy.wait(1000) 
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView().should('be.visible')
    cy.get(el.selectCityAraruama)
	.contains(`${city}`)
	.click()
});

When(/^I click on Search button$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options of doctors by specialty for the city$/, () => {
	cy.wait(4000)
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Search for doctors by city using common search and urgent and emergency care only
When(/^I fill the search field with a city name$/, () => {
	cy.get(el.inputCommonSearch, { timeout: 8000 })
	.focus()
	.type(`${city}`)
});

When(/^I select the Urgent and emergency care only button$/, () => {
	cy.get(el.toogleEmergency)
	.click()
});

When(/^I click on Search button$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options of doctors in the city$/, () => {
	cy.wait(3000)
    cy.get(el.labelEstablishment, { timeout: 80000 })
    .should('contain.text', 'Internações')
    .and('contain.text', 'Análises')
});

// Scenario: search for specific doctor
When(/^I fill the search field with a doctor name$/, () => {
	cy.get(el.inputCommonSearch, { timeout: 30000 })
	.focus().type(`${doctor}`)
	.should('be.visible')
});

When(/^I click on Enter key$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options of the doctors in the city$/, () => {
	cy.wait(5000)
    cy.get(el.doctorLabelName, { timeout: 30000 })
	.should('contain.text', doctor)
});

