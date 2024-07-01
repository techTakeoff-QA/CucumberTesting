import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import homePageActions from '../homePage/homePageActions'

Given("Go to SlickDeals Homepage", ()=>{
    cy.visit("https://slickdeals.net/?utm_source=slickdeals_com&utm_medium=redirect&utm_campaign=redirect")

})
Then("Check if Logo Exists", ()=>{
    homePageActions.slickDealsLogoExists()

})