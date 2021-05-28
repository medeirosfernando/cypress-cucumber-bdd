/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
const state = 'Rio de Janeiro'
const state_1 = 'RJ'
const city = 'Araruama'
const city_1 = 'Armação dos Búzios'
const doctor = 'Karla Valeria Medina Fisioterapia '
const specialty = 'Fonoaudiologia'

class Search {

  accessMedicalGuidePage () {
    cy.visit('/guia-medico')  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)
    cy.get(el.titleSearchPage).should('have.text', 'Encontre um médico')
  }

  advancedSearch () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.selectSpecialty).first().click().type('Fonoaudiologia{enter}')
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.selectCity).should('contain', 'Cidade').type(`${city}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
  }

  advancedEmergencySearch () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.toogleEmergency).click()
    cy.get(el.selectSpecialty).first().click().type('Fonoaudiologia{enter}')
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.selectCity).should('contain', 'Cidade').type(`${city}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
  }

  advancedSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)    
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedSearchAssertion () {
    cy.get(el.labelSpecialty).should('contain.text', specialty)
    cy.get(el.labelState).should('contain.text', city)
  } 

  advancedSearchEmergencyAssertion () {
    cy.get(el.labelState).should('contain.text', state_1)
  }
  
  advancedSearchPaginatorAssertion () {
    cy.get(el.labelState).should('contain.text', state)
  } 
  
  commonSearch () {
    cy.get(el.inputCommonSearch).focus().type(`${city_1}{enter}`)
  }

  commonSearchAssertion () {
    cy.get(el.labelState).should('contain', city_1)
  }

  doctorSearch () {
    cy.get(el.inputCommonSearch).focus().type(`${doctor}{enter}`)
  }

  doctorSearchAssertion () {
    cy.get(el.doctorLabelName).should('have.text', doctor)
  }

  urgentEmergencySearch () {
    cy.get(el.inputCommonSearch).focus().type(`${city}`)
    cy.get(el.toogleEmergency).click()
    cy.get(el.searchButton).last().click({ force: true })
  }

  urgentEmergencySearchAssertion () {
    cy.get(el.labelEstablishment)
    .should('contain.text', 'Internações')
    .and('contain.text', 'Análises')
  }
}

export default new Search()
