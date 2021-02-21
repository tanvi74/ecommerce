import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginPage from "./components/LogInForm/LogInForm";
import SignupPage from "./components/SignUpForm/SignUpForm";
import CategorySelect from "./components/CategorySelect";
class App extends React.Component {
  state = {
    searchedItems: [],
    homeItems: [],
  };
  onSearchSubmit = async (searchTerm) => {
    console.log("searched");
    console.log(searchTerm);
    // const response = await axios.post(
    //   "https://humaps-12.herokuapp.com/allproducts",
    //   { pincode: searchTerm }
    // );
    // console.log(response);
    // this.setState({ searchedItems: response.data.data });
  };

  componentDidMount() {
    console.log("from gethomeitems");
    axios
      .get("https://humaps-12.herokuapp.com/allproducts")
      .then((response) => {
        console.log(response.data.data);
        const productData = response.data.data.map((item) => {
          return {
            productName: item.name,
            price: item.MRP,
            priceCurrencySign: "₹",
          };
        });
        console.log("Productdata", productData);
        this.setState({ homeItems: productData });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header
            onSearchSubmit={(searchTerm) => this.onSearchSubmit(searchTerm)}
            items={this.state.homeItems}
          />
          <Switch>
            <Route path="/" exact>
              <Home items={this.state.homeItems} />
            </Route>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/CategorySelect" component={CategorySelect} />
            <Route path="/searchresults">
              <h1>Search Results</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
