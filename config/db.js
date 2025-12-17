const { Sequelize } = require('sequelize');
require('dotenv').config(); 

// Create Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,     
  process.env.DB_USER,     
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST || 'localhost', 
    dialect: 'mysql',
    logging: false 
  }
);

// Test connection
sequelize.authenticate()
  .then(() => console.log('MySQL Connected successfully'))
  .catch(err => console.error('Unable to connect to MySQL:', err));

module.exports = sequelize;
