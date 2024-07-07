import homePageElements from "./homePageElements";
export default class homePageActions{
    static slickDealsLogoExists(){
        homePageElements.slickDealsLogo().should('exist')
    }
    static dealsAlertIconExists(){
        homePageElements.dealAlertsIcon().should('exist')
    }
    static postADealIconExists(){
        homePageElements.postADealIcon().should('exist')
    }
    static goMobileIconExists(){
        homePageElements.goMobileIcon().should('exist')
    }
    static signUpIconExists(){
        homePageElements.signUpIcon().should('exist')
    }
    static toolDealsExists(){
        homePageElements.toolDeals().should('exist')
    }
    static videoGamesBannerTextExists(){
        homePageElements.videoGamesBannerText().should('exist')
    }
    static laptopsAndComputersBannerTextExists(){
        homePageElements.laptopsAndComputersBannerText().should('exist')
    }
    static clickOnLaptopsandComputer(){
        homePageElements.laptopsAndComputersBannerText().click()
        
    }
    static creditCardOffersBannerTextExists(){
        homePageElements.creditCardOffersBannerText().should('exist')
    }
    static bestSavingsAccountsBannerTextExists(){
        homePageElements.bestSavingsAccountsBannerText().should('exist')
    }
}