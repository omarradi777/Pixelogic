class controls {

    typeText(selector,text) {
        cy.get(selector).type(text)
    }

    clickOnGet(selector) {
        cy.get(selector).click()
    }
}
export default controls