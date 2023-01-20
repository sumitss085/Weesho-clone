import React from 'react'

import "./CartList.css"
import { Button, Divider, Text } from '@chakra-ui/react'
import { TbDiscount2 } from "react-icons/tb";
import Navbar2 from '../../Component/Navbar2/Navbar2';
import EachProduct from '../../Component/EachProduct/EachProduct';
import { Link } from 'react-router-dom';

const CartList = () => {
  return (
    <>
    <Navbar2/>
  
    <div className='cartlist_div'>
      
      
        <div className='cartlist_Left_div'>
          <div className="CartHeading">
            <Text className='cart'>Cart</Text>
            <Text className='cart_qty'>1 Item</Text>

          </div>
        <EachProduct/>
        </div>

        <div className='cartlist_Right_div'>
            <div className='Price_Details_Heading_div'>
              <Text className='Price_Details_Heading'>Price Details</Text>
            </div>
            <div  className='ProductPrice'>
              <div>Total Product Price</div>
              <div>₹462</div>
            </div>

           <div className='Totaldiscount' >
              <div><p>Total Discounts</p></div>
              <div><p>- ₹12</p></div>
            </div>
            <div><Divider orientation='horizontal' size="3px"/></div>

            <div  className='total'>
              <div>Order Total</div>
              <div>₹450</div>
            </div>

            <div className='discountBox'>
              <TbDiscount2 />
                <Text > Yay! Your total discount is ₹12</Text>
                
            </div>
              <div>
              <p className='text'>Clicking on ‘Continue’ will not deduct any money</p>
              <Link to="/contactdetail">
                <button className='continuebtn'>Continue</button>
              </Link>
              </div>

              <div className='cartimgbox'>
                  <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="pic" />
          </div>

        </div>
         
       
    </div>
    </>
  )
}

export default CartList