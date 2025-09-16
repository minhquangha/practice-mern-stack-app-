# Docs for project
## Backtend
- Use supertest to test api and jest to write unit test
```npm install --save-dev jest supertest```
- Use module express mongoose dotenv bcrypt jsonwebtoken cookie-parser helmet:
    - Express is framework help me build core backend (handle routing,)
    - Mongoose is odm help working with schema,model and query easier
    - Bcrypt use to hash password before save to database
    - jsonwebtoken use to create and authorize token (manage session)
    - cookie-parser is middleware so that it help parse cookie from   request of client, using with JWT and session together to manage session
    -dotenv use to mange environment variables through file .env
    -helmet is middleware to protect app express by setting HTTP headers
    ```npm install express mongoose dotenv bcryptjs jsonwebtoken cookie-parser helmet```

## Frontend
- Use Jest and the React Testing Library for unit/integration tests, and Cypress for E2R tests:
    ```npm install --save-dev @testing-library/react @testing-library/jest-dom jest cypress```
    - React Testing Library will help  test my React components
    - Cypress will provide comprehensive end-to-end testing of frontend
