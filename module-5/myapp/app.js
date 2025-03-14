const express = require('express')
const swaggerUi = require('swagger-ui-express');

const testRoutes = require('./routes/myTestRoutes.js');
const calculatorRoutes = require('./routes/calculatorRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000;

// Middle Route
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', express.static('public'))

app.use('/mytest', testRoutes)

app.use('/calculator', calculatorRoutes);

app.use('/users', userRoutes)

// Fallback Route
app.get('*', (req, res) => {
    res.send('Not Found!')
});

module.exports = app;