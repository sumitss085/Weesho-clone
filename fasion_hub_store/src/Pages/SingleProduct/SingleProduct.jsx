import React, { useEffect, useState } from 'react';
import style from "../SingleProduct/SingleProduct.module.css"
import { Button, Text, useToast } from '@chakra-ui/react';
import { CgShoppingCart } from "react-icons/cg";
import { ArrowRightIcon, InfoOutlineIcon, StarIcon } from '@chakra-ui/icons'
import { Progress, Stack } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AddProducttoCart, AddtocartRequest, AddtocartSuccess } from '../../Redux/CartReducer/Cart.action';
import Loadingindicator from '../../Component/Loding_Indicator/Loadingindicator';


const init = {

  category: "",
  details: '',
  original_price: "",
  discounted_price: "",
  rating: "",
  sizes: "",
  title: "",
  images: "",
}

const SingleProductPage = () => {

  const [SingleProduct, SetSingleproduct] = useState(init)

  const { category, details, original_price, discounted_price, rating, sizes, title, images } = SingleProduct
  const toast = useToast()
  let query = window.location.href;
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector((store) => store.CartReducer)

  let arr = query.split("/");

  let query2 = arr[3] //string
  let Urlquery = ""
  for (let i = 0; i < query2.length; i++) {
    if (query2[i] === "%" || query2[i] === "0" || query2[i] === "1" || query2[i] === "2" || query2[i] === "3" || query2[i] === "4" || query2[i] === "5" || query2[i] === "6" ||
      query2[i] === "7" || query2[i] === "8" || query2[i] === "9") {
      continue
    }
    Urlquery += query2[i]
  }





  useEffect(() => {

    axios.get(`https://weesho-data.vercel.app/${Urlquery}/${id}`)
      .then((res) => SetSingleproduct(res.data))
      .catch((err) => console.log(err))
  }, [])

  


  const HandleAddtocart = (item) => {

    let cartItems = [];
    if (localStorage.getItem('Weesho_Cart_Item')) {
      cartItems = JSON.parse(localStorage.getItem('Weesho_Cart_Item'));
    }
    const selectedProduct = {
    category: item.category,
    delivery_Type: item.delivery_Type,
    discounted_price: item.discounted_price,
    original_price: item.original_price,
    id: item.id,
    images: item.images[0],
    miniPriceTitle: item.miniPriceTitle,
    rating: item.rating,
    reviews: item.reviews,
    sizes: item.sizes[0],
    title: item.title,
    quantity:1
  
    };
    const isIdExists = cartItems.some(obj => obj.id === item.id);

    if(isIdExists){
      toast({
        title: 'Already Added To Cart.',
        position: 'top-center',
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
      return
    }

    cartItems.push(selectedProduct);
    localStorage.setItem('Weesho_Cart_Item', JSON.stringify(cartItems))
    toast({
      title: 'Added To Cart.',
      position: 'top-center',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })

    dispatch(AddProducttoCart(item))
  }


  if (isLoading) {
    return <Loadingindicator />
  }

  return (
    <>

      <div className={style.main_container}>

        {/* Product Img Main div */}

        <div>


          <div className={style.Product_details_img_section_main_div}>
            <div>
              <img src={images.length ? images[0] : "https://images.meesho.com/images/products/158122953/ijbpo_512.webp"} alt="img-1" className={style.product_details_img_1} />
            </div>
            <div>
              <img src={images.length ? images[0] : "https://images.meesho.com/images/products/158122953/ijbpo_512.webp"} alt="img-2" className={style.product_details_img_2} />
            </div>
          </div>

          <div className={style.buttonSection}>

            <Button leftIcon={<CgShoppingCart size="19px" fontWeight="700" />} colorScheme='black' variant='outline' onClick={() => HandleAddtocart(SingleProduct)}>
              Add to Cart
            </Button>

            <Button onClick={() => navigate("/Cart")} leftIcon={<ArrowRightIcon />} colorScheme='pink' variant='solid' >
              Buy Now
            </Button>


          </div>

          <br />

          <hr />

          <div className={style.ImageTwo_section}>
            <div>
              <img src={images.length ? images[0] : "https://images.meesho.com/images/products/158122953/ijbpo_512.webp"} alt="" />
            </div>
            <div>
              <img src={images.length ? images[1] : "https://images.meesho.com/images/products/158122953/ijbpo_512.webp"} alt="" />
            </div>
          </div>

        </div>

        <div>

          <div className={style.secoundContainer_firstDiv}>



            <h1 className={style.secoundContainer_title}>{title ? title : ""}</h1>

            <div className={style.secoundContainer_PriceMain_div}>

              <div>
                <h1 className={style.secoundContainer_PriceTag}>₹ {original_price ? original_price : ""}</h1>
              </div>

              <div>
                <InfoOutlineIcon />
              </div>

            </div>


            <div className={style.secoundContainer_Rating_and_views_section}>
              <h2 className={style.secoundContainer_Rating_and_views_section_h2_tag}> {rating ? rating : ""} <span><StarIcon /></span> </h2>
              <p className={style.secoundContainer_Rating_and_views_section_P_tag}>188 Ratings, 30 Views</p>
            </div>
            <p className={style.secoundContainer_Rating_and_views_section_Free_delivery}> Free Delivery</p>




          </div>



          <div className={style.secoundContainer_Secound_Div}>
            <h1 className={style.secoundContainer_Secound_h1_tag}>Select Size</h1>

            <div className={style.secoundContainer_Secound_Button_div}>
              <Button className={style.secoundContainer_Secound_Button_Free_Size} colorScheme='pink' borderRadius="15px" padding="15px" variant='outline'>
                Free Size
              </Button>
            </div>
          </div>


          <div className={style.secoundContainer_Third_Div}>
            <h1 className={style.secoundContainer_Third_Div_h1_tag}>Product Details</h1>

            <p className={style.secoundContainer_Product_details_third_div_section}>Name :{title ? title : ""} </p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Price :₹ {original_price ? original_price : ""}</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Sizing : Adjustable</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Net Quantity (N) : 1</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Country of Origin : India</p>
            <p className={style.secoundContainer_Product_details_third_div_section} style={{ borderBottom: "3px dotted gray", marginTop: "5px", cursor: "pointer" }}>More Information</p>



          </div>


          <div className={style.secoundContainer_Four_Div}>
            <h1 className={style.secoundContainer_Four_Div_h1_tag}>Product Ratings & Reviews</h1>

            <div className={style.RatingAnd_Progress_section}>
              <div>
                <p className={style.secoundContainer_Four_Rating}>{rating} <span><StarIcon marginTop="-10px" /></span></p>
                <p className={style.secoundContainer_Four_Review}>{(Math.floor(Math.random() * 1000) + 500).toFixed(0)} Rating,</p>
                <p className={style.secoundContainer_Four_Review}>{(Math.floor(Math.random() * 200) + 100).toFixed(0)} Review </p>


              </div>

              <div className={style.progress_section_main}>

                <Stack spacing={5}>

                  <Progress borderRadius="20px" colorScheme='green' size='md' value={91} />
                  <Progress borderRadius="20px" colorScheme='green' size='md' value={80} />
                  <Progress borderRadius="20px" colorScheme='orange' size='md' value={65} />
                  <Progress borderRadius="20px" colorScheme='orange' size='md' value={50} />
                  <Progress borderRadius="20px" colorScheme='red' size='md' value={20} />

                </Stack>


              </div>



            </div>


          </div>






        </div>





      </div>


    </>
  )
}

export default SingleProductPage