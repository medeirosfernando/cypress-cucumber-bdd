Feature: Search Doctor

    Being a user of the Unimed website
    I want to search for doctors in the city of Rio de Janeiro by specialty and city
    To view available service locations

Scenario: Search Doctors by specialty and city 
    Given that access to the Medical Guide
    When I conduct research
    Then I see options for doctors