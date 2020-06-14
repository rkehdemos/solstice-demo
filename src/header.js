import React from 'react';
import {Pane, Text} from 'evergreen-ui';

const Header = props => (
	<Pane height={100} background="tint2"> 
		<Pane paddingTop={80} display="flex" justifyContent="space-between" borderBottom="default" >
			<Text>Home</Text>
			<Text>Lorem</Text>
			<Text>Ipsum</Text>
			<Text>Dolor</Text>
			<Text>Sit</Text>
			<Text>Amet</Text>
		</Pane>
	</Pane>
)

export default Header;