import React from 'react';
import { Form, Input, Button } from 'antd';
import { bool } from 'prop-types';
import defaultConfigs from './defaultConfigs';
import './style.css';

export default class LogInFrom extends React.Component {
	static defaultProps = { ...defaultConfigs };

	static propTypes = {
		/** Whether form has email inptu or not */
		hasEmailInput: bool,

		/** Whether form has phone inptu or not */
		hasPhoneInput: bool,
	};

	render() {
		return (
			<React.Fragment>
				<div className="form-container">
					<div className="top-div">
						<h3>Please LogIn Here!</h3>
					</div>
					<Form onSubmitCapture={() => console.log('Form Submitted')}>
						<div className="middle-div">
							{this.props.hasEmailInput && (
								<Form.Item
									label="Email"
									name="email"
									rules={[
										{
											required: true,
											message: 'Please input your Email!',
										},
									]}
								>
									<Input
										type="text"
										onChange={() => console.log('changed')}
									/>
								</Form.Item>
							)}{' '}
							{this.props.hasPhoneInput && (
								<Form.Item
									label="Phone"
									name="phone"
									rules={[
										{
											required: true,
											message: 'Please input your Phone!',
										},
									]}
								>
									<Input
										type="number"
										onChange={() => console.log('changed')}
									/>
								</Form.Item>
							)}
							<Form.Item
								label="Password"
								name="password"
								rules={[
									{
										required: true,
										message: 'Please input Password!',
									},
								]}
							>
								<Input.Password
									onChange={() => console.log('changed')}
								/>
							</Form.Item>
						</div>
						<div className="bottom-div">
							<Form.Item>
								<Button
									type="primary"
									size="large"
									htmlType="submit"
								>
									LogIn
								</Button>
							</Form.Item>
						</div>
					</Form>
				</div>
			</React.Fragment>
		);
	}
}
