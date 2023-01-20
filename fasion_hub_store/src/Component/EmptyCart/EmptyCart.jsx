import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import CartList from '../CartList/CartList'
import Navbar2 from '../Navbar2/Navbar2'
import "./EmptyCart.css"

const EmptyCart = () => {
  return (
    <div className='emptycard_box'>
        <Navbar2/>
           {/* <div className='emptycart'>
              <img src="https://images.meesho.com/images/pow/empty-cart.png" alt="" />
              <Text mb="5%" fontSize="15px" fontWeight="600">Your cart is empty</Text>
              <Button w={{sm:"170px",md:"200px"}} colorScheme='pink' variant='outline'>
    View Product
              </Button>
        </div> */}
        <CartList/>
       
        

    </div>
  )
}

export default EmptyCart