# Day 4: API Testing with Postman

## 1. What is Postman?
Postman is a popular tool for **API testing and development**. It allows you to simulate requests (GET, POST, etc.) without having a frontend yet.

## 2. Key Features
- **Collections**: Group related API requests together.
- **Environments**: Save different base URLs (e.g., Localhost vs Production).
- **Body Tab**: Use `raw` + `JSON` to send data in a POST/PUT request.
- **Headers**: Set `Content-Type: application/json`.

## 3. Testing Your API
1. Start your server (`npm run dev`).
2. Open Postman.
3. Enter `http://localhost:3000/tasks`.
4. Click **Send** and inspect the JSON response.
5. Check the **Status Code** (e.g., 200 OK).
