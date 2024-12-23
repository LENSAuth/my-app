const express = require('express'); // Import the express library
const app = express(); // Create an express app
const port = 8080; // Set the app port

app.use(express.json()); // Allow for JSON POST bodies

app.set('view engine', 'ejs'); // Set the view engine to EJS

app.get('/', (req, res) => { // Handle GET requests to the root URL
    res.render('index', { message: 'Hello World!' }); // Render the index.ejs file
});

app.post('/', (req, res) => { // Handle POST requests to the root URL
    console.log('Got a POST request');
    if (req.body && Object.keys(req.body).length > 0) { // Check if the POST request has data
        console.log('Received data:', req.body); // Log the data to the console
        res.json({ message: 'POST request received' });
    } else {
        res.json({ message: 'POST request received, but with no data. Check that your domain is valid and registered with LENS' });
    };
});

app.listen(port, () => {
    console.log(`LENS App listening at http://localhost:${port}`); // Log the app status to the console
});