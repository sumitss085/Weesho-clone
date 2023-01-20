import React from 'react'
import EachProduct from './EachProduct/EachProduct'
import "./CartList.css"
import { Button, Divider, Text } from '@chakra-ui/react'

const CartList = () => {
  return (
    <div className='cartlist_div'>
        <div className='cartlist_Left_div'>

        <EachProduct/>
        </div>
        <div className='cartlist_Right_div'>
          
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
                <Text mt="10px"> Yay! Your total discount is ₹12</Text>
                
            </div>
                <p className='text'>Clicking on ‘Continue’ will not deduct any money</p>
                <Button w="95%" h="50px" colorScheme='pink' variant='solid'>Button</Button>

        </div>
       
    </div>
  )
}

export default CartList