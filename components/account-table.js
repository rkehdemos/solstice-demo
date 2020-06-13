import React from 'react';
import {Pane, Card, Table} from 'evergreen-ui';

const AccountTable = (
  <Table>
    <Table.Head>
      <Table.SearchHeaderCell />
      <Table.TextHeaderCell>
        Customer
      </Table.TextHeaderCell>
      <Table.SearchHeaderCell />
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
    <Table.Body height={240}>
      {customers.map(account => (
        <Table.Row key={`account_{account.id}`} isSelectable onSelect={() => alert(profile.name)}>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
)

export const AccountTable;