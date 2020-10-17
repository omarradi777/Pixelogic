import controls from "../support/controls.js"
import checks from "../support/checks.js"
import genericMethods from "../support/genericMethods.js";

describe("Registration tests", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    let control
    let check
    let generic = new genericMethods
    var faker = require('faker');
    var firstName = faker.name.firstName();
    var lastName = faker.name.firstName();
    var mobileNumber = faker.phone.phoneNumber();
    var email = faker.internet.email();
    var password = generic.randomText(8)

    before(function () {
        cy.fixture("register.json").as("register")
        cy.fixture("account.json").as("account")
        cy.fixture("login.json").as("login")
        control = new controls
        check = new checks
    })  

    it.skip("Register as a user using API requests and verify registration by logging in to your account", function() {
        /* Visiting register page and filling out register form to sign up */
        cy.request({
            method: 'POST',
            url: 'https://www.phptravels.net/account/signup',
            body: "firstname=Pamela&lastname=Stefanie&phone=(795)+789-3795&email=Dallasy82%40yahoo.com&password=brTgJiGI&confirmpassword=brTgJiGI"
            // body: {
            //     firstname: firstName,
            //     lastname: lastName,
            //     phone: mobileNumber,
            //     email: email,
            //     password : password,
            //     confirmpassword: password,
            // }
        }).then((response)=>{
            var x = response.body
        })  
        /* Check data are shown in the account page*/
        cy.visit(this.register.url)
        check.urlCheck(this.account.url)
        check.visibleText(firstName)
        check.visibleText(lastName)

        /* Verify user can login with registerd credentials*/
        control.clickOnGet(this.account.myAccountButton)
        control.clickOnGet(this.account.logout)
        check.urlCheck(this.login.url)
        control.typeText(this.login.selectors.email,email)
        control.typeText(this.login.selectors.password,password)
        control.clickOnGet(this.login.loginButton)
        check.urlCheck(this.account.url)
    });

    it("Register as a user and verify registration by logging in to your account", function() {
        /* Visiting register page and filling out register form to sign up */
        cy.visit(this.register.url)
        control.typeText(this.register.selectors.firstName,firstName)
        control.typeText(this.register.selectors.lastName,lastName)
        check.notEqual(firstName,lastName)
        control.typeText(this.register.selectors.mobileNumber,mobileNumber)
        control.typeText(this.register.selectors.email,email)
        control.typeText(this.register.selectors.password,password)
        control.typeText(this.register.selectors.confirmPassword,password)
        check.passwordCriteria(password)
        control.clickOnGet(this.register.button)
        
        /* Check data are shown in the account page*/
        check.urlCheck(this.account.url)
        check.visibleText(firstName)
        check.visibleText(lastName)

        /* Verify user can login with registerd credentials*/
        control.clickOnGet(this.account.myAccountButton)
        control.clickOnGet(this.account.logout)
        check.urlCheck(this.login.url)
        control.typeText(this.login.selectors.email,email)
        control.typeText(this.login.selectors.password,password)
        control.clickOnGet(this.login.loginButton)
        check.urlCheck(this.account.url)
    });
});
