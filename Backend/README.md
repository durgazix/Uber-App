# User Registration Endpoint Documentation

## 1. Register User

## Endpoint: `/user/register`

### Method: POST

### Description:
This endpoint is used to register a new user in the system. The user needs to provide their first name, email, and password. The last name is optional.

### Request Body:
The request body should be a JSON object containing the following fields:

- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
- **201 Created**: User successfully registered.
- **400 Bad Request**: Missing or invalid fields in the request body.
- **500 Internal Server Error**: An error occurred on the server.

### Example Response:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```
# User API Documentation

## 2. Login User

### Endpoint: `/user/login`

### Method: POST

### Description:
Authenticates an existing user and returns an access token.

### Request Body:
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

```json
{
  "email": "string",    // required, valid email format
  "password": "string"  // required, min 6 chars
}
{
  "token": "jwt-token-string",
  "user": {
    "_id": "mongodb-generated-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
{
  "error": "Invalid email or password"
}
curl -X POST http://localhost:4000/user/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john@example.com",
  "password": "password123"
}'
