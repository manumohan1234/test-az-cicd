const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

let clickCounter = 0;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get the current time
app.get('/api/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ time: currentTime });
});

// Endpoint to increment and get click count
app.post('/api/click', (req, res) => {
    clickCounter++;
    res.json({ clicks: clickCounter });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});