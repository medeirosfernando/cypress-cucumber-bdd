Feature: Search Doctor

    Being a user of the Unimed website
    I want to search for doctors in the city of Rio de Janeiro by specialty and city
    To view available service locations

Background: 
    Given I have access to the Medical Guide

Scenario: Search for doctors by city using common search    
    When I fill the search field
    And I click on Search button
    Then I see options for doctors in the city

Scenario: Search for doctors by specialty and city using detailed search 
    When I click on Detailed search
    And I select the specialty
    And I select the state
    And I select the city
    And I click on Search button
    Then I see options for doctors by specialty for the city

Scenario: Search for doctors by specialty and city using detailed search and urgent and emergency care only
    When I click on Detailed search
    And I select the Urgent and emergency care only button
    And I select the specialty
    And I select the state
    And I select the city
    And I click on Search button
    Then I see options of doctors by specialty for the city

Scenario: Search for doctors by city using common search and urgent and emergency care only
    When I fill the search field with a city name
    And I select the Urgent and emergency care only button
    And I click on Search button
    Then I see options of doctors in the city

Scenario: search for specific doctor
    When I fill the search field with a doctor name
    And I click on Enter key
    Then I see options of the doctors in the city

