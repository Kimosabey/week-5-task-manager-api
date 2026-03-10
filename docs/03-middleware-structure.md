# Day 3: Middleware & Project Structure

## 1. What is Middleware?
Middleware functions are functions that have access to the **Request object (req)**, the **Response object (res)**, and the **next middleware function** in the application’s request-response cycle.

Middleware can:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

```javascript
app.use(express.json()); // Built-in middleware to parse JSON
```

## 2. Professional Project Structure
Separation of concerns is key for maintainable code.

- **src/server.js**: Entry point, initializes Express and middleware.
- **src/routes/**: Defines API endpoints.
- **src/controllers/**: Contains the logic (business logic) for each endpoint.
- **src/middleware/**: Custom functions like error handlers or loggers.

### Request Flow:
`Request` -> `Routes` -> `Middleware` -> `Controller` -> `Response`
