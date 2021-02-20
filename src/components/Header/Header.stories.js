import React from 'react';
import Header from './index';

export default {
	title: 'Header',
	component: Header,
};

/** Header with SearchBar and NavBar */
export let ZeroConfig = () => {
	return <Header />;
};

/** Header without SearchBar */
export let HeaderWihtoutSearchBar = () => {
	return <Header hasSearchBar={false} />;
};

/** Header without NavBar */
export let HeaderWihtoutNavBar = () => {
	return <Header hasNavBar={false} />;
};
