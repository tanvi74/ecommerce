import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import defaultConfigs from "./defaultConfigs";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import regAction from '../../Actions/regAction';
import "./style.css";

class SignUpForm extends React.Component {
  static defaultProps = { ...defaultConfigs };
  
  state = {
    phone: "",
    uid: "",
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${window.apihost}/register_customer`,
      {
        UID: this.state.uid,
        PHONE: this.state.phone,
      }
    );
    console.log(response.data);
    // window.alert(response.data.message);
    if(response.data.status === "success")
        this.props.regAction(response.data);
    
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="top-div">
            <h3>Please SignUp Here!</h3>
          </div>
          <Form
            onSubmitCapture={(e) => {
              this.onSubmitHandler(e);
            }}
          >
            <div className="middle-div">
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone!",
                  },
                ]}
              >
                <Input
                  type="number"
                  onChange={(e) => {
                    this.setState({ phone: e.target.value });
                  }}
                />
              </Form.Item>
              <Form.Item
                label="UID"
                name="uid"
                rules={[
                  {
                    required: true,
                    message: "UID required",
                  },
                ]}
              >
                <Input
                  type="text"
                  onChange={(e) => {
                    this.setState({ uid: e.target.value });
                  }}
                />
              </Form.Item>
            </div>
            <div className="bottom-div">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SignUp
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        regAction: regAction
    },dispatch)
}

export default connect(null,mapDispatchToProps)(SignUpForm);
