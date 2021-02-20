import React from 'react';
import LogInForm from './index';

export default {
	title: 'LogInForm',
	component: LogInForm,
};

export let ZeroConfig = () => {
	return <LogInForm />;
};

export let LogInWithPhone = () => {
	return <LogInForm hasPhoneInput={true} hasEmailInput={false} />;
};
