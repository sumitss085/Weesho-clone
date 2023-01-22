import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


import "./EmptyCart.css"

const EmptyCart = () => {
    const navigate =useNavigate()
  return (
    <div className='emptycard_box'>
        
           <div className='emptycart'>
              <img src="https://images.meesho.com/images/pow/empty-cart.png" alt="" />
              <Text mb="5%" fontSize="15px" fontWeight="600">Your cart is empty</Text>
              <Button w={{sm:"170px",md:"200px"}} colorScheme='pink' variant='outline' onClick={()=>navigate("/ ")}>
    View Product
              </Button>
        </div>
       
       
        

    </div>
  )
}

export default EmptyCart