import { Text } from '@chakra-ui/react'
import React ,{useState,useEffect}from 'react'
import "./EachProduct.css"
import { RxCross2 } from "react-icons/rx";
import axios from 'axios';
import QuantityButton from '../QuantityButton/QuantityButton';



const EachProduct = ({ item, handleRender }) => {
    
  

  const { title, rating, details, images, original_price, sizes, discounted_price, category, id } = item

  const [EachItemQty, SetEachItemQty] = useState(1)


 

  const handleqty = (val) => {
    SetEachItemQty(val)

    const WeeshoUpdateCart = JSON.parse(localStorage.getItem("Weesho_Cart_Item")) || []

    const UpdateQuantity_Products = WeeshoUpdateCart.map((ele)=>{
      return ele.id===item.id ? {...ele,quantity:val}:ele
    })

    localStorage.setItem("Weesho_Cart_Item", JSON.stringify(UpdateQuantity_Products));
    handleRender()
  }
 

  const discount = (((Number(original_price) - Number(discounted_price)) / Number(original_price)) * 100).toFixed(2)

  const HandleRemove = (itemId) => {
    //  axios.delete(`http://localhost:8080/MyCartList/${id}`)
    //  .then((res)=>console.log(res.data))
    //  .catch((err)=>console.log(err))

    const WeeshoRemoveCart = JSON.parse(localStorage.getItem("Weesho_Cart_Item")) || []

    const FilterProducts = WeeshoRemoveCart.filter(product=> product.id !== itemId)

    localStorage.setItem("Weesho_Cart_Item", JSON.stringify(FilterProducts));

     handleRender()
  }


  return (
    <>
      <div className='cart_box'>

        <div className='Productimg_div'>
          <img src={images} alt="pic" />
        </div>

        <div className='detail'>

          <Text className='title'>{title}</Text>

          <div className='qtyBox'>
            <Text className='size'>Size: {sizes}</Text>
            <Text className='size'>Qty: </Text>
            <div className='qtyBtn'>
              <QuantityButton EachItemQty={EachItemQty} handleqty={handleqty} />
            </div>

          </div>

          <Text className='discount'>₹{discounted_price}  <del className='originalprice'>₹{original_price}</del>  <span className='discountpercentage'> {discount}% Off </span>   </Text>

          <div className='romovebtn' onClick={() => HandleRemove(id)}>
            <RxCross2 />
            <Text>REMOVE</Text>

          </div>
        </div>

        {/* <div className='edit'>
            <Text className="editbtn">EDIT</Text>
          </div> */}

      </div>

      <div className='SupplierBox'>
        <div><Text>Supplier : VITARA HEALTHCARE</Text></div>
        <div><Text>Free Delivery</Text></div>

      </div>
    </>
  )
}

export default EachProduct