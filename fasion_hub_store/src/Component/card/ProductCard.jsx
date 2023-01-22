import React, { useEffect } from 'react';
import style from "./ProductCard.module.css"
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ id, image, title, price, miniPriceTitle, delivery_Type, rating, reviews }) => {

     
//   console.log(image)
    
    // const ButtonWrapper = styled.h1`
    
    // display: inline-flex;
    // gap: 7px;
    // -webkit-box-pack: center;
    // justify-content: center;
    // -webkit-box-align: center;
    // align-items: center;
    // border-radius: 16px;
    // padding: 5px 10px;
    // font-size: 18px;
    // font-weight: 600;
    // background:rgb(35, 88, 0); 
    // color: white;

    
    // `



        let query=(window.location.href)
        let arr=query.split("/")
        let query2=arr[4] || "Home" //string
        let Urlquery=""
           for(let i=0;i<query2.length;i++){
            if(query2[i]==="%" || query2[i]==="0" || query2[i]==="1"|| query2[i]==="2"|| query2[i]==="3"|| query2[i]==="4"|| query2[i]==="5"|| query2[i]==="6"|| query2[i]==="7"|| query2[i]==="8"|| query2[i]==="9"){
                continue
            }
            Urlquery+=query2[i]
           }

           useEffect(()=>{
              let urlQ=window.location.href
            
           },[])
           
 

    return (
        <>


            <div key={id} className={style.Product_Card_Main_Div}>

                <Link to={`/${Urlquery}/SingleProduct/${id}`}>

                    <div className={style.Product_Card_Main_Div_Img_div}>
                        <img src={image[0]} alt={title} />
                    </div>

                    <h1 className={style.Product_Card_Main_Div_Title_tag}>{title}</h1>

                    <div className={style.Product_Card_Main_Div_Price_and_MiniTitle}>
                        <h1> ₹{price}</h1>
                        <p>{miniPriceTitle}</p>
                    </div>

                    <div className={style.Product_Card_Main_Div_Delivery_type_div}>
                        <p>{delivery_Type}</p>
                    </div>

                    <div  className={style.Product_Card_Main_Div_Rating_and_review_div}>
                        <h1>{rating} <span><StarIcon /></span> </h1>
                        <p>{reviews} Reviews</p>
                        <img src="https://images.meesho.com/images/marketing/1614851415969.png" alt="" />
                    </div>

                </Link>

            </div>


        </>
    )
   
    
}


export default ProductCard


