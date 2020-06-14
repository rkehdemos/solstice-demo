import React, {Fragment} from 'react';
import {SideSheet, Pane, Text, Table} from 'evergreen-ui';

const CustomerProfile = props => (
  <>
    <SideSheet
      width={900}
      isShown={props.isShown}
      onCloseComplete={props.closeProfile}
    >
      <Pane>
        <Pane display="flex" flexDirection="column" justifyContent="center">
          <Text borderBottom="tint2" borderTop="tint2" paddingTop={30} size={50}>Customer:     {props.customerName}</Text>
          <Text borderBottom="tint2" borderTop="tint2" size={50} paddingTop={30}>Customer Email:      {props.customerEmail}</Text>
        </Pane>
        {props.accounts.length > 0 &&
        <Table height={800} paddingTop={50}>
        <Table.Head>
          <Table.TextHeaderCell>
            Account ID
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
        <Table.Body height={700}>
          {props.accounts.map(account => (
            <Table.Row key={`${props.customer_name}_profile_account_{account.id}`}>
                <Table.TextCell>{account.id}</Table.TextCell>
                <Table.TextCell>{account.address}</Table.TextCell>
                <Table.TextCell>{account.solar_farm_id}</Table.TextCell>
                <Table.TextCell isNumber>{account.capacity_share}</Table.TextCell>
                <Table.TextCell>{account.created_date}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      }
      {props.accounts.length === 0 && 
        <Text marginTop={100} size={200}>This customer doesn't appear to have any active accounts.</Text>
      }
    </Pane>
    </SideSheet>
  </>
)

export default CustomerProfile