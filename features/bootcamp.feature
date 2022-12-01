Feature: Bootcamp E2E

  Background:
    Given User is on the https://www.newegg.com
    When Promo banner appears close it

  Scenario: Search bar
    * User inputs "Windows" into the search bar
    * User clicks search icon
    Then At least one item is available

  Scenario: Internet shop logo button
    * User opens Today's Best Deals tab
    * Users clicks page logo
    Then User is on the main page back again

