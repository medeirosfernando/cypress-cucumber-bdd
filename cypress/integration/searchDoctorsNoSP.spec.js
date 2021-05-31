/// <reference types="cypress" />

import doctors from '../support/pages'

context('Search for doctors no SP', () => {

  beforeEach(() => {
      doctors.accessMedicalGuidePage()
    })

  afterEach(() => {
    cy.clearLocalStorage()
  })

  it('should seek doctors only in the Rio de Janeiro city through the detailed search', () => {
      doctors.advancedSearchPaginator()             
      doctors.advancedSearchAssertion()
  })

  it('should seek doctors only in the Rio de Janeiro city through detailed search and only urgent and emergency care', () => {
    doctors.advancedEmergencySearchPaginator()             
    doctors.advancedSearchAssertion()
  })

  it('should seek doctors only in the Rio de Janeiro city by district', () => {
    doctors.advancedDistrictSearchPaginator()
    doctors.advancedSearchAssertion()
  })

  it('should seek doctors only in the Rio de Janeiro city by establishment', () => {
    doctors.advancedEstablishmentSearchPaginator()
    doctors.advancedSearchAssertion()
  })

  it('should seek doctors only in the Rio de Janeiro city by network', () => {
    doctors.advancedNetworkSearchPaginator()
    doctors.advancedSearchAssertion()
  })

  it('should seek doctors only in the Rio de Janeiro city by plan type', () => {
    doctors.advancedPlanTypeSearchPaginator()  
    doctors.advancedSearchAssertion()    
  }) 
  
  it('should seek doctors only in the Rio de Janeiro city by qualification', () => {
    doctors.advancedQualificationSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })  

  it('should seek doctors only in the Rio de Janeiro city by district and type', () => {
    doctors.advancedDistrictTypeSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by district and network', () => {
    doctors.advancedDistrictNetworkSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by district and plan', () => {
    doctors.advancedDistrictPlanSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by district and qualification', () => {
    doctors.advancedDistrictQualificationSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by type and network', () => {
    doctors.advancedTypeNetworkSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by type and plan', () => {
    doctors.advancedTypePlanSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by type and qualification', () => {
    doctors.advancedTypeQualificationSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by network and plan', () => {
    doctors.advancedNetworkPlanSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by network and qualification', () => {
    doctors.advancedNetworkQualificationSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })

  it('should seek doctors only in the Rio de Janeiro city by plan and qualification', () => {
    doctors.advancedPlanQualificationSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })  
})