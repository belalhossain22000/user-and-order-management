# User and order management 

## Live link: https://user-and-order.vercel.app/

## Description

This project serves as an API demonstrating user and order management functionality.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/belalhossain22000/assaignment-2.git
   cd assignment-2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a .env file in the root directory and add the following variables:

   ```bash
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

   Replace your_mongodb_connection_string with your actual MongoDB connection string.

## Usage

### Development

4.  Start the server in development mode:

        ```bash
        npm run start:dev
        ```

This command uses ts-node-dev to run the server with automatic reloading on file changes.

### Production

5. To build the TypeScript files and start the server in production mode:

   ```bash
   npm run build
   npm run start:prod
   ```

## Routes

#### Create a single user: POST /api/users

#### UsersGET all users: GET /api/users

#### GET single user: GET /api/users/:userId

#### UPDATE user: PUT /api/users/:userId

#### DELETE user: DELETE /api/users/:userId

## Orders

#### CREATE order for a user: POST /api/users/:userId/orders

#### GET all orders for a user: GET /api/users/:userId/orders

#### GET total price of orders for a user: GET /api/users/:userId/orders/total-price

## Testing

1.Run linting:

```bash
npm run lint

```

2.Automatically fix linting issues:

```bash
npm run lint:fix
```

## Project Overview

### Backend Framework & Libraries

- **Express.js:**

  - A minimal and flexible Node.js web application framework used for building the API endpoints.
  - Used version: 4.18.2

- **Mongoose:**
  - An ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward schema-based solution to model the application data.
  - Used version: 8.0.1

### Database

- **MongoDB:**
  - A NoSQL database used to store application data.
  - Database interactions are managed via Mongoose.

### Security

- **bcrypt:**
  - A library used for password hashing. It encrypts user passwords before storing them in the database.
  - Used version: 5.1.1

### Middleware

- **CORS:**
  - A middleware used to enable Cross-Origin Resource Sharing. It allows different domains to make requests to the API.
  - Used version: 2.8.5

### Development & Type Checking

- **TypeScript:**
  - A superset of JavaScript that adds static typing to the language, providing better tooling and error-checking capabilities during development.
  - Used version: 5.3.2

### Development Tools

- **ts-node-dev:**
  - A development tool used for running TypeScript applications in development mode with automatic restart and transpilation.
  - Used version: 2.0.0

### Code Quality & Style

- **ESLint:**

  - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It helps maintain code quality and consistency.
  - Used version: 8.54.0

- **Prettier:**
  - An opinionated code formatter that enforces consistent code style and formatting rules.
  - Used version: 3.1.0

### Typings & Type Definitions

- **@types/express:**

  - TypeScript type definitions for Express.js.
  - Used version: 4.17.21

- **@types/bcrypt:**

  - TypeScript type definitions for bcrypt.
  - Used version: 5.0.2

- **@types/cors:**
  - TypeScript type definitions for CORS.
  - Used version: 2.8.17

### Dotenv

- **dotenv:**
  - A module that loads environment variables from a .env file into process.env.
  - Used version: 16.3.1

### Other

- **zod:**
  - A TypeScript-first schema declaration and validation library.
  - Used version: 3.22.4

## Overview Summary

This project utilizes Node.js with Express.js as the backend framework, MongoDB as the database, TypeScript for type safety and development enhancements, along with various other libraries and tools for security, middleware, code quality, and development workflow improvements.
