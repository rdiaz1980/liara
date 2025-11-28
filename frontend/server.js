const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send(`
        <h1>Frontend Service</h1>
        <button id="fetchButton">Fetch Data</button>
        <p id="output"></p>
        <script>
            document.getElementById('fetchButton').onclick = async () => {
                try {
                    const response = await fetch('http://localhost:3000/api');
                    const data = await response.json();
                    document.getElementById('output').textContent = data.message;
                } catch (error) {
                    console.error('Error fetching data:', error);
                    document.getElementById('output').textContent = 'Error fetching data!';
                }
            };
        </script>
    `);
});

app.listen(port, () => {
    console.log(`Frontend service is running at http://localhost:${port}`);
});
