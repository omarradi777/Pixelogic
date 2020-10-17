# Automation [Pixelogic task]

[Project description]
​

## Contents

If you are looking for something specific, you can jump right into the relevant section from here.

​1.[Getting Started](#getting-started)

2.[Folder Structure](#folder-structure)

3.[Videos](#style_guides)​

4.[Reports](#style_guides)​

​
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
​

### About Cypress

Cypress is a next generation front end testing tool built for the modern web. It can test anything that runs in a browser.
For Cypress features, please check https://docs.cypress.io/guides/overview/why-cypress.html#Features
Tests are written in cypress version 5.4.0
​

### Prerequisites

1. [Node.js](https://nodejs.org/en/)

### Instructions

1.  Clone the repo

```sh
git clone [repo ssh]
```

2.  Install dependencies

```sh
npm install
```

3.  Open cypress

```sh
npm run cy:open
```

4.  Run test by clicking on it after cypress window opens.


## Folder Structure

| Folder      | Description                                                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fixtures    | Used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.                                                                                                |
| Integration | Used for creating test suits.Test files are located in cypress/integration by default, but can be configured to another directory.We are writing tests in js.Test file naming convention shall include the word test for easy documentation generation i.e feature1-test.js |
| Plugin      | Used to load plugins By default.Cypress will automatically include the plugins file cypress/plugins/index.js before every single spec file it runs.                                                                                                                         |
| Support     | Used to create various custom commands and contains class files for various methods used in the tests.
                                                                                                                                               |

## Videos

Cypress provides a video recording to a successful test when ran by cy:run
​

## Reports

These tests are intergrated with allure reports. To show the report you have to

1.  Run Cypress headless

```sh
npm run cy:run
```

2.  Open allure reports

```sh
allure serve
```
