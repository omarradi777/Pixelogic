// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';
// Alternatively you can use CommonJS syntax:
// require('./commands')

export const FAILED_TEST_COOKIE = 'has-failed-test'

// CYPRESS_ABORT_STRATEGY environment variable:
// run: Play the whole run, spec: Stop on first error
if (Cypress.env('ABORT_STRATEGY') === 'spec') {
  // Do not clear the cookie between tests, to be able to shut down all remaining spec files
  Cypress.Cookies.defaults({
    preserve: FAILED_TEST_COOKIE,
  })
}

before(function() {
  if (Cypress.env('ABORT_STRATEGY') === 'spec') {
    cy.getCookie(FAILED_TEST_COOKIE).then((cookie) => {
      if (cookie && Boolean(cookie.value) === true) {
        this.skip()
      }
    })
  }
})

afterEach(function() {
  if (Cypress.env('ABORT_STRATEGY') === 'spec') {
    // Check if it is the last retry, and if it has failed
    if (
      this.currentTest.state === 'failed' &&
      this.currentTest._currentRetry === this.currentTest._retries
    ) {
      // Set cookie to abort remaining spec files
      cy.setCookie(String(FAILED_TEST_COOKIE), 'true')
      // Stop the current spec file
      Cypress.runner.stop()
    }
  }
})