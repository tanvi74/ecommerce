import React from "react";
import ProductBundle from "./../ProductBundle/ProductBundle";

import "./style.css";

class Home extends React.Component {
  state = {};

  render() {
    console.log(this.props.items);
    return (
      <>
        <div className="home">
          <h1>Welcome To HyperLocal</h1>
          <ProductBundle items={this.props.items} />
        </div>
      </>
    );
  }
}

export default Home;
