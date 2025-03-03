# JWT Authentication API

A secure authentication system using JSON Web Tokens (JWT) built with Node.js and Express, providing a foundation for protected routes and user authorization.

## 📋 Overview

This project implements a lightweight but secure authentication system using JWT. It demonstrates fundamental security concepts including token-based authentication, protected routes, and proper error handling for authentication failures.

## 🔐 Features

- **Secure Login System**: Generates JWT tokens upon successful authentication
- **Protected Routes**: Access control middleware for securing endpoints
- **Custom Error Handling**: Specific error types for different authentication scenarios
- **Token Verification**: Middleware for validating JWT tokens
- **Stateless Authentication**: No server-side sessions required

## 🛠️ Technology Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **JSON Web Token (JWT)** - For secure authentication
- **HTTP Status Codes** - For standardized status code responses
- **express-async-errors** - For simplified error handling
- **dotenv** - For environment variable management

## 📁 Project Structure

```
.
├── app.js                  # Application entry point
├── routes/
│   └── main.js             # Router for authentication endpoints
├── controllers/
│   └── main.js             # Request handlers for authentication
├── middleware/
│   ├── auth.js             # JWT verification middleware
│   ├── error-handler.js    # Custom error handling middleware
│   └── not-found.js        # 404 handler
├── errors/
│   ├── bad-request.js      # Bad request error class
│   ├── custom-error.js     # Base error class
│   ├── unauthenticated.js  # Authentication error class
│   └── index.js            # Error export module
├── public/                 # Static assets
└── .env                    # Environment variables (not in repo)
```

## 🔌 API Endpoints

| Method | Endpoint           | Description                      | Authorization Required |
|--------|-------------------|----------------------------------|------------------------|
| POST   | /api/v1/login     | Authenticate user and generate JWT token | No                     |
| GET    | /api/v1/dashboard | Access protected data            | Yes (JWT token)        |

## 📥 Installation & Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/jwt-authentication-api.git
   cd jwt-authentication-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   JWT_SECRET=your_jwt_secret_key_at_least_256_bits_long
   PORT=3000
   ```

4. Start the server
   ```
   npm start
   ```

## 🔑 Authentication Flow

1. **Login Request**:
   ```
   POST /api/v1/login
   Content-Type: application/json
   
   {
     "username": "your_username",
     "password": "your_password"
   }
   ```

2. **Response with Token**:
   ```json
   {
     "msg": "user created",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   ```

3. **Accessing Protected Route**:
   ```
   GET /api/v1/dashboard
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

4. **Protected Route Response**:
   ```json
   {
     "msg": "Hello, your_username",
     "secret": "Here is your authorized data, your lucky number is 42"
   }
   ```

## 🔒 Security Implementation

### Token Generation
- Tokens are signed using a secure JWT_SECRET environment variable
- Tokens expire after 30 days
- User ID and username are encoded in token payload

### Authentication Middleware
- Verifies presence of Authorization header with Bearer scheme
- Validates token signature
- Extracts user information and attaches to request object
- Provides specific error messages for different failure scenarios

### Error Handling
- Custom error classes for different authentication scenarios:
  - `BadRequestError`: Missing credentials
  - `UnauthenticatedError`: Invalid or missing token

## 🧰 Development Highlights

- **Middleware Pattern**: Authentication logic is extracted into reusable middleware
- **Clean Error Handling**: Custom error classes with appropriate HTTP status codes
- **Environment Configuration**: Sensitive data stored in environment variables
- **Stateless Authentication**: No need for server-side sessions

## 🔍 Future Improvements

- Add user registration functionality
- Implement token refresh mechanism
- Store user credentials in a database
- Add password hashing with bcrypt
- Implement role-based authorization
- Add multi-factor authentication option
- Add token blacklisting for logout functionality
- Implement rate limiting for login attempts

## 📄 License

MIT