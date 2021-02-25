import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col,Spin, Button,Input } from 'antd';
// import ProductImage from './ProductImage';
// import ProductInfo from './ProductInfo';
import cart from '../../Actions/cart';
import { useDispatch } from 'react-redux';

const { Search } = Input;

function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId;

     const [Product, setProduct] = useState({});
     const [avail, setAvail] = useState("init")

    const getProducts = async () => {
        const url = `${window.apihost}/get_all_products`;
    
        var data = {};
        
    
        var resp = await axios.post(url, data);
        console.log(resp.data.data);
        
        var arr = resp.data.data.filter(item=>item._id===productId);
        setProduct(arr[0]);
      };


    useEffect(() => {
        getProducts();
      },[]);


    const handleCheck = async(pincode) => {
        console.log(pincode);
        const url = `${window.apihost}/get_products_via_pincode`;
        const data = {
            pincode
        }
        var resp = await axios.post(url, data);
        console.log(resp.data.data);
        var arr = resp.data.data.filter(item=>item._id===productId);
        if(arr.length)
            setAvail("true")
        else
            setAvail("false")
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            {console.log(productId, Product)}
            {Object.keys(Product).length===0 ? <div className="example"> <Spin size="large"/> </div> :  
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{Product.name}</h1>
                    <Button type="primary" style={{marginTop: 20}} onClick={()=>{dispatch(cart(productId)); alert("Product Added Successfully")}}> Add to Cart</Button>
                    <Search placeholder="Check Availability" onSearch={(e)=>{handleCheck(e)}} enterButton />
                    {avail==="true" ? <h2>Available</h2> : avail==="false" ?<h2>Not Available</h2>: null}
                </div>
            
            }
        </div>
    )
}

export default DetailProductPage

