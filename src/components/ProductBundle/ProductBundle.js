import React from "react";
import { array } from "prop-types";
import { Space } from "antd";
import defaultConfigs from "./defaultConfigs";
import ProductCard from "./../ProductCard/ProductCard";

class ProductBundle extends React.Component {
  static defaultProps = { ...defaultConfigs };

  static propTypes = {
    /** Array of products */
    items: array,
  };

  render() {
    console.log(this.props.items);
    const products = this.props.items.map((item) => {
      return (
        <ProductCard
          id = {item.key}
          key={item.productName}
          size={item.size}
          productName={item.productName}
          imgURL={item.imgURL}
          price={item.price}
          priceCurrencySign={item.priceCurrencySign}
          description={item.description}
        />
      );
    });
    return <Space wrap>{products}</Space>;
  }
}

export default ProductBundle;
