Feature: Search Doctor

    Being a user of the Unimed website
    I want to search for doctors in the city of Rio de Janeiro
    To view available service locations different of São Paulo

Scenario: Research doctors in Rio de Janeiro through advanced search 
    Given that access to the Medical Guide
    When I conduct research
    Then I see options for doctors menos da cidade de São Paulo