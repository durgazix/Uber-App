# User Registration Endpoint Documentation

## 1. Register User

## Endpoint: `/users/register`

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

### Endpoint: `/users/login`

### Method: POST

### Description:
Authenticates an existing user and returns an access token.

### Request Body:
- `email` (string, required): The email address of the user. Must be a valid email format and at least 5 characters long.
- `password` (string, required): The password for the user account. Must be at least 6 characters long.

### Example Request:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
- **200 OK**: User successfully authenticated.
- **400 Bad Request**: Missing or invalid fields in the request body.
- **401 Unauthorized**: Invalid email or password.
- **500 Internal Server Error**: An error occurred on the server.

### Example Response:
```json
{
  "token": "jwt-token-string",
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

## 3. Get User Profile

### Endpoint: `/users/profile`

### Method: GET

### Description:
Fetches the profile of the authenticated user.

### Headers:
- `Authorization`: Bearer token

### Example Request:
```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer jwt-token-string"
```

### Response:
- **200 OK**: User profile fetched successfully.
- **401 Unauthorized**: Invalid or missing token.
- **500 Internal Server Error**: An error occurred on the server.

### Example Response:
```json
{
  "id": "60d0fe4f5311236168a109ca",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

## 4. Logout User

### Endpoint: `/users/logout`

### Method: GET

### Description:
Logs out the authenticated user by invalidating the token.

### Headers:
- `Authorization`: Bearer token

### Example Request:
```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer jwt-token-string"
```

### Response:
- **200 OK**: User logged out successfully.
- **401 Unauthorized**: Invalid or missing token.
- **500 Internal Server Error**: An error occurred on the server.

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```

# Captain API Documentation

## 1. Register Captain

### Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain in the system. The captain needs to provide their first name, email, password, and vehicle details.

### Request Body:
The request body should be a JSON object containing the following fields:

- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain's account. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (integer, required): The capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

### Example Request:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response:
- **201 Created**: Captain successfully registered.
- **400 Bad Request**: Missing or invalid fields in the request body.
- **500 Internal Server Error**: An error occurred on the server.

### Example Response:
```json
{
  "token": "jwt-token-string",
  "captain": {
    "id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
### Sample Request:
```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```