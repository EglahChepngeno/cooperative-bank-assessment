
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');

// GET all customers
router.get('/', customerController.getAllCustomers);

// GET customer by ID
router.get('/:id', customerController.getCustomerById);

// GET customer balance
router.get('/:id/balance', customerController.getBalance);

// POST new customer
router.post('/', customerController.createCustomer);

// POST transfer funds
router.post('/transfer', customerController.transferFunds);

// PUT full update
router.put('/:id', customerController.updateCustomer);

// PATCH partial update
router.patch('/:id', customerController.patchCustomer);

// DELETE customer
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
