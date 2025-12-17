
// const app = require('./app');
// const sequelize = require('./config/db');

// const PORT = process.env.PORT || 3000;

// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Database synced');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch(err => console.error('Error syncing database:', err));


const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer.routes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/customers', customerRoutes);

module.exports = app;
