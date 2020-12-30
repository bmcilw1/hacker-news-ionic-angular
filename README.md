# hacker-news-ionic-angular

This is an ongoing implementation of [Hacker News](https://news.ycombinator.com/) using Ionic, Angular flavor. This project is to showcase best-practices and common use-cases of included technologies. For testing it uses [ng-mocks](https://ng-mocks.github.io/) and [Cypress](https://www.cypress.io/).

The API is documented [here](https://github.com/HackerNews/API). Naming of data models and data access patterns are taken from there. A real production API would likely provide additional data endpoints to simplify client-side data access.

## Getting started

1. Install Ionic cli `npm install -g @ionic/cli`
2. Install Angular cli `npm install -g @angular/cli`
3. Install Ionic launch image resource `npm install -g cordova-res`
4. Clone this repo
5. Install project packages in root project directory `npm install`

## Running the project

* Run with `npm start`

## Running tests

* Run unit tests with `npm run test`
* Run end to end tests by first starting the server with `npm start` and then running `npm run e2e` in a separate terminal.
