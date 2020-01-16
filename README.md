# hackerbay-backend-microservice

[![Build Status](https://travis-ci.org/MuhweziDeo/hackerbay-backend-microservice.svg?branch=develop)](https://travis-ci.org/MuhweziDeo/hackerbay-backend-microservice)

[![Coverage Status](https://coveralls.io/repos/github/MuhweziDeo/hackerbay-backend-microservice/badge.svg?branch=develop)](https://coveralls.io/github/MuhweziDeo/hackerbay-backend-microservice?branch=develop)

### Description

A minimal microservice built using Node Express.
This application provides features like authentication, generating thumbnails and json patching.

### Set up

- Clone repo using `git clone https://github.com/MuhweziDeo/hackerbay-backend-microservice.git`
- cd in project directory using `cd hackerbay-backend-microservice`
- Run `npm install` to install dependencies
- Create .env file `optional` and copy .env.example `There are already default values so you can skip this`
- Run application using `npm run dev`
- If you dont change port in env then app will be accessible on `5000`
- Access docs on `http://localhost:5000/api-docs/`

### Endpoints

| EndPoint         | Description                                                        | Protection |
| ---------------- | ------------------------------------------------------------------ | ---------- |
| PATCH /patch/    | patch a document                                                   | Yes        |
| POST /thumbnail  | Generates and returns a resized image from an image url            | Yes        |
| POST /auth/login | authorizes a user with a username and password and generates token | No         |

### Technologies and Languages

- Javascript
- Node ExpressJs
- Mocha
- Chai
- Docker
- npm
- coveralls
- Eslint
- Babel

### Meta

[Muhwezi Deo](https://github.com/MuhweziDeo)

[Docker Image](https://hub.docker.com/repository/docker/aggrey256/hacker-bay-microservice)
