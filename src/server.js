const express = require('express');
const fs = require('fs');
const path = require('path');
const {customers, accounts} = require('./assets/data/initial');

const app = express();

app.get('/getCustomers', (req, res) => {
	const query = req.query;
	const {ids = [], all = false} = query;

	let data = [];
	let error;

	try {
	    data = all ? customers : ids.split(',').map(num => parseInt(num, 10)).reduce((acc, curr) => {
			acc[curr] = customers[curr];
			return acc;
		}, []);
	} catch (e) {
		error = e;
	}

	res.json({data, error});
});

app.get('/getAccounts', (req, res) => {
	const query = req.query;
	const {ids = [], all = false} = query;

	let data = [];
	let error;

	try {
		data = all ? accounts : ids.split(',').map(num => parseInt(num, 10)).reduce((acc, curr) => {
			acc[curr] = accounts[curr];
			return acc;
		}, []);
	} catch(e) {
		error = e;
	}

	res.json({data, error});
});

app.get('/loadPage', (req, res) => {
	res.json({customers, accounts})
});

app.listen(process.env.PORT || 5000);