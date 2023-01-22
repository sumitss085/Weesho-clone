import React, { useEffect, useState } from 'react'

import "./CartList.css"
import { Button, Divider, Text } from '@chakra-ui/react'
import { TbDiscount2 } from "react-icons/tb";
import Navbar2 from '../../Component/Navbar2/Navbar2';
import EachProduct from '../../Component/EachProduct/EachProduct';
import { Link } from 'react-router-dom';
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

  const [Cartlist,SetCartlist]=useState([])

  const [Render,SetRender]=useState(false)

  const handleRender =()=>{
    SetRender((prev)=>!prev)
  }


  
   useEffect(()=>{

    axios.get(`http://localhost:8080/MyCartList`)
    .then((res)=>SetCartlist(res.data))
    .catch((err)=>console.log(err))


    

     FindTotal(Cartlist)

   },[Render])


   const HandleContinue =()=>{
    
   }
  
   let [CartPrice,CartDiscountPrice]=FindTotal(Cartlist)

   const discount=(((CartPrice-CartDiscountPrice)/CartPrice)*100).toFixed(0)
   const disPrice=CartPrice-CartDiscountPrice
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
            <EachProduct key={item.id} item={item} handleRender={handleRender}/>
          ))
        }
      
      </div>

      <div className='cartlist_Right_div'>
          <div className='Price_Details_Heading_div'>
            <Text className='Price_Details_Heading'>Price Details</Text>
          </div>
          <div  className='ProductPrice'>
            <div>Total Product Price</div>
            <div>₹{CartPrice}</div>
          </div>

         <div className='Totaldiscount' >
            <div><p>Total Discounts</p></div>
            <div><p>- ₹{discount?discount:0}</p></div>
          </div>
          <div><Divider orientation='horizontal' size="3px"/></div>

          <div  className='total'>
            <div>Order Total</div>
            <div>₹{CartDiscountPrice}</div>
          </div>

          <div className='discountBox'>
            <TbDiscount2 />
              <Text > Yay! Your total discount is ₹{disPrice}</Text>
              
          </div>
            <div>
            <p className='text'>Clicking on ‘Continue’ will not deduct any money</p>
            <Link to="/contactdetail">
              <button className='continuebtn' onClick={HandleContinue}>Continue</button>
            </Link>
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