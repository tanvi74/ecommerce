import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductBundle from "./../ProductBundle/ProductBundle";

import "./style.css";

function Home(props) {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    var url;
    props.searchTerm
      ? (url = `${window.apihost}/get_products_via_pincode`)
      : (url = `${window.apihost}/get_all_products`);

    console.log("from get products");

    var data = {};
    props.searchTerm
      ? (data = {
          pincode: props.searchTerm,
        })
      : (data = {});

    var resp = await axios.post(url, data);
    console.log(resp.data.data);
    const productList = resp.data.data.map((item) => {
      return {
        key: item._id,
        productName: item.name,
        price: item.MRP,
        description: item.description,
      };
    });
    setProductList(productList);
  };

  useEffect(() => {
    getProducts();
  }, [props.searchTerm]);

  return (
    <>
      <div className="home">
        <h1>Welcome To HyperLocal</h1>
        <ProductBundle items={productList} />
      </div>
    </>
  );
}

export default Home;
