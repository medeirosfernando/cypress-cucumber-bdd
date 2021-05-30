/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
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

class Search {

  accessMedicalGuidePage () {
    cy.visit('/guia-medico', { timeout: 60000 })  
    cy.url().should('eq', `${Cypress.config().baseUrl}/guia-medico#/`)
    cy.get(el.titleSearchPage).should('have.text', 'Encontre um médico')
  }


  // div[class="InputColumn col-lg-6"] 

  advancedSearch () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.selectStateDynamic, { timeout: 15000 }).click({ force: true }).should('be.visible', 'Rio de Janeiro')
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectStateRJ).contains('Rio de Janeiro').click()     
    cy.get(el.selectCityDinamic, { timeout: 15000}).click({ force: true }).should('be.visible', 'Cidade')
    cy.get(el.selectMenuDynamic).scrollIntoView().should('be.visible')
    cy.get(el.selectCityAraruama).contains('Araruama').click()
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

  advancedEmergencySearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.toogleEmergency).click()
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)    
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedDistrictSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)    
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`) 
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedEstablishmentSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)    
    cy.get(el.inputEstablishment).focus().type(`${establishment_1}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedNetworkSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)    
    cy.get(el.inputNetwork).focus().type('ES04{enter}') 
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedPlanTypeSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)    
    cy.get(el.inputPlan).focus().type('(480053182) - UNIMED FACIL INDIVIDUAL ESTADUAL COLETIVO{enter}')  
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputQualification).focus().type('Residência{enter}')  
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedDistrictTypeSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`) 
    cy.wait(1000) 
    cy.get(el.inputDistrict).focus().type(`${district_1}{enter}`) 
    cy.get(el.inputEstablishment).focus().type(`${establishment_1}{enter}`)
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }

  advancedDistrictNetworkSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`) 
    cy.get(el.inputNetwork).focus().type('ES04{enter}')    
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  }  

  advancedDistrictPlanSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`) 
    cy.get(el.inputPlan).focus().type('(705690997) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA{enter}')      
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  } 

  advancedDistrictQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputDistrict).focus().type(`${district}{enter}`)   
    cy.get(el.inputQualification).focus().type(`${qualification}{enter}`)    
    cy.get(el.searchButton).last().click({ force: true })
    cy.get(el.paginatorButton).click() 
    cy.get(el.paginatorButton).click()
  } 

  advancedTypeNetworkSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
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
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputEstablishment, { timeout: 5000 }).focus().type(`${establishment_1}{enter}`)   
    cy.get(el.inputPlan).focus().type('(705690997) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA{enter}') 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(5000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(2000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedTypeQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputEstablishment, { timeout: 5000 }).focus().type(`${establishment_1}{enter}`)   
    cy.get(el.inputQualification).focus().type('Residência{enter}') 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(3000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(2000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedNetworkPlanSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputNetwork).focus().type('ES04{enter}')
    cy.get(el.inputPlan).focus().type('(705690997) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA{enter}')
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(5000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(3000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedNetworkQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })
    cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    cy.get(el.inputCity, { timeout: 5000 }).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputNetwork, { timeout: 5000 }).focus().type('ES04{enter}')   
    cy.get(el.inputQualification).focus().type('Residência{enter}') 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(3000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(3000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  advancedPlanQualificationSearchPaginator () {
    cy.get(el.tabSearchAdvanced).click()
    cy.get(el.moreFilters).click({ force: true })

    cy.get('div.css-1xamc9y-placeholder')
    .each(($elem, index) => {
      if (index === 1) {
        cy.wrap($elem).click({force: true}).focused().type('{selectall}')
        cy.wrap($elem).type(`${state}{enter}`, { timeout: 5000 }, {force:true})
        cy.wait(1500) //.type('{pagedown}').scrollIntoView() //.find('Fonoaudiologia') //.type('{enter}') //.type('Fonoaudiologia{enter}').should('have.text', 'Fonoaudiologia')
      }
    })

    cy.get('div.css-1xamc9y-placeholder')
    .each(($elem, index) => {
      if (index === 1) {
        cy.wrap($elem).click({force: true}).focused().type('{selectall}')
        cy.wrap($elem).type(`${city_2}{enter}`, { timeout: 5000 }, {force:true})
        cy.wait(1000) //.type('{pagedown}').scrollIntoView() //.find('Fonoaudiologia') //.type('{enter}') //.type('Fonoaudiologia{enter}').should('have.text', 'Fonoaudiologia')
      }
    })


    // cy.get(el.selectState).should('contain', 'Estado').type(`${state}{enter}`)
    // cy.get(el.inputCity).focus().type(`${city_2}{enter}`)  
    cy.get(el.inputPlan).focus().type('(436116014) - 200611 ADESAO GRANDE GRUPO BOLETO ALFA DENTAL UNIPART 30{enter}')
    cy.get(el.inputQualification).focus().type('Residência{enter}') 
    cy.get(el.searchButton).last().click({ force: true })
    cy.wait(3000)
    cy.get(el.paginatorButton, { timeout: 5000 }).click({ force: true })
    cy.wait(3000); 
    cy.get(el.paginatorButton_2, { timeout: 5000 }).click({ force: true })
  }

  // advancedSearchAssertion () {
  //   cy.get(el.labelSpecialty).should('contain.text', specialty)
  //   cy.get(el.labelState).should('contain.text', city)
  // } 

  advancedSearchAssertion () {
    cy.get(el.labelState, { timeout: 150000 }).should('contain.text', state_1)
    cy.pause()
  }
  
  // advancedSearchPaginatorAssertion () {
  //   cy.get(el.labelState).should('contain.text', state_1)
  // } 

  // advancedEmergencySearchPaginatorAssertion () {
  //   cy.get(el.labelState).should('contain.text', state_1)
  // } 

  // advancedPlanTypeSearchPaginatorAssertion () {
  //   cy.get(el.labelState).should('contain.text', state_1)
  // }
  
  commonSearch () {
    cy.get(el.inputCommonSearch).focus().type(`${city_1}`)
    cy.get(el.searchButton).last().click({ force: true })
  }

  commonSearchAssertion () {
    cy.get(el.labelState, { timeout: 120000}).should('contain', city_1)
  }

  doctorSearch () {
    cy.get(el.inputCommonSearch).focus().type(`${doctor}`)
    cy.get(el.searchButton).last().click({ force: true })
  }

  doctorSearchAssertion () {
    cy.get(el.doctorLabelName, { timeout: 150000 }).should('have.text', doctor)
  }

  urgentEmergencySearch () {
    cy.get(el.inputCommonSearch).focus().type(`${city}`)
    cy.get(el.toogleEmergency).click()
    cy.get(el.searchButton).last().click({ force: true })
  }

  urgentEmergencySearchAssertion () {
    cy.get(el.labelEstablishment, { timeout: 120000 })
    .should('contain.text', 'Internações')
    .and('contain.text', 'Análises')
  }
}

export default new Search()
