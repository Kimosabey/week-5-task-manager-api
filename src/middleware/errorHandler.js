/**
 * Global Error Handler Middleware
 */
const errorHandler = (err, req, res, next) => {
    console.error(`[SYSTEM ERROR] ${err.stack}`);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? {} : err.stack
    });
};

/**
 * 404 Not Found Middleware
 */
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
};

module.exports = {
    errorHandler,
    notFoundHandler
};
