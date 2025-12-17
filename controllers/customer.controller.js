
// customer.controller.js
const Customer = require('../models/customer.model'); // correct relative path


// GET all customers
exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

// GET customer by ID
exports.getCustomerById = async (req, res) => {
  const customer = await Customer.findByPk(req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });
  res.json(customer);
};

// POST create customer
exports.createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  const customer = await Customer.create({ name, email, phone });
  res.status(201).json(customer);
};

// PUT update customer
exports.updateCustomer = async (req, res) => {
  const { name, email, phone } = req.body;
  const customer = await Customer.findByPk(req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });
  await customer.update({ name, email, phone });
  res.json(customer);
};

// DELETE customer
exports.deleteCustomer = async (req, res) => {
  const customer = await Customer.findByPk(req.params.id);
  if (!customer) return res.status(404).json({ message: 'Customer not found' });
  await customer.destroy();
  res.json({ message: 'Customer deleted' });
};
