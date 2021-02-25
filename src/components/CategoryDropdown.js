import { useState, useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import axios from "axios";

const { SubMenu } = Menu;

const CategoryDropdown = (props) => {
  const [menu, setMenu] = useState("");

  useEffect(() => {
    axios
      .get(`${window.apihost}/get_category_subcategory`)
      .then((response) => {
        const data = response.data.data;
        const dropdown = (
          <Menu>
            {data.map((item) => {
              return (
                <SubMenu title={item.category} key={item._id}>
                  {item.subcategory.map((item, index) => {
                    //TODO: Uncomment line below when API gets fixed
                    // return <Menu.Item key={index}>{item}</Menu.Item>;
                    return ".";
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        );
        setMenu(dropdown);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [menu]);

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button>
        All Categories <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default CategoryDropdown;
