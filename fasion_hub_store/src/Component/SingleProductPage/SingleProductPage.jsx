import React, { useEffect, useState } from 'react';
import style from "../SingleProductPage/SingleProductPage.module.css"
import { Button, Text } from '@chakra-ui/react';
import { CgShoppingCart } from "react-icons/cg";
import { ArrowRightIcon, InfoOutlineIcon, StarIcon } from '@chakra-ui/icons'
import { Progress, Stack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleProductPage = () => {

  const  {  id } = useParams();
  const jewelry = useSelector((store)=>store.jewelry_data)
// console.log(jewelry)
  const [ jewelryData , setJewelryData ] = useState({});

  useEffect(()=>{
    let data = jewelry.find((el)=>el.id===Number(id))

    data && setJewelryData(data)

  },[]);

  console.log(jewelryData)

  return (
    <>

      <div className={style.main_container}>

        {/* Product Img Main div */}

        <div>
         

          <div className={style.Product_details_img_section_main_div}>
            <div>
              <img src="https://images.meesho.com/images/products/158122953/ijbpo_512.webp" alt="img-1" className={style.product_details_img_1} />
            </div>
            <div>
              <img src="https://images.meesho.com/images/products/158122953/ijbpo_512.webp" alt="img-2" className={style.product_details_img_2} />
            </div>
          </div>

          <div className={style.buttonSection}>

            <Button leftIcon={<CgShoppingCart size="19px" fontWeight="700" />} colorScheme='black' variant='outline'>
              Add to Cart
            </Button>

            <Button leftIcon={<ArrowRightIcon />} colorScheme='pink' variant='solid'>
              Buy Now
            </Button>


          </div>

          <br />

          <hr />

          <div className={style.ImageTwo_section}>
            <div>
              <img src="https://images.meesho.com/images/products/158122953/ijbpo_512.webp" alt="" />
            </div>
            <div>
              <img src="https://images.meesho.com/images/products/158122953/ijbpo_512.webp" alt="" />
            </div>
          </div>

        </div>

        <div>

          <div className={style.secoundContainer_firstDiv}>



            <h1 className={style.secoundContainer_title}>Gold Plated Pearl & Kundan Bahubali Earrings with Hair Chain for Women</h1>

            <div className={style.secoundContainer_PriceMain_div}>

              <div>
                <h1 className={style.secoundContainer_PriceTag}>₹ 500 </h1>
              </div>

              <div>
                <InfoOutlineIcon />
              </div>

            </div>


            <div className={style.secoundContainer_Rating_and_views_section}>
              <h2 className={style.secoundContainer_Rating_and_views_section_h2_tag}> 3.8 <span><StarIcon /></span> </h2>
              <p className={style.secoundContainer_Rating_and_views_section_P_tag}>188 Ratings, 30 Views</p>
            </div>
            <p className={style.secoundContainer_Rating_and_views_section_Free_delivery}> Free Delivery</p>




          </div>



          <div className={style.secoundContainer_Secound_Div}>
            <h1 className={style.secoundContainer_Secound_h1_tag}>Select Size</h1>

            <div className={style.secoundContainer_Secound_Button_div}>
              <Button className={style.secoundContainer_Secound_Button_Free_Size} colorScheme='pink' width="30%" marginLeft="-24rem" borderRadius="15px" padding="5px" variant='outline'>
                Free Size
              </Button>
            </div>
          </div>


          <div className={style.secoundContainer_Third_Div}>
            <h1 className={style.secoundContainer_Third_Div_h1_tag}>Product Details</h1>

            <p className={style.secoundContainer_Product_details_third_div_section}>Name : Gold Plated Pearl & Kundan Bahubali Earrings with Hair</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Price : 500</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Sizing : Adjustable</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Net Quantity (N) : 1</p>
            <p className={style.secoundContainer_Product_details_third_div_section}>Country of Origin : India</p>
            <p className={style.secoundContainer_Product_details_third_div_section} style={{ borderBottom: "3px dotted gray", width: "25%", cursor: "pointer" }}>More Information</p>



          </div>


          <div className={style.secoundContainer_Four_Div}>
            <h1 className={style.secoundContainer_Four_Div_h1_tag}>Product Ratings & Reviews</h1>

            <div className={style.RatingAnd_Progress_section}>
              <div>
                <p className={style.secoundContainer_Four_Rating}>4.0 <span><StarIcon marginTop="-10px" /></span></p>
                <p className={style.secoundContainer_Four_Review}>893 Rating,</p>
                <p className={style.secoundContainer_Four_Review}>144 Review </p>


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


//delivery_Type,image,miniPriceTitle,price,rating,reviews,title


