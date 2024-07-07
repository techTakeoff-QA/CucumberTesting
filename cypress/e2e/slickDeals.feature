Feature: SlickDeals Verification
    Scenario: Checking if Laptops and Computers exists and clicking is bringing us to next page
        Given Go to SlickDeals Homepage
        Then Check if Logo Exists
        Then Check if Laptops and Computers banner Text Exists
        Then Click on Laptops and Computers


    
    
    Scenario: Check Top Banner
        Given Go to SlickDeals Homepage
        Then Check if Logo Exists
        Then Check if Video Games banner Text Exists
        Then Check if Icons Exists
        Then Refresh Browser


