# Fleet Insurance Cost Calculator v1.0.0

## Index

1. Introduction
2. Installation
3. Documentation
4. Credits and Versioning

## 1. Introduction

This is an experiment in the creation of a Node.js backend application. The application is very minimal but the concepts learnt through the coding of it gave the author valuable experience in making use of Express.js, Helmet as well as the Mocha test framework and the Chai assertion library.  

The application computes the total insurance cost of a fleet of vehicles based on the amount of kilometers that was driven. The cost per vehicle is determined by a table which have been encoded into an if-else-if statement.  

## 2. Installation

The application has some dependencies that needs to be installed before use. This can simply be done by running the following command in the root folder of the project:  

`yarn install` or `npm install`  

It is recommended to use yarn for this project.

## 3. Documentation

Once installed the application server can be started by entering the `yarn start` or ` npm start` command depending on which package manager was used to install the project. With that done, navigate to the address [http://localhost:3000](http://localhost:300).  

The user will be greeted by the following page:

![Landing Page](./README-images/LandingPage.png)

Once loaded, the kilometers for individual vehicles are added by entering the value in the input box and clicking on the submit button. The input field will be cleared when it is clicked on again to enter the next value.

![EnteringIndividualKilometers](./README-images/EnteringIndividualKilometers.png)

When all vehicles have been entered simply click on the calculate button and the total cost of the fleet insurance will appear in the "Total Insurance Due" box at the bottom of the screen.

![AfterCalculation](./README-images/AfterCalculation.png)

### 3.1 Development Testing

If you are running a development copy of this project, you can test the correct functioning of some of the key aspects of the application by using the `yarn test` or `npm test` commands depending on which package manager was used to install the project.  

## 4. Credits and Versioning

This application was designed and coded by Johann Jansen van Vuuren. The first and current release, v1.0.0, was finalised on 10 April 2023.

