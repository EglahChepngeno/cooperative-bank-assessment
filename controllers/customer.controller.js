const Customer = require('../models/customer.model');

// CREATE (POST) new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, phone, balance } = req.body;
    const customer = await Customer.create({ name, email, phone, balance });
    res.status(201).json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

// GET all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
};

// GET customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch customer' });
  }
};

// GET balance
exports.getBalance = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json({ id: customer.id, name: customer.name, balance: customer.balance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch balance' });
  }
};

// FULL UPDATE (PUT)
exports.updateCustomer = async (req, res) => {
  try {
    const { name, email, phone, balance } = req.body;
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    customer.balance = balance;
    await customer.save();
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update customer' });
  }
};

// PARTIAL UPDATE (PATCH)
exports.patchCustomer = async (req, res) => {
  try {
    const updates = req.body;
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    Object.keys(updates).forEach(key => {
      customer[key] = updates[key];
    });
    await customer.save();
    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to partially update customer' });
  }
};

// DELETE customer
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    await customer.destroy();
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete customer' });
  }
};

// TRANSFER funds (POST)
exports.transferFunds = async (req, res) => {
  try {
    const { fromId, toId, amount } = req.body;
    if (amount <= 0) return res.status(400).json({ error: 'Amount must be positive' });

    const fromCustomer = await Customer.findByPk(fromId);
    const toCustomer = await Customer.findByPk(toId);

    if (!fromCustomer || !toCustomer) return res.status(404).json({ error: 'Customer not found' });
    if (parseFloat(fromCustomer.balance) < parseFloat(amount)) return res.status(400).json({ error: 'Insufficient balance' });

    fromCustomer.balance -= amount;
    toCustomer.balance += amount;

    await fromCustomer.save();
    await toCustomer.save();

    res.json({ message: 'Transfer successful', fromCustomer, toCustomer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to transfer funds' });
  }
};
