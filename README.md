# Rockar Tech Test

This is a README file for an application that can be used to query Customer and Product details via a CSV or DB Connection. The application has been implemented in Typescript and Node.js

# Prerequesties

Before you can use this API, please ensure the following software is installed on your system:

- Node.js
- npm

# Installation & Setup

- clone the repository `git clone https://github.com/Imaan-R/rockartech.git`
- navigate to the project repository and install project dependecies with the command `npm install`
- add .env file with variables:
  - `DATA_SOURCE_TYPE = CSV`
    - The `DATA_SOURCE_TYPE` can either be `CSV` or `DB_CONNECTION` and this determines where the data should be read from.
  - `DATABASE = ""`
    - The `DATABASE` variable should be the filePath to sqlite database.

# Usage

- To start the server, run `npm run start`
- The API server will be ready at http://localhost:4000.
- To run test, run `npm test`

# API Documentation

- This API supports the following GraphQL queries:

  - Query Customers

    ```
       query {
        customer {
            forename
            surname
            email
            contact_number
            postcode
        }
    }
    ```

  - Query Products

  ```
  query {
     product {
     vin
     make
     model
     colour
     price
     }
  }
  ```

# Future Enhancement

Due to time constraints, I was unable to accomplish as much as I intially anticapted. If more time was available, there are defintely areas that could be further enhanced and worked on for example:

    - Using PostgreSQL instead of SQLite as it has better perforamce, scalability and a more robust feature set.
    - More Unit Tests.
    - Allow for querying by fields for example query customer where email = X.
    - Have a front-end UI application
