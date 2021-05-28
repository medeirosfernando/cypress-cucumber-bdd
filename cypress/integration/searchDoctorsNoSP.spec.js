/// <reference types="cypress" />

import doctors from '../support/pages'

context('Search for doctors', () => {

  beforeEach(() => {
      doctors.accessMedicalGuidePage()
    })

  it('should seek doctors only in the city of Rio de Janeiro through the detailed search', () => {
      doctors.advancedSearchPaginator()             
      doctors.advancedSearchAssertion()
  })

  it('should seek doctors only in the Rio de Janeiro city through detailed search and only urgent and emergency care', () => {
    doctors.advancedEmergencySearchPaginator()             
    doctors.advancedSearchAssertion()
  })

  it.only('should seek doctors only in the Rio de Janeiro city through detailed search by plan type', () => {
    doctors.advancedPlanTypeSearchPaginator()  
    doctors.advancedSearchAssertion()    
  })
})