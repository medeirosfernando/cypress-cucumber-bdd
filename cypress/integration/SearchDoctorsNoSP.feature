Feature: Search Doctor

    Being a user of the Unimed website
    I want to search for doctors in the city of Rio de Janeiro
    To view available service locations different of São Paulo

Background: 
    Given I have access to the Medical Guide
    When I click on Detailed search

Scenario: Seek doctors only in the city of Rio de Janeiro through the detailed search      
    And I select the state
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city through detailed search and only urgent and emergency care      
    And I select option urgent and emergency care
    And I select the state
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by district    
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the district
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by establishment
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the establishment
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by network
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the network
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by plan type
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the plan
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by qualification
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the qualification
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by district and type
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the district
    And I select the establishment
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by district and network
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the district
    And I select the network
    And I click on button search
    Then I see options for doctors


Scenario: Seek doctors only in the Rio de Janeiro city by district and plan
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the district
    And I select the plan
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by district and qualification    
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the district
    And I select the qualification
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by type and network
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the type
    And I select the network
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by type and plan
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the type
    And I select the plan
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by type and qualification
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the type
    And I select the qualification
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by network and plan
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the network
    And I select the plan
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by network and qualification
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the network
    And I select the qualification
    And I click on button search
    Then I see options for doctors

Scenario: Seek doctors only in the Rio de Janeiro city by plan and qualification
    And I click on see more filters
    And I select the state
    And I select the city
    And I select the plan 436116014
    And I select the qualification
    And I click on button search
    Then I see options for doctors