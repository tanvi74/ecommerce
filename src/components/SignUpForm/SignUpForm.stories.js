import React from 'react';
import SignUpForm from './index';

export default {
	title: 'SignUpForm',
	component: SignUpForm,
};

export let ZeroConfig = () => {
	return <SignUpForm />;
};

export let LogInWithPhone = () => {
	return <SignUpForm hasPhoneInput={true} hasEmailInput={false} />;
};

export let LogInWithEmail = () => {
	return <SignUpForm hasPhoneInput={false} hasEmailInput={true} />;
};
