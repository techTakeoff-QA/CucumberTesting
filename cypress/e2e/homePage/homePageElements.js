export default class homePageElements {
    static slickDealsLogo(){
        return cy.get("[src='https://static.slickdealscdn.com/image-pool/sd-branding/sd-logotype-white.svg']")
    }

    static dealAlertsIcon(){
        return cy.get(".slickdealsHeader__circleIcon--dealAlerts")
    }
    //Post a deal icon
    static postADealIcon(){
        return cy.get(".slickdealsHeader__circleIcon--postADeal")
    }
    //Go mobile icon
    static goMobileIcon(){
        return cy.get(".slickdealsHeader__circleIcon--mobile")
    }
    //Sign up icon
    static signUpIcon(){
        return cy.get(".slickdealsHeader__circleIcon--signUp")
    }
    //Tool deals
    static toolDeals(){
        return cy.xpath("//a[.='Tool Deals']")
    }
    static videoGamesBannerText(){
        return cy.get("[href='https://slickdeals.net/video-game-deals/']")
    }
    static laptopsAndComputersBannerText(){
        return cy.xpath("//a[.='Laptops & Computers']")
    }
    
    static creditCardOffersBannerText(){
        return cy.xpath("//a[.='Credit Card Offers']")
    }
    static bestSavingsAccountsBannerText(){
        return cy.xpath("//a[.='Best Savings Accounts']")
    }

    /////   HEY GUYS THIS IS A COMMENT

}