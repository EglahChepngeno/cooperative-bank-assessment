const { Sequelize } = require('sequelize');
require('dotenv').config(); 

// Create Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // MySQL username
  process.env.DB_PASSWORD, // MySQL password
  {
    host: process.env.DB_HOST || 'localhost', // Default to localhost
    dialect: 'mysql',
    logging: false // Set true if you want SQL logs
  }
);

// Test connection
sequelize.authenticate()
  .then(() => console.log('MySQL Connected successfully'))
  .catch(err => console.error('Unable to connect to MySQL:', err));

module.exports = sequelize;
