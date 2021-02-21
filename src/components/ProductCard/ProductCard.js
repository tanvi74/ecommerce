import React from "react";
import { Card } from "antd";
import { string, number } from "prop-types";
import defaultConfigs from "./defaultConfigs";
import "./style.css";

const { Meta } = Card;

/** Component to show a single product */
class ProductCard extends React.Component {
  static defaultProps = { ...defaultConfigs };

  static propTypes = {
    /** Size of the image in the card */
    size: number,

    /** Name of the product */
    productName: string,

    /** Url of the image of the product */
    imgURL: string,

    /** Price of the product */
    price: number,

    /** Currency sign to be shown with price of the product */
    priceCurrencySign: string,

    /** Description of the product */
    description: string,
  };

  render() {
    return (
      <div className="card">
        <Card
          hoverable
          style={{ width: this.props.size }}
          cover={
            <img
              className="product-image"
              alt="example"
              src={this.props.imgURL}
            />
          }
        >
          <Meta title={this.props.productName} />
          <p>{`Price: ${this.props.priceCurrencySign}${this.props.price}`}</p>
          <Meta description={this.props.description} />
        </Card>
      </div>
    );
  }
}

export default ProductCard;
