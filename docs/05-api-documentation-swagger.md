# Day 5: API Documentation with Swagger

## 1. Why Documentation?
An API is useless if people don't know how to use it. Documentation explains:
- What endpoints are available.
- What data is required.
- What response to expect.

## 2. Integrating Swagger
We use `swagger-jsdoc` and `swagger-ui-express`.

- **swagger-jsdoc**: Reads JSDoc comments in your code and converts them to Swagger JSON.
- **swagger-ui-express**: Serves a beautiful UI in the browser based on that JSON.

## 3. Accessing Documentation
Once set up, you can visit `http://localhost:3000/api-docs` to see interactive documentation where you can even test the API directly!
