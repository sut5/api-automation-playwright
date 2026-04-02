# API Test Scope

## Objective

Build a portfolio-ready API automation project that demonstrates professional API testing practices using Postman for exploration and Playwright with TypeScript for automated execution.

## API Under Test

ReqRes

## Scope for Version 1

### Functional Areas

1. Users
2. Resources
3. Create and update operations
4. Authentication-related operations
5. Delete operation
6. Negative scenarios

## Planned Test Coverage

### Users
- Get users list
- Validate list response structure
- Get single user
- Validate single user response fields
- Validate non-existing user returns 404

### Resources
- Get resource list
- Validate resource list response structure
- Get single resource
- Validate single resource response fields
- Validate non-existing resource returns 404

### Create and Update
- Create user
- Update user with PUT
- Update user with PATCH

### Authentication
- Successful login
- Unsuccessful login with missing password
- Successful register
- Unsuccessful register with missing password

### Delete
- Delete user

## Test Types Included

- Positive tests
- Negative tests
- Response validation
- Status code validation
- Basic response structure checks

## Out of Scope for Version 1

- Performance testing
- Security testing
- Advanced contract/schema tooling
- Database validation
- UI testing
- Overly complex framework abstractions

## Goal of This Scope

Keep the first version realistic, maintainable, and strong enough for portfolio presentation while following industry-standard API testing practices.