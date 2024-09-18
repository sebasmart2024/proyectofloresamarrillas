const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse application/json
app.use(bodyParser.json());

// Cors middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Endpoint para obtener datos de ejemplo
app.get('/api/data', (req, res) => {
    const data = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];
    res.json(data);
});

// Iniciar servidor
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

