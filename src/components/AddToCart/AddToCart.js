import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Card,Button,Input } from 'antd';
import axios from 'axios';
import removeItem from '../../Actions/removeItem';

const { Search } = Input;

export default function AddToCart() {
    const cart = useSelector(state => state.cart);
    const [productList, setProductList] = useState([]);
    const [avail, setAvail] = useState([])
    const dispatch = useDispatch();

    const getProducts = async () => {
        const url = `${window.apihost}/get_products_with_ids`;
        const data={
            product_ids : cart
        }
    
        var resp = await axios.post(url, data);
        console.log(resp.data);
        
        setProductList(resp.data.data);
      };
    
      useEffect(() => {
        getProducts();
      }, []);


    const handleClick = (item) => {
        console.log(item);
        dispatch(removeItem(item)); 
        window.location.reload();
    }

    const handleCheck = async(pincode) => {
        console.log(pincode);
        if(pincode===""){
            setAvail([]);
            return;
        }
        const url = `${window.apihost}/get_products_via_pincode`;
        const data = {
            pincode
        }
        var resp = await axios.post(url, data);
        console.log(resp.data.data);
        
        let arr1 = []
        if(resp.data.data!==null){
        for(var i=0;i<cart.length;i++){
            const productId = cart[i];
            const arr = resp.data.data.filter(item=>item._id===productId);
            
            if(arr.length){
                var data2 = {
                    id : productId,
                    status: true
                }
                arr1.push(data2)
            }else{
                var data1 = {
                    id : productId,
                    status: false
                }
                arr1.push(data1)
            }
        }

        setAvail(arr1);
       }else
       {
        for(var i=0;i<cart.length;i++){
            const productId = cart[i];
           
                var data1 = {
                    id : productId,
                    status: false
                }
                arr1.push(data1)
        }

        setAvail(arr1);
       }
    
    }
    var key = 0;
    return (
        <div>
            <h1>Cart</h1>
            {console.log(productList)}
            <h2>Check Availability of All Products in Cart</h2>
            <Search placeholder="Enter Pincode" onSearch={(e)=>{handleCheck(e)}} enterButton />
            { cart.map((item)=>(
                typeof(item) === "string" ? 
                <Card>
                    {item}
                    {avail.length ? 
                        
                        avail.filter(product=>product.id===item)[0].status ? "Available" : "Not Available"
                         
                      : null}
                    <Button type="primary" style={{float: "right"}} onClick={()=>{handleClick(item)}}>Remove item from Cart</Button>
                </Card> 
                : 
                null
            )) 

        
        }
        </div>
    )
}
