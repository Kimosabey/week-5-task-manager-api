# Task Management API (Week 5)

This is a backend project built with Node.js and Express to demonstrate REST API principles, professional folder structure, and interactive documentation with Swagger.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone or download this project.
2. Open terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
To start the server in development mode (with auto-reload):
```bash
npm run dev
```

The server will start at `http://localhost:3000`.

### 🌐 Accessing via IP (Local Network)
If you want to access the API from another device (like a phone or another laptop) on the same Wi-Fi:
1. Find your computer's IP address (run `ipconfig` on Windows or `ifconfig` on Mac/Linux).
2. Use `http://<YOUR_IP_ADDRESS>:3000` instead of `localhost`.
   - Example: `http://192.168.1.5:3000/api-docs`

## 📚 API Documentation
Once the server is running, you can explore and test the API endpoints using the interactive Swagger UI:
👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

## 🛠️ Folder Structure
- `src/server.js`: The main entry point.
- `src/routes/`: Route definitions for the API.
- `src/controllers/`: Business logic for handling requests.
- `docs/`: Educational materials for each day of Week 5.

## 📝 Endpoints
- `GET /tasks`: Retrieve all tasks.
- `POST /tasks`: Create a new task.
- `GET /tasks/:id`: Get a specific task by ID.
- `PUT /tasks/:id`: Update a task.
- `DELETE /tasks/:id`: Remove a task.

## 🎓 Learning Objectives Coring
- Understanding Backend fundamentals.
- Mastering REST HTTP methods.
- Using middleware (JSON parser, custom loggers).
- Documenting APIs professionally with Swagger.
- Testing with tools like Postman.
