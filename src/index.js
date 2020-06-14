import React from 'react';
import ReactDOM from 'react-dom';
import { Pane } from 'evergreen-ui';
import AccountTable from './account-table';
import CustomerTable from './customer-table';

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	error: '',
			loading: true,
			accounts: [],
			customers: []
		}
    }
	
	componentDidMount() {
		fetch('/loadPage')
		.then(response => {
			response.json().then(data => {
				const {customers = [], accounts = []} = data;
				this.setState({customers:data.customers, accounts, loading: false});
			})
		})
		.catch(e => {
			this.setState({loading:false, error: e})
		})
	}

	render() {
		return (
			<Pane>
				{this.state.loading && (
					<p>Please wait while we load data...</p>
				)}
				{(!this.state.loading && this.state.error.length < 1) && (
					<CustomerTable customers={this.state.customers}/>
				)}
		    </Pane>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);