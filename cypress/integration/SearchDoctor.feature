Feature: Search Doctor

    Being a user of the Unimed website
    I want to search for doctors in the city of Rio de Janeiro by specialty and city
    To view available service locations

Scenario: Search for doctors by city using common search 
    Given that access to the Medical Guide
    When I conduct research
    Then I see options for doctors

Scenario: Search for doctors by specialty and city using advanced search 
    Given that access to the Medical Guide
    When I conduct research
    Then I see options for doctors

Scenario: : search for doctors by specialty and city using advanced search and urgent and emergency care only


Scenario: urgent and emergency care only

Scenario: search for specific doctor

