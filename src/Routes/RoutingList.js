import React from 'react';
import { Route } from 'react-router-dom';

import Home from "../components/Home/Home";
import Cart from '../components/AddToCart/AddToCart';
import ProductDetail from '../components/ProductDetail/DetailProductPage';
import MyAccount from '../components/MyAccount/MyAccount';
import OrderDetails from '../components/OrderDetails/OrderDetails'

const routes = [
  {
    path: '/',
    component: Home,
    key: '/',
  },
  {
    path: '/cart',
    component: Cart,
    key: '/cart',
  },
  {
    path: '/product/:productId',
    component: ProductDetail,
    key: '/product/:productId'
  },
  {
    path: '/myaccount',
    component: MyAccount,
    key: '/myaccount'
  },
  {
    path: '/orderdetail/:orderId',
    component: OrderDetails,
    key: '/orderdetail/:orderId'
  },
  
];

function RoutingList(props) {
  return routes.map(item => {
    if (item.path.split('/').length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }
    console.log(props.search)
    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}

export default RoutingList;