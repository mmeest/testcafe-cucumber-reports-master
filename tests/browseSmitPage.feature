Feature: Open SMIT Career Page

    Scenario: Redirecting to main page
        Given I have opened the SMIT career page
        When I click on the logo
        Then The page should redirect and have the correct title

    Scenario: Validating Menu items
        Given I have opened the SMIT career page
        Then Valid elements displayed

    Scenario: Validating 'Praktika' element exists
        Given I have opened the SMIT career page
        Then Praktika element exists
