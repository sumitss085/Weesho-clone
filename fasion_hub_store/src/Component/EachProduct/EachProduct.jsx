import { Text } from '@chakra-ui/react'
import React from 'react'
import "./EachProduct.css"
import { RxCross2 } from "react-icons/rx";

const EachProduct = () => {
  return (
    <>
    <div className='cart_box'>
        
          <div className='Productimg_div'>
            <img src="https://images.meesho.com/images/products/59898352/ivkbk_512.jpg" alt="pic" />
          </div>

          <div className='detail'>
            
                <Text className='title'>Multicolor Printed Flats For Women - Pack of </Text>
                
                <div className='qtyBox'>
                  <Text className='size'>Size: Free Size</Text>
                  <Text className='size'>Qty: 1</Text>
                </div>
            
              <Text className='discount'>₹450  <del>₹462</del>    3% Off  </Text>

              <div className='romovebtn'>
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