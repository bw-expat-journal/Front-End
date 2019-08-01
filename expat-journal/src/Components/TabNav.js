import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";



const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home")
const signUpLabel = createLabel("signup", "Sign-Up")
const characterLabel = createLabel("chain", "Login")
//  const journalsLabel = createLabel("bolt", "Create Post")



const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/home`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='sign-up' as={Nav} to={`/sign-up`} content={signUpLabel} /> },
<<<<<<< HEAD
  { menuItem: <Menu.Item key='login' as={Nav} to={`/login`} content={characterLabel} /> },
// 	 { menuItem: <Menu.Item key='journals' as={Nav} to={`/submit`} content={journalsLabel} /> },
=======

  { menuItem: <Menu.Item key='login' as={Nav} to={`/`} content={characterLabel} /> },
//  { menuItem: <Menu.Item key='journals' as={Nav} to={`/journals`} content={journalsLabel} /> },
>>>>>>> 3965d8ded6cbe0e20a9ffa5cc5f305129b34fc31
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav