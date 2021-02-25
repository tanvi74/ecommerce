import React, { useState, useEffect } from "react";
import axios from "axios";
import {useSelector} from 'react-redux';
import {Row,Col,Button} from 'antd';
import ProductBundle from "./../ProductBundle/ProductBundle";

import "./style.css";

function Home(props) {
  const [productList, setProductList] = useState([]);
  const searchTerm = useSelector(state => state.searchTerm);
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

    var resp = await axios.post(url, data);
    console.log(resp.data.data);
    const productList = resp.data.data!=null ? resp.data.data.map((item) => {
      return {
        key: item._id,
        productName: item.name,
        price: item.MRP,
        description: item.description,
        imgURL: item.images[0],
      };
    }): [];
    setProductList(productList);
  };

  useEffect(() => {
    getProducts();
  }, [searchTerm]);

  const handleSort = () => {
    console.log("Sorting")
  }

  return (
    <>
      <div className="home">
        {console.log(searchTerm)}
        <Row>
          <Col>
          <Button type="primary" size="large" onClick={handleSort}>Sort By Price</Button>
          </Col>
        </Row>
        
        {productList.length ? <ProductBundle items={productList} /> : 
         <>
         <h1>Sorry!! No Products in your pincode area.</h1>
          </>}
        
      </div>
    </>
  );
}

export default Home;
