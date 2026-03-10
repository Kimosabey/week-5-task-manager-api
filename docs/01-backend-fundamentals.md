# Day 1: Backend Fundamentals (Node.js)

## 1. What is the Backend?
The backend (or "server-side") is the part of the application that the user doesn't see. It handles data processing, database interactions, authentication, and business logic. While the frontend focuses on UI/UX, the backend ensures everything works correctly behind the scenes.

## 2. Client-Server Architecture
The web operates on a **Request-Response** model:
- **Client**: Typically a web browser or mobile app. It sends a "request" (e.g., "Give me the list of tasks").
- **Server**: A powerful computer or software (like Node.js) that "listens" for requests, processes them, and sends back a "response" (e.g., a JSON list of tasks).

## 3. What is Node.js?
Node.js is a **JavaScript Runtime** built on Chrome's V8 engine. It allows developers to run JavaScript on the server, outside the browser.
- **Non-blocking**: It can handle many connections simultaneously.
- **Package Manager (NPM)**: Provides access to millions of libraries (like Express).

## 4. Basic HTTP Module
Node.js has a built-in `http` module to create a server.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from the Backend!');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

### Key Concepts:
- **req (Request Object)**: Contains data about the incoming request (URL, headers, method).
- **res (Response Object)**: Used to send data back to the client.
- **Status Codes**: 200 means "OK".
