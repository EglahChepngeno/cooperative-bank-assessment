# cooperative-bank-assessment

## Clone the repository

Open PowerShell or Command Prompt and run:

git clone git@github.com:EglahChepngeno/cooperative-bank-assessment.git



Then navigate into the project folder:

cd cooperative-bank-assessment

## Install dependencies

Make sure Node.js and npm are installed. Then run:

npm install


This installs all required packages like express, sequelize, mysql2, body-parser, dotenv.

## Set up the .env file

In the root folder, create a file named .env with the following content:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Neno
DB_NAME=customerdb
PORT=3000


Replace Neno with your MySQL root password.

 Make sure MySQL is running

XAMPP: Start MySQL.

Standalone MySQL: Start the MySQL service.

Check connection with:

mysql -u root -p


Enter your password to confirm MySQL is running.

## Run the server

Start the Node.js server with:

node server.js


You should see:

MySQL Connected
Database synced
Server running on port 3000

## Test APIs with Postman

Use http://localhost:3000/api/customers with:

GET → Fetch all customers

POST → Create a customer

GET /:id → Fetch a single customer

PUT /:id → Update a customer

DELETE /:id → Delete a customer

Make sure to send JSON in POST and PUT requests.

## Optional: Start with npm script

npm start

## License
MIT License
