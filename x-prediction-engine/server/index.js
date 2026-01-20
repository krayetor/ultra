const express = require('express');
const cors = require('cors');
require('dotenv').config();
console.log("LOG: Key Length is:", process.env.X_RAPIDAPI_KEY ? process.env.X_RAPIDAPI_KEY.length : "ZERO");

// Import the route handler we just created
const predictRoute = require('./routes/predict');

const app = express();

/**
 * Middleware Setup
 * Note: CORS must be initialized BEFORE routes to avoid connection issues.
 */
app.use(cors());
app.use(express.json());

/**
 * Health Check Route
 * Useful for verifying if the server is alive without hitting X API.
 */
app.get('/health', (req, res) => {
    res.status(200).json({ status: "online", engine: "X-Predictor-V1" });
});

/**
 * Main API Route
 * This maps http://localhost:5000/api/predict to the logic in routes/predict.js
 */
app.use('/api/predict', predictRoute);

/**
 * Global Error Handler
 * Catch-all for any unhandled logic failures to prevent the server from silent crashing.
 */
app.use((err, req, res, next) => {
    console.error('SERVER_CRASH_LOG:', err.stack);
    res.status(500).json({ 
        status: "error", 
        message: "Internal Engine Failure",
        details: err.message 
    });
});

// Start the Engine
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`
    🚀 PREDICTION ENGINE LIVE
    --------------------------
    Local:   http://localhost:${PORT}
    Health:  http://localhost:${PORT}/health
    --------------------------
    `);
});