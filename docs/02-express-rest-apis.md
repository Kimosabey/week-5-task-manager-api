# Day 2: Express & REST APIs

## 1. What is Express?
Express is a minimal and flexible **web application framework** for Node.js. It simplifies the process of creating routes, handling requests, and managing middleware.

## 2. Routing
Routing determines how an application responds to a client request to a particular endpoint (URI).

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Task API');
});
```

## 3. HTTP Methods (REST)
A professional API uses standard methods to perform actions:
- **GET**: Retrieve data (e.g., `GET /tasks`).
- **POST**: Create new data (e.g., `POST /tasks`).
- **PUT / PATCH**: Update existing data (e.g., `PUT /tasks/:id`).
- **DELETE**: Remove data (e.g., `DELETE /tasks/:id`).

## 4. Status Codes
Common status codes to learn:
- **200 OK**: Success.
- **201 Created**: Success (specifically for POST).
- **400 Bad Request**: Client error (invalid data).
- **404 Not Found**: Resource doesn't exist.
- **500 Internal Server Error**: Server-side error.

## 5. Request Data
- **req.body**: Data sent in the request body (used in POST/PUT).
- **req.params**: Dynamic segments in URL (e.g., `:id` in `/tasks/:id`).
- **req.query**: Query strings (e.g., `?status=completed` in `/tasks?status=completed`).
