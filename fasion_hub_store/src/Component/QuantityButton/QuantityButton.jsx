import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import "./QuantityButton.css"

import { useState } from 'react';
import { useEffect } from 'react';

const QuantityButton = ({EachItemQty,handleqty}) => {
  const [Quantity,SetQuantity]=useState(EachItemQty)
 

  const HandleQuantity =(val)=>{
   
    SetQuantity((prev)=>prev+val)
   
  }

  useEffect(()=>{
    handleqty(Quantity)
  },[Quantity])
  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 mt-4 px-3 rounded">
            <div className="d-flex flex-row align-self-center product_data"  id="qty_select">
                 <input type="hidden" value=" 1 " className="prod_id"/>

                 <div className="input-group text-center" id="qty_selector">
                  
                        <Box     className="decrement-btn">
                        <button className='minus' disabled={Quantity===1  } onClick={()=>HandleQuantity(-1)} >-</button>
                            </Box>
                        
                        <input type="text" readonly="readonly" id="qty_display" className="qty-input text-center" value={Quantity}/>
                        
                        <Box className="increment-btn">
                        <button  onClick={()=>HandleQuantity(1)}>+</button>
                        </Box>
                </div>
            </div>
     </div>
  )
}

export default QuantityButton