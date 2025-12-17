
const { Sequelize, DataTypes } = require('sequelize');

// Connect to MySQL
const sequelize = new Sequelize('customerdb', 'root', 'Neno', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

// Define Customer model
const Customer = sequelize.define('Customer', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING },
  balance: { type: DataTypes.DECIMAL(15,2), defaultValue: 0 }
}, {
  tableName: 'customers',
  timestamps: true
});

// Sync the model (creates table)
sequelize.sync();

module.exports = Customer;
