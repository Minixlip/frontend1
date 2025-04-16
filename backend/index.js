// Step 1: Import the libraries
const express = require('express');
const cors = require('cors');

// Step 2: Create the app
const app = express();

// Step 3: Use CORS (to handle cross-origin issues)
app.use(cors());

// Step 4: Use JSON parser
app.use(express.json());

// Step 5: Create a basic route
app.get('/', function(req, res) {
    res.send('Hello from the backend!');
});

// Step 6: Set up the server to listen on port 5000
app.listen(5000, function() {
    console.log('Server is running on http://localhost:5000');
});


// Sample clothing items data
app.get('/api/clothes', (req, res) => {
    const clothes = [
        { name: 'T-Shirt', description: 'A cool t-shirt' },
        { name: 'Jeans', description: 'A pair of stylish jeans' },
        { name: 'Jacket', description: 'A sleek leather jacket' }
    ];
    res.json(clothes);  // Send the clothes data as JSON
});
