/// <reference types="cypress" />

import doctors from '../support/pages'

context('Search for doctors', () => {

  beforeEach(() => {
    doctors.accessMedicalGuidePage()
  })

  afterEach(() => {
    cy.clearLocalStorage()
  })

  it('should search for doctors by city using common search', () => {
    doctors.commonSearch()
    doctors.commonSearchAssertion()
  })

  it('should search for doctors by specialty and city using detailed search', () => {
    doctors.advancedSearch()       
    doctors.advancedSearchAssertion()
  }) 

  it('should search for doctors by specialty and city using detailed search and urgent and emergency care only', () => {
    doctors.advancedEmergencySearch()       
    doctors.advancedSearchAssertion()
  })
  
  it('should search for doctors by city using common search and urgent and emergency care only', () => {
    doctors.urgentEmergencySearch()
    doctors.urgentEmergencySearchAssertion()   
  })

  it('should search for specific doctor', () => {
    doctors.doctorSearch()
    doctors.doctorSearchAssertion()
  });

  it.skip('should search medicals using all filters', () => {
    // / Skiped test because there is an intermittency in the search for information on the website, each hour brings a different result
    doctors.advancedSearchAllFilters()       
    doctors.advancedSearchAssertion()
  }) 
  
  it.skip('should search for the CPF document', () => {
    // I am not a customer and it is impossible to execute this scenario.
  })
})