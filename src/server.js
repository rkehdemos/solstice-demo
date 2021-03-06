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
	const formattedAccounts = accounts.map(account => {
		const customerLocation = account.customer_id--;
		const customer_name = customers[customerLocation] !== undefined ? `${customers[customerLocation].first_name} ${customers[customerLocation].last_name}` : '';

		return {
		    customer_id: account.customer_id,
		    address: `${account.address}, ${account.city}, ${account.state} ${account.zip_code}`,
		    solar_farm_id: account.solar_farm_id,
		    capacity_share: account.capacity_share,
		    created_date: account.created_date,
		    customer_name
		};
	})

	const customerAccountMap = accounts.reduce((acc, curr) => {
		acc[curr.customer_id] = acc[curr.customer_id] !== undefined ? 
			[...acc[curr.customer_id], curr] :
			[curr];

		return acc;
	}, [])

	res.json({customers, accounts: formattedAccounts, customerAccountMap})
});

app.listen(process.env.PORT || 5000);