const express = require('express');
const fs = require('fs');
const path = require('path');

const contents = fs.readFileSync(path.resolve(''))

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/getCustomer', (req, res) => {
	res.json();
});

app.get('/getAccount', (req, res) => {
	res.json();
});

app.get('/getAllCustomers', (req, res) => {
	res.json();
});

app.get('/getAllAccounts', (req, res)) => {
	res.json();
}