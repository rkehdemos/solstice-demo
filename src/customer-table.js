import React from 'react';
import {Pane, Card, Table} from 'evergreen-ui';

const CustomerTable = props => (
	<Table>
	  <Table.Head>
	    <Table.SearchHeaderCell />
	    <Table.TextHeaderCell>
	      First Name
	    </Table.TextHeaderCell>
	    <Table.SearchHeaderCell />
	    <Table.TextHeaderCell>
	      Last Name
	    </Table.TextHeaderCell>
	    <Table.TextHeaderCell>
	      Active?
	    </Table.TextHeaderCell>
	    <Table.TextHeaderCell>
	      Email
	    </Table.TextHeaderCell>
	  </Table.Head>
	  <Table.Body height={240}>
	    {props.customers.map(customer => (
	      <Table.Row key={customer.id} isSelectable onSelect={() => ''}>
	        <Table.TextCell>{customer.first_name}</Table.TextCell>
	        <Table.TextCell>{customer.last_name}</Table.TextCell>
	        <Table.TextCell>{customer.is_active === 1 ? 'yes' : 'no'}</Table.TextCell>
	        <Table.TextCell>{customer.email}</Table.TextCell>
	      </Table.Row>
	    ))}
	  </Table.Body>
	</Table>
)

export default CustomerTable;