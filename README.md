# API Automation with Playwright

A portfolio-ready API automation framework built using Playwright, TypeScript-style Playwright test structure, Postman, and GitHub Actions.

## Project Overview

This project demonstrates professional API test automation practices against the public ReqRes API, which is designed for API testing and learning purposes.

The framework covers:

- API validation with Playwright
- API exploration and initial test design with Postman
- positive and negative test scenarios
- environment-based configuration
- secure secret handling with `.env` and GitHub Secrets
- automated CI execution with GitHub Actions

## Tech Stack

- Playwright
- Node.js
- Postman
- GitHub Actions
- ReqRes API

## Test Coverage

### Users
- GET - List Users
- GET - Single User
- GET - Single User (Not Found)

### Authentication
- POST - Login Success
- POST - Login Missing Password

### CRUD
- POST - Create User

## Project Structure

```text
api-automation-playwright/
├── .github/
│   └── workflows/
│       └── api-tests.yml
├── postman/
│   ├── ReqRes-API-Automation.postman_collection.json
│   └── ReqRes-Local.postman_environment.json
├── tests/
│   ├── auth.spec.ts
│   ├── crud.spec.ts
│   └── users.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
└── TEST_SCOPE.md
```
## Environment Variables

Create a local .env file based on .env.example.

Required variables:

```env

REQRES_BASE_URL=https://reqres.in
REQRES_API_KEY=your_reqres_api_key_here
```
## Local Setup

Install dependencies:

```PowerShell
npm install
```

Run the API tests:

```PowerShell
npm test
```

Open the Playwright HTML report:

```PowerShell
npx playwright show-report
```

## CI

This project includes a GitHub Actions workflow that automatically runs the Playwright API tests on:

- push to main
- pull requests to main
- manual workflow dispatch


## Postman

The postman folder contains:

- exported Postman collection
- exported Postman environment

These were used for initial API exploration and manual validation before implementing the same scenarios in Playwright.

## Notes
.env is ignored and never committed
API secrets are stored locally in .env
CI uses GitHub repository secrets
ReqRes is used as a public API intended for testing practice and learning
Status

Completed initial version with working API tests and CI pipeline.


