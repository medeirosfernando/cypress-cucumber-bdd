/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
const state = 'Rio de Janeiro'
const state_1 = 'RJ'
const city = 'Araruama'
const city_1 = 'Armação dos Búzios'
const city_2 = 'Rio de Janeiro'
const district = 'Centro'
const district_1 = 'Bangu'
const doctor = 'Karla Valeria Medina Fisioterapia'
const establishment_1 = 'Médico'
const qualification = 'Residência'
const specialty = "Fonoaudiologia"
const city_label = "Cidade"
const network = "ES04"
const district_label = "Bairro"
const qualification_label = "Qualificação"
const plan = "(705690997) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA"
const plan_1 = "(450353048) - 200611 INDIVIDUALFAMILIAR PERSONAL DENTAL QTO COLETIVO"
const plan_2 = "(480053182) - UNIMED FACIL INDIVIDUAL ESTADUAL COLETIVO"
const plan_3 = "(436116014) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA DENTAL UNIPART 30"

class Search {

  accessMedicalGuidePage () {
    cy.visit('/guia-medico#', { timeout: 90000 })  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)
    cy.get(el.titleSearchPage).should('have.text', 'Encontre um médico')
  }

  advancedSearch () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.selectSpecialty, { timeout: 30000 }).first().click().type(`${specialty}{enter}`)
    cy.wait(1000)
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click()  
    cy.wait(1000)   
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityAraruama).contains(`${city}`).click()
    cy.get(el.searchButton).last().click({ force: true })
  }

  advancedSearchAllFilters () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.toogleEmergency).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectSpecialty, { timeout: 30000 }).first().click().type('Cardiologia{enter}')
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityRioJaneiro).contains(`${city_2}`).click()
    cy.get(el.divDistrict, { timeout: 15000 }).contains(`${district_label}`)
    .click({ force: true })
    .should('be.visible', `${district_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectMenuDynamic, { timeout: 15000 }).contains('Centro').click()
    cy.get(el.inputEstablishment, { timeout: 8000 }).focus().type(`${establishment_1}{enter}`)
    cy.get(el.inputNetwork, { timeout: 8000 }).focus().type(`${network}{enter}`) 
    cy.get(el.inputPlan, { timeout: 8000 }).focus().type(`${plan_1}{enter}`)
    cy.get(el.inputQualification, { timeout: 8000 }).focus().type(`${qualification}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
  }

  advancedEmergencySearch () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.toogleEmergency, { timeout: 3000 }).click()
    cy.get(el.selectSpecialty, { timeout: 30000 }).first().click().type(`${specialty}{enter}`)
    cy.wait(1000)
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click()  
    cy.wait(1000)   
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityAraruama).contains(`${city}`).click()
    cy.get(el.searchButton).last().click({ force: true })
  }

  advancedSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click()     
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedEmergencySearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.toogleEmergency).click()
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click()     
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedDistrictSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click()     
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityRioJaneiro).contains(`${city_2}`).click()
    cy.get(el.divDistrict, { timeout: 15000 })
    .contains(`${district_label}`).click({ force: true })
    .should('be.visible', `${district_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectMenuDynamic, { timeout: 15000 }).contains(`${district}`).click()
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedEstablishmentSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)    
    cy.get(el.inputEstablishment).focus().type(`${establishment_1}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedNetworkSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)    
    cy.get(el.inputNetwork).focus().type(`${network}{enter}`) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedPlanTypeSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`) 
    cy.wait(2000)  
    cy.get(el.inputPlan, { timeout: 8000 }).focus().type(`${plan_2}{enter}`) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityRioJaneiro).contains(`${city_2}`).click()
    cy.get(el.divQualification).contains(`${qualification_label}`)
    .click({ force: true })
    .should('be.visible', `${qualification_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.divQualificationRes).contains(`${qualification_label}`).type(`${qualification}{enter}`)  
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedDistrictTypeSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`) 
    cy.wait(1000) 
    cy.get(el.divDistrict, { timeout: 15000 })
    .contains(`${district_label}`)
    .click({ force: true })
    .should('be.visible', `${district_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectMenuDynamic, { timeout: 15000 }).contains(`${district_1}`).click()
    // cy.get(el.inputDistrict).focus().type(`${district_1}{enter}`) 
    cy.get(el.inputEstablishment).focus().type(`${establishment_1}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedDistrictNetworkSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`) 
    cy.get(el.inputNetwork).focus().type(`${network}{enter}`)    
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }  

  advancedDistrictPlanSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`) 
    cy.get(el.inputPlan).focus().type(`${plan}{enter}`)      
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  } 

  advancedDistrictQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`)  
    cy.get(el.divQualification)
    .contains(`${qualification_label}`)
    .click({ force: true })
    .should('be.visible', `${qualification_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.divQualificationRes).contains(`${qualification_label}`).type(`${qualification}{enter}`)     
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  } 

  advancedTypeNetworkSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputEstablishment).focus().type(`${establishment_1}{enter}`)   
    cy.get(el.inputNetwork).focus().type('ES05{enter}')    
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedTypePlanSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputEstablishment, { timeout: 5000 }).focus().type(`${establishment_1}{enter}`)   
    cy.get(el.inputPlan).focus().type(`${plan}{enter}`) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(5000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(2000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedTypeQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputEstablishment, { timeout: 5000 }).focus().type(`${establishment_1}{enter}`)   
    cy.get(el.inputQualification, { timeout: 8000 }).focus().type(`${qualification}{enter}`)
	  cy.wait(2000) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(3000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(2000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedNetworkPlanSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputNetwork).focus().type(`${network}{enter}`)
    cy.get(el.inputPlan).focus().type(`${plan}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(5000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(3000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedNetworkQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.inputCity, { timeout: 5000 }).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputNetwork, { timeout: 5000 }).focus().type(`${network}{enter}`)   
    cy.get(el.inputQualification).focus().type(`${qualification}{enter}`) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(3000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(3000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedPlanQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters, { timeout: 5000 }).click({ force: true })
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', `${state}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains(`${state}`).click() 
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', `${city_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityRioJaneiro).contains(`${city_2}`).click()
    cy.get(el.inputPlan, { timeout: 8000 }).focus().type(`${plan_3}{enter}`).should('be.visible')
    cy.get(el.divQualification)
    .contains(`${qualification_label}`)
    .click({ force: true })
    .should('be.visible', `${qualification_label}`)
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.divQualificationRes).contains(`${qualification_label}`).type(`${qualification}{enter}`) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(3000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(3000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedSearchAssertion () {
    cy.wait(3000)
    cy.get(el.labelState, { timeout: 30000 }).should('contain.text', state_1)
  }
  
  commonSearch () {
    cy.get(el.inputCommonSearch).focus().type(`${city_1}`)
    cy.get(el.searchButton).last().click({ force: true })
  }

  commonSearchAssertion () {
    cy.get(el.labelState, { timeout: 80000}).should('contain', city_1)
  }

  doctorSearch () {
    cy.get(el.inputCommonSearch, { timeout: 30000 }).focus().type(`${doctor}`).should('be.visible')
    cy.get(el.searchButton).last().click({ force: true })
  }

  doctorSearchAssertion () {
    cy.wait(5000)
    cy.get(el.doctorLabelName, { timeout: 10000 }).should('contain.text', doctor)
  }

  urgentEmergencySearch () {
    cy.get(el.inputCommonSearch, { timeout: 8000 }).focus().type(`${city}`)
    cy.get(el.toogleEmergency).click()
    cy.get(el.searchButton).last().click({ force: true })
  }

  urgentEmergencySearchAssertion () {
    cy.wait(3000)
    cy.get(el.labelEstablishment, { timeout: 80000 })
    .should('contain.text', 'Internações')
    .and('contain.text', 'Análises')
  }
}

export default new Search()
