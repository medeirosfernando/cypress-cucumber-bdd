/// <reference types="cypress" />

import doctors from '../support/pages'

context('Search for doctors', () => {

    it('should present doctors by specialty and city', () => {

        doctors.accessMedicalGuidePage()
        doctors.advancedSearchPaginator()             
        doctors.advancedSearchPaginatorAssertion()
    })
})