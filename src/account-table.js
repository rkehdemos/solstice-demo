import React from 'react';
import {Pane, Card, Table} from 'evergreen-ui';

const AccountTable = props => (
  <Table height={700}>
    <Table.Head>
      <Table.TextHeaderCell>
        Customer
      </Table.TextHeaderCell>
      <Table.TextHeaderCell>
        Address
      </Table.TextHeaderCell>
      <Table.TextHeaderCell>
        Solar Farm
      </Table.TextHeaderCell>
      <Table.TextHeaderCell>
        Capacity
      </Table.TextHeaderCell>
      <Table.TextHeaderCell>
        Date Created
      </Table.TextHeaderCell>
    </Table.Head>
    <Table.Body height={550}>
      {props.accounts.map(account => (
        <Table.Row key={`account_{account.id}`}>
            <Table.TextCell>{account.customer_name}</Table.TextCell>
            <Table.TextCell>{account.address}</Table.TextCell>
            <Table.TextCell>{account.solar_farm_id !== null ? account.solar_farm_id : 'N/A'}</Table.TextCell>
            <Table.TextCell isNumber>{account.capacity_share !== null ? account.capacity_share : 'N/A'}</Table.TextCell>
            <Table.TextCell>{account.created_date}</Table.TextCell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export default AccountTable;