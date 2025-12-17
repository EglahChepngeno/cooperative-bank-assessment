const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer.routes');

const app = express();
app.use(bodyParser.json());

// Customer routes
app.use('/api/customers', customerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
