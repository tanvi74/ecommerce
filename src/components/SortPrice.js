// this page will be visible weather logged in or not
//items will be sorted according to the price
import React from 'react';
import 'antd/dist/antd.css'; //antd library is used
import { Menu , Button} from 'antd';
import { MailOutlined, } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { SubMenu } = Menu;
const { Search } = Input;

class CategorySelect extends React.Component {  

  //class based component created where a user can see the list of all items and if he enters the pincode the items will be filtered according to that
  state = {
    items:[],
    collapsed: false,
  };


 onSearch = async (value)=> {console.log(value);
try{
  let _data = {
    pincode: value,
    categoryId: "60053042c41535052c98e6ae",
    subCategoryId:"123"
  }
  const url="https://humaps-12.herokuapp.com/getSortedItems";
  const response = await fetch(url,{
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  });
  const data = await response.json();
  console.log(data)

this.setState(     //will update items
  {
    items:data.data
  }
)
}
catch(err)
{
  console.log("error!");
}
}
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };



  render() {
    return (
      <div style={{ width:" 100%", height:"10%"}}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Electronics">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<MailOutlined />} title="Grocery">
            <Menu.Item key="4">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<MailOutlined />} title="Household">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<MailOutlined />} title="Kitchen">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
        <Search
      placeholder="input Pincode"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={this.onSearch}

    />
      {this.state.items.map(
        (v)=>{
          return(
            <div>
              {v.product_details.name}
            </div>
          )

        }
      )}
      </div>
    );
  }
}
export default CategorySelect;