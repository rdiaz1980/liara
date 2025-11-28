const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

// Enable CORS
app.use(cors()); // This allows all origins. Use specific origin if needed.

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Backend service is running at http://localhost:${port}`);
});
