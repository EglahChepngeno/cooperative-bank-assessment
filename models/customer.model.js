const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('customerdb', 'root', 'Neno', {
  host: 'localhost',
  dialect: 'mysql'
});

const Customer = sequelize.define('Customer', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING },
  balance: { type: DataTypes.DECIMAL(15,2), defaultValue: 0 }
}, {
  tableName: 'customers',
  timestamps: true
});

sequelize.sync(); // Ensure table is created

module.exports = Customer;
