/// <reference types="cypress" />

const el = require('../../support/pages/elements').ELEMENTS
const state = 'Rio de Janeiro'
const state_1 = 'RJ'
const city_2 = 'Rio de Janeiro'
const district = 'Centro'
const district_1 = 'Bangu'
const establishment_1 = 'Médico'
const qualification = 'Residência'
const city_label = "Cidade"
const network = "ES04"
const network_1 = "ES05"
const district_label = "Bairro"
const qualification_label = "Qualificação"
const plan = "(705690997) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA"
const plan_2 = "(480053182) - UNIMED FACIL INDIVIDUAL ESTADUAL COLETIVO"
const plan_3 = "(436116014) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA DENTAL UNIPART 30"

// Background - access to the Medical Guide
Given(/^I have access to the Medical Guide$/, () => {
	cy.visit('/guia-medico') 
});

When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

// should seek doctors only in the Rio de Janeiro city through the detailed search
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click({ force: true })
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
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(1000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(3000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});


// Seek doctors only in the Rio de Janeiro city through detailed search and only urgent and emergency care
When(/^I click on Detailed search$/, () => {
    cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I select option urgent and emergency care$/, () => {
	cy.get(el.toogleEmergency)
	.click()
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
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {	
	cy.wait(1000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(3000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by district
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectCityRioJaneiro)
	.contains(`${city_2}`).click()
});

When(/^I select the district$/, () => {
	cy.get(el.divDistrict, { timeout: 15000 })
	.contains(`${district_label}`)
	.click({ force: true })
	.should('be.visible', `${district_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectMenuDynamic, { timeout: 15000 })
	.contains(`${district}`)
	.click()
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by establishment
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectCityRioJaneiro)
	.contains(`${city_2}`).click() 
});

When(/^I select the establishment$/, () => {
	cy.get(el.inputEstablishment)
	.focus()
	.type(`${establishment_1}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});


// Seek doctors only in the Rio de Janeiro city by network
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectCityRioJaneiro)
	.contains(`${city_2}`)
	.click()
});

When(/^I select the network$/, () => {
	cy.get(el.inputNetwork)
	.focus()
	.type(`${network}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by plan type
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectCityRioJaneiro)
	.contains(`${city_2}`)
	.click()
});

When(/^I select the plan$/, () => {
	cy.get(el.inputPlan)
	.focus()
	.type(`${plan_2}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by qualification
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)  
});

When(/^I select the qualification$/, () => {
	cy.get(el.inputQualification)
	.focus()
	.type(`${qualification}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});


// Seek doctors only in the Rio de Janeiro city by district and type
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
	cy.wait(1000)
});

When(/^I select the district$/, () => {
    cy.get(el.inputDistrict)
	.focus()
	.type(`${district_1}{enter}`) 
});

When(/^I select the establishment$/, () => {
	cy.get(el.inputEstablishment)
	.focus()
	.type(`${establishment_1}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by district and network
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the district$/, () => {
	cy.get(el.inputDistrict)
	.focus()
	.type(`${district}{enter}`)
});

When(/^I select the network$/, () => {
	cy.get(el.inputNetwork)
	.focus()
	.type(`${network}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by district and plan
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the district$/, () => {
	cy.get(el.inputDistrict)
	.focus()
	.type(`${district}{enter}`)
});

When(/^I select the plan$/, () => {
	cy.get(el.inputPlan)
	.focus()
	.type(`${plan}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by district and qualification
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the district$/, () => {
	cy.get(el.inputDistrict)
	.focus()
	.type(`${district}{enter}`) 
});

When(/^I select the qualification$/, () => {
	cy.get(el.inputQualification)
	.focus()
	.type(`${qualification}{enter}`) 
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 }).should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by type and network
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the type$/, () => {
	cy.get(el.inputEstablishment)
	.focus()
	.type(`${establishment_1}{enter}`)
});

When(/^I select the network$/, () => {
	cy.get(el.inputNetwork)
	.focus()
	.type(`${network_1}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by type and plan
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`) 
});

When(/^I select the type$/, () => {
	cy.get(el.inputEstablishment, { timeout: 5000 })
	.focus()
	.type(`${establishment_1}{enter}`) 
});

When(/^I select the plan$/, () => {
	cy.get(el.inputPlan)
	.focus()
	.type(`${plan}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton).last()
	.click({ force: true })
    cy.wait(5000)
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by type and qualification
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the type$/, () => {
	cy.get(el.inputEstablishment, { timeout: 5000 })
	.focus()
	.type(`${establishment_1}{enter}`)
});

When(/^I select the qualification$/, () => {
	cy.get(el.inputQualification, { timeout: 8000 })
	.focus()
	.type(`${qualification}{enter}`)
	cy.wait(2000)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
    cy.wait(3000)
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by network and plan
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity)
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the network$/, () => {
	cy.get(el.inputNetwork)
	.focus()
	.type(`${network}{enter}`)
});

When(/^I select the plan$/, () => {
	cy.get(el.inputPlan)
	.focus()
	.type(`${plan}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton).last()
	.click({ force: true })
    cy.wait(5000)
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by network and qualification

When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters)
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.inputCity, { timeout: 5000 })
	.focus()
	.type(`${city_2}{enter}`)
});

When(/^I select the network$/, () => {
	cy.get(el.inputNetwork, { timeout: 5000 })
	.focus()
	.type(`${network}{enter}`) 
});

When(/^I select the qualification$/, () => {
	cy.get(el.inputQualification)
	.focus()
	.type(`${qualification}{enter}`)
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
    cy.wait(3000)
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton)
	.click() 
    cy.get(el.paginatorButton)
	.click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});

// Seek doctors only in the Rio de Janeiro city by plan and qualification
When(/^I click on Detailed search$/, () => {
	cy.get(el.tabSearchAdvanced)
	.click()
});

When(/^I click on see more filters$/, () => {
	cy.get(el.moreFilters, { timeout: 5000 })
	.click({ force: true })
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
});

When(/^I select the city$/, () => {
	cy.get(el.selectCityDinamic, { timeout: 15000})
	.click({ force: true })
	.should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.selectCityRioJaneiro)
	.contains(`${city_2}`)
	.click()
});

When(/^I select the plan 436116014$/, () => {
	cy.get(el.inputPlan, { timeout: 8000 })
	.focus()
	.type(`${plan_3}{enter}`)
	.should('be.visible')
});

When(/^I select the qualification$/, () => {
	cy.get(el.divQualification)
	.contains(`${qualification_label}`)
	.click({ force: true })
	.should('be.visible', `${qualification_label}`)
    cy.get(el.selectMenuDynamic)
	.scrollIntoView()
	.should('be.visible')
    cy.get(el.divQualificationRes)
	.contains(`${qualification_label}`)
	.type(`${qualification}{enter}`) 
});

When(/^I click on button search$/, () => {
	cy.get(el.searchButton)
	.last()
	.click({ force: true })
    cy.wait(3000)
});

Then(/^I see options for doctors$/, () => {
	cy.wait(2000)
	cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click() 
	cy.wait(2000)   
    cy.get(el.labelState, { timeout: 30000 })
	.should('contain.text', state_1)
});  
     
    
    


    
    
      
    
    
    
    




    
    
    
       
     
    
    

    
    
     
      
     
    
    
