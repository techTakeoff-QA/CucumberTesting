import homePageElements from "./homePageElements";
export default class homePageActions{
    static slickDealsLogoExists(){
        homePageElements.slickDealsLogo().should('exist')

    }
}