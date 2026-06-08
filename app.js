const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

let visitorCount = 0;

app.get('/', (req, res) => {
    visitorCount++;
    res.json({
        message: "Welcome to the DevOps Node.js Web App!",
        timestamp: new Date().toISOString(),
        containerId: os.hostname(),
        visitorCounter: visitorCount
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP", containerId: os.hostname() });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});