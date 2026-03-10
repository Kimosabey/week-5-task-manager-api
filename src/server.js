const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const taskRoutes = require('./routes/tasks');
const logger = require('./middleware/logger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger); // Using external logger middleware

// Swagger Configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Management API',
            version: '1.0.0',
            description: 'A simple Task Management API for Week 5 Interns',
            contact: {
                name: 'Intern Program'
            },
            servers: [`http://localhost:${PORT}`]
        }
    },
    apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/tasks', taskRoutes);

// Root Route
app.get('/', (req, res) => {
    res.send('<h1>Task Management API</h1><p>View documentation at <a href="/api-docs">/api-docs</a></p>');
});

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
    const ip = '10.10.20.122'; // Extracted from user's ipconfig
    console.log(`\n🚀 Task Management API is LIVE!`);
    console.log(`🏠 Local:            http://localhost:${PORT}`);
    console.log(`🌐 Network (Interns): http://${ip}:${PORT}`);
    console.log(`📚 Swagger Docs:      http://${ip}:${PORT}/api-docs\n`);
    console.log(`--- Activity Logs ---`);
});
