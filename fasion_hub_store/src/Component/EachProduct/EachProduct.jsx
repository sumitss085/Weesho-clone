import { Text } from '@chakra-ui/react'
import React from 'react'
import "./EachProduct.css"
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import QuantityButton from '../QuantityButton/QuantityButton';
import { useState } from 'react';
import { useEffect } from 'react';

const EachProduct = ({item,handleRender,getProductQty}) => {
   
  const {title, rating ,details,images,original_price,sizes,discounted_price,category,id}=item
   
  const [EachItemQty,SetEachItemQty]=useState(1)

  // console.log(EachItemQty)

  const handleqty =(val)=>{
    SetEachItemQty(val)
    
  }
  useEffect(()=>{
    let productCartPrice=original_price*EachItemQty
    let productCartDiscountPrice=discounted_price*EachItemQty

    console.log(productCartPrice)

    getProductQty(productCartPrice,productCartDiscountPrice)

  },[EachItemQty])
  

   
  const discount=(((Number(original_price)-Number(discounted_price))/Number(original_price))*100).toFixed(2)

  const HandleRemove =(id)=>{
     axios.delete(`http://localhost:8080/MyCartList/${id}`)
     .then((res)=>console.log(res.data))
     .catch((err)=>console.log(err))

     handleRender()
  }
  return (
    <>
    <div className='cart_box'>
        
          <div className='Productimg_div'>
            <img src={images[0]} alt="pic" />
          </div>

          <div className='detail'>
            
                <Text className='title'>{title}</Text>
                
                <div className='qtyBox'>
                  <Text className='size'>Size: {sizes}</Text>
                  <Text className='size'>Qty: </Text>
                  <div className='qtyBtn'>
                    <QuantityButton EachItemQty={EachItemQty} handleqty={handleqty}/>
                  </div>
                  
                </div>
            
              <Text className='discount'>₹{discounted_price}  <del className='originalprice'>₹{original_price}</del>  <span className='discountpercentage'> {discount}% Off </span>   </Text>

              <div className='romovebtn' onClick={()=>HandleRemove(id)}>
                <RxCross2/>
                <Text>REMOVE</Text>

              </div>
          </div>
     
          <div className='edit'>
            <Text className="editbtn">EDIT</Text>
          </div>

    </div>

    <div className='SupplierBox'>
      <div><Text>Supplier : VITARA HEALTHCARE</Text></div>
      <div><Text>Free Delivery</Text></div>

    </div>
    </>
  )
}

export default EachProduct