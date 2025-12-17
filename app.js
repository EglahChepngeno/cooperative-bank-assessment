
const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer.routes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/customers', customerRoutes);

module.exports = app;
