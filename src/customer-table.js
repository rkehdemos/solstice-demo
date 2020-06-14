import React from 'react';
import {Pane, Card, Table} from 'evergreen-ui';

const CustomerTable = props => (
	<Pane >
		<Table height={700} >
		  <Table.Head>
		    <Table.TextHeaderCell>
		      First Name
		    </Table.TextHeaderCell>
		    <Table.TextHeaderCell>
		      Last Name
		    </Table.TextHeaderCell>
		    <Table.TextHeaderCell>
		      Active?
		    </Table.TextHeaderCell>
		    <Table.TextHeaderCell>
		      Email
		    </Table.TextHeaderCell>
		    <Table.TextHeaderCell>
		      Date Created
		    </Table.TextHeaderCell>
		  </Table.Head>
		  <Table.Body height={550}>
		    {props.customers.map(customer => (
		      <Table.Row key={customer.id} isSelectable onSelect={() => {props.onRowSelect(customer.id)}}>
		        <Table.TextCell>{customer.first_name}</Table.TextCell>
		        <Table.TextCell>{customer.last_name}</Table.TextCell>
		        <Table.TextCell>{customer.active === 1 ? 'yes' : 'no'}</Table.TextCell>
		        <Table.TextCell>{customer.email}</Table.TextCell>
		        <Table.TextCell>{customer.created_date}</Table.TextCell>
		      </Table.Row>
		    ))}
		  </Table.Body>
		</Table>
	</Pane>
)

export default CustomerTable;