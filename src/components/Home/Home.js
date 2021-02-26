import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Row, Col, Button, Dropdown, Menu, Spin } from "antd";
import ProductBundle from "./../ProductBundle/ProductBundle";

import "./style.css";

function Home(props) {
  const [productList, setProductList] = useState([]);
  const [sortSeq, setSortSeq] = useState("highToLow");
  const [isLoading, setIsLoading] = useState(false);
  const searchTerm = useSelector((state) => state.searchTerm);
  const getProducts = async () => {
    var url;
    searchTerm
      ? (url = `${window.apihost}/get_products_via_pincode`)
      : (url = `${window.apihost}/get_all_products`);

    console.log("from get products");

    var data = {};
    searchTerm
      ? (data = {
          pincode: searchTerm,
        })
      : (data = {});

    setIsLoading(true);
    var resp = await axios.post(url, data);
    setIsLoading(false);
    console.log(resp.data.data);
    const productList =
      resp.data.data != null
        ? resp.data.data.map((item) => {
            return {
              key: item._id,
              productName: item.name,
              price: item.MRP,
              description: item.description,
              imgURL: item.images[0],
            };
          })
        : [];
    setProductList(productList);
  };

  useEffect(() => {
    getProducts();
  }, [searchTerm]);

  function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  function inversecompare(a, b) {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  }

  let promise = new Promise(function (resolve, reject) {
    var arr = [];
    sortSeq === "lowToHigh"
      ? (arr = productList.sort(compare))
      : productList.sort(inversecompare);
    resolve(arr);
  });

  const lowToHigh = () => {
    console.log("lowToHigh");
    setSortSeq("lowToHigh");
    promise.then(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  };

  const highToLow = () => {
    console.log("highToLow");
    setSortSeq("highToLow");
    promise.then(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  };

  // menu for dropdown
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={highToLow}>
        From High to Low
      </Menu.Item>
      <Menu.Item key="2" onClick={lowToHigh}>
        From Low to High
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="home">
        {console.log(productList)}
        {isLoading ? (
          <Spin size="large" />
        ) : productList.length ? (
          <h1>
            <Row>
              <Col style={{ marginBottom: 100 }}>
                <Dropdown overlay={menu} placement="bottomRight" arrow>
                  <Button type="primary" size="large">
                    Sort By Price
                  </Button>
                </Dropdown>
              </Col>
            </Row>
            <ProductBundle items={productList} />{" "}
          </h1>
        ) : (
          <>
            <h1>Sorry!! No Products in your pincode area.</h1>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
