import React from 'react';
import NavBar from './index';

export default {
	title: 'NavBar',
	component: NavBar,
};

export let ZeroConfig = () => {
	return <NavBar />;
};

const navBarItems = [
	{
		title: 'MyAccount',
		navigateTo: '',
	},
	{
		title: 'Cart',
		navigateTo: '',
	},
	{
		title: 'WishList',
		navigateTo: '',
	},
];
export let NavBar2 = () => {
	return <NavBar navBarItems={navBarItems} defaultSelectedKeys="MyAccount" />;
};
