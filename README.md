# Pre-requisites

* Github account
* Node
* Heroku account
  - If you do not have a Heroku account, you can create one at: https://signup.heroku.com/

# Tools used

* Express
* Jest
* Chai

# Getting started

* Fork the repository `https://github.com/mavericks-consulting/ci-cd-workshop-junior-dev`
* Clone your forked version
* Run `npm install` from the root folder

# Commands

## Run tests

* Run unit tests with `npm run test`
* Run integration tests with `npm run integration-test`

## Run the server

* To start the server, run `npm start`
* The server runs on port 3000 by default, you can change it in `index.js`

# Pipeline

* We are using CircleCI for this project
* The pipeline config is in `.circleci/` in the root folder
* Instructions to set up Circle CI are here:
  - https://github.com/mavericks-consulting/ci-cd-juniordev.github.io/blob/master/Instructions.md
