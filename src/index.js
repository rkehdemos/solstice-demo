import React from 'react';
import ReactDOM from 'react-dom';
import { Pane, Tablist, Tab, Card } from 'evergreen-ui';
import Header from './header';
import CustomerProfile from './customer-profile';
import AccountTable from './account-table';
import CustomerTable from './customer-table';

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	error: '',
			loading: true,
			accounts: null,
			customers: null,
			customerAccountMap: null,
			currentCustomerID: null,
			currentTab: 'Customers',
			isDrawerOpen: false
		}
		this.openDrawer = this.openDrawer.bind(this);
		this.closeDrawer = this.closeDrawer.bind(this);
    }
	
	componentDidMount() {
		fetch('/loadPage')
		.then(response => {
			response.json().then(data => {
				const {customers = [], accounts = [], customerAccountMap = []} = data;
				this.setState({customers, accounts, customerAccountMap, loading: false});
			})
		})
		.catch(e => {
			this.setState({loading:false, error: e})
		})
	}

	didLoadWithoutErrors() {
		return !this.state.loading && this.state.error.length < 1;
	}

	openDrawer(id) {
		this.setState({isDrawerOpen: true, currentCustomerID: id});
	}

	closeDrawer() {
		this.setState({isDrawerOpen: false, currentCustomerID: null});
	}

	render() {
		return (
			<Pane>
				<Header />
				{this.state.loading && (
					<p>Please wait while we load data...</p>
				)}
				{this.didLoadWithoutErrors() && (
					<Tablist marginTop={50} marginRight={50} display="flex" flexBasis={500}>
						<Pane background="tint2" border="default">
				            <Tab
					            key="customer_tab"
					            onSelect={() => this.setState({currentTab: 'Customers'})}
					            isSelected={this.state.currentTab === 'Customers'}
					            aria-controls="panel-customers"
					            width={500}
					            size={50}>
					              Customer List
				            </Tab>
			            </Pane>
			            <Pane background="tint2" border="default">
				            <Tab
				            	key="accounts_tab"
					            onSelect={() => this.setState({currentTab: 'Accounts'})}
					            isSelected={this.state.currentTab === 'Accounts'}
					            aria-controls="panel-accounts"
					            width={500}
					            size={50}> 
				            	<Card>Account List</Card>
				            </Tab>
			            </Pane>
			        </Tablist>
			    )}
		        {(this.didLoadWithoutErrors() && this.state.currentTab === 'Customers') && (
		        	<CustomerTable customers={this.state.customers} onRowSelect={this.openDrawer} />
		        )}
		        {(this.didLoadWithoutErrors() && this.state.currentTab === 'Accounts') && (
		        	<AccountTable accounts={this.state.accounts}/>
		        )}
		        {(this.didLoadWithoutErrors && this.state.currentCustomerID !== null) && (
			        <CustomerProfile 
			        	isShown={this.state.isDrawerOpen} 
			        	closeProfile={this.closeDrawer} 
			        	accounts={this.state.customerAccountMap[this.state.currentCustomerID] !== undefined ?  
			        				this.state.customerAccountMap[this.state.currentCustomerID] :
			        				[]
			        			}
			        	customerName={this.state.customers[this.state.currentCustomerID -1] !== undefined ? 
			        					`${this.state.customers[this.state.currentCustomerID - 1].first_name} ${this.state.customers[this.state.currentCustomerID - 1].last_name}` : 
			        					''
			        	}
			        	customerEmail={this.state.customers[this.state.currentCustomerID - 1] !== undefined ? 
			        					this.state.customers[this.state.currentCustomerID -1].email :
			        					''
			        	}
			        />
		    	)}
		    </Pane>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);