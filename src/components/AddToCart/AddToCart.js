import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Card,Button } from 'antd';
import removeItem from '../../Actions/removeItem';

export default function AddToCart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClick = (item) => {
        console.log(item);
        dispatch(removeItem(item)); 
        window.location.reload();
    }

    return (
        <div>
            Cart
            {console.log(cart)}
            {cart.map((item)=>(
                typeof(item) === "string" ? 
                <Card>
                    {item}
                    <Button type="primary" style={{float: "right"}} onClick={()=>{handleClick(item)}}>Remove item from Cart</Button>
                </Card> 
                : 
                null
            ))}
        </div>
    )
}
