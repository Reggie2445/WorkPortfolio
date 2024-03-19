Feature: Home screen

    Scenario: User is currently on the home page
        Given Ryan has navigated to Reggie's portfolio
        When looking at the text on the screen
        Then ryan should see the text "Hi, I'm Reggie"
