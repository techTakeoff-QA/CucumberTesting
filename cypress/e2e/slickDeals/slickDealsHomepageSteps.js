import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import homePageActions from '../homePage/homePageActions'

Given("Go to SlickDeals Homepage", ()=>{
    cy.visit("https://slickdeals.net/?utm_source=slickdeals_com&utm_medium=redirect&utm_campaign=redirect")

})
Then("Check if Logo Exists", ()=>{
    homePageActions.slickDealsLogoExists()

})

Then("Check if Video Games banner Text Exists", ()=>{
    homePageActions.videoGamesBannerTextExists()

})

Then("Check if Icons Exists", ()=>{
    homePageActions.dealsAlertIconExists()
    homePageActions.goMobileIconExists()
    homePageActions.signUpIconExists()
    homePageActions.dealsAlertIconExists()
})


Then("Refresh Browser", ()=>{
    cy.reload()
})

Then("Check if Laptops and Computers banner Text Exists", ()=>{
    homePageActions.laptopsAndComputersBannerTextExists()

})

Then("Click on Laptops and Computers", ()=>{
    homePageActions.clickOnLaptopsandComputer()

})