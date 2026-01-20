const express = require('express');
const router = express.Router();
const axios = require('axios');
const { calculateXpayout } = require('../utils/formula');

// This handles the POST request from your Frontend
router.post('/', async (req, res) => {
    try {
        const { username } = req.body;
        const cleanHandle = username.replace('@', '');

        // THIS IS WHERE YOUR URL AND OPTIONS GO
        // server/routes/predict.js

        const options = {
            method: 'GET',
            url: 'https://twitter-api45.p.rapidapi.com/screenname.php',
            params: {
                screenname: username.replace('@', '').trim()
            },
            headers: {
                // Ensure this matches the .env exactly (no extra underscore)
                'x-rapidapi-key': process.env.X_RAPIDAPI_KEY.replace(/\s/g, ''), 
                'x-rapidapi-host': process.env.X_RAPIDAPI_HOST.replace(/\s/g, '')
            }
        };

        // Execute the request to X
        const response = await axios.request(options);
        const user = response.data;

        // If user not found
        if (!user || user.msg === "Not found") {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        // Calculate the payout amount
        const amount = calculateXpayout(user.followers_count, user.blue_verified);

        // Return the final "OG" data to the Frontend
        res.json({
            status: "success",
            amount: amount,
            userData: {
                name: user.name,
                username: user.screen_name,
                followers_count: user.followers_count,
                is_blue_verified: user.blue_verified,
                profile_image_url: user.avatar?.replace('_normal', '_400x400')
            }
        });

    } catch (error) {
        console.error("RAPID_API_ERROR:", error.message);
        res.status(500).json({ status: "error", message: "Communication failure with X" });
    }
});

module.exports = router;