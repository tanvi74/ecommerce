import React from "react";
import { Card, Button } from "antd";
import { string, number } from "prop-types";
import defaultConfigs from "./defaultConfigs";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import cart from '../../Actions/cart';
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
          style={{ width: this.props.size, alignItems: "center" }}
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
          <Button type="primary" style={{marginTop: 20}} onClick={()=>{this.props.cart(this.props.id); alert("Product Added Successfully")}}> Add to Cart</Button>
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      cart: cart
  },dispatch)
}

export default connect(null,mapDispatchToProps)(ProductCard);
