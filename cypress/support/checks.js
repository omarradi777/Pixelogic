class checks {

    notEqual(stringX,stringY) {
        if(stringX === stringY) {
            console.log("both strings are equal")
        }
        else {
            console.log("both strings are not equal")
            Cypress.runner.stop()
        }
    }

    visibleText(text) {
        cy.contains(text).should("be.visible")
    }

    urlCheck(url) {
        cy.url().should("contain",url)
    }

    passwordCriteria(password) {
        var ch;
        var upperCaseFlag = false;
        var lowerCaseFlag = false;
        for(var i=0;i < password.length ;i++) {
            ch = password.charAt(i);
            if (ch == ch.toUpperCase()) {
                upperCaseFlag = true;
            } else if (ch == ch.toLowerCase()) {
                lowerCaseFlag = true;
            }
            if(upperCaseFlag && lowerCaseFlag)
                return true;
        }
        Cypress.runner.stop()
        return false;
    }
}
export default checks