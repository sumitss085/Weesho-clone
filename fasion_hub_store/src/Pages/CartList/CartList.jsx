import React, { useEffect, useState } from 'react'

import "./CartList.css"
import {  Divider, Text, useToast } from '@chakra-ui/react'
import { TbDiscount2 } from "react-icons/tb";
import Navbar2 from '../../Component/Navbar2/Navbar2';
import EachProduct from '../../Component/EachProduct/EachProduct';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import EmptyCart from '../../Component/EmptyCart/Empty';

function FindTotal (Cartlist){
  let totalAmount=0
  let totaldiscountAmount=0

  for(let i=0;i<Cartlist.length;i++){
    totalAmount += Number(Cartlist[i].original_price)
    totaldiscountAmount += Number(Cartlist[i].discounted_price)
  }
   return [totalAmount,totaldiscountAmount]
   
}

const CartList = () => {

  const {CartData} =useSelector((store)=>store.CartReducer)
  const navigate = useNavigate()
  const [Cartlist,SetCartlist]=useState([])
  const [TotalPrice,setTotalPrice]=useState(0)
  const [TotalDiscountPrice,setTotalDiscountPrice]=useState(0)
  const [Totaldiscount,setTotaldiscount]=useState(0)
  const toast = useToast()

  const [Render,SetRender]=useState(false)
 
  const handleRender =()=>{
    SetRender((prev)=>!prev)
  }


  
   useEffect(()=>{

    // axios.get(`https://weesho-data.vercel.app/MyCartList`)
    // .then((res)=>console.log(res.data))
    // .catch((err)=>console.log(err))

    const Products = JSON.parse(localStorage.getItem("Weesho_Cart_Item")) || [];
    
    SetCartlist(Products);

    const originalPrice = Products.reduce((total, item) => total + item.original_price
      * item.quantity,
      0
    ); 
    
    setTotalPrice(originalPrice)


    const discountPrice = Products.reduce( (total, item) => total + item.discounted_price * item.quantity,
      0
    );
    setTotalDiscountPrice(discountPrice)

    const discountPercentage =(((originalPrice - discountPrice) / originalPrice) * 100 ).toFixed(2)

      setTotaldiscount(discountPercentage)

   },[Render])

 

   const HandleContinue =()=>{
    navigate("/checkout")
   }

    


 
  


  return (
    <>
  
    <Navbar2/>
    {
      Cartlist.length===0 ? <EmptyCart/> : <div className='cartlist_div'>
      
      
      <div className='cartlist_Left_div'>
        <div className="CartHeading">
          <Text className='cart'>Cart</Text>
          <Text className='cart_qty'>{Cartlist.length } Item</Text>

        </div>
        {
          Cartlist.length>0 &&  Cartlist.map((item)=>(
            <EachProduct key={item.id} item={item} handleRender={handleRender} />
          ))
        }
      
      </div>

      <div className='cartlist_Right_div'>
          <div className='Price_Details_Heading_div'>
            <Text className='Price_Details_Heading'>Price Details</Text>
          </div>
          <div  className='ProductPrice'>
            <div>Total Product Price</div>
            <div>₹{TotalPrice}</div>
          </div>

         <div className='Totaldiscount' >
            <div><p>Total Discounts</p></div>
            <div><p>- {Totaldiscount}%</p></div>
          </div>
          <div><Divider orientation='horizontal' size="3px"/></div>

          <div  className='total'>
            <div>Order Total</div>
            <div>₹{TotalDiscountPrice}</div>
          </div>

          <div className='discountBox'>
            <TbDiscount2 />
              <Text > Yay! Your total discount is ₹{0}</Text>
              
          </div>
            <div>
            <p className='text'>Clicking on ‘Continue’ will not deduct any money</p>
          
              <button  className='continuebtn' onClick={HandleContinue}>Continue</button>
           
            </div>

            <div className='cartimgbox'>
                <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="pic" />
        </div>

      </div>
       
     
  </div>
    }
  
   
    </>
  )
}

export default CartList