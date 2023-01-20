import React from 'react';
import style from "./ProductCard.module.css"
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import styled from "styled-components"

const ProductCard = ({ id, image, title, price, miniPriceTitle, delivery_Type, rating, reviews }) => {

    // console.log(id, title, price, miniPriceTitle, delivery_Type, rating, reviews);

    
    const ButtonWrapper = styled.h1`
    
    display: inline-flex;
    gap: 7px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 16px;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 600;
    background:rgb(35, 88, 0); 
    color: white;
    `

    return (
        <>


            <div key={id} className={style.Product_Card_Main_Div}>

                <Link to={`/SingleProduct/${id}`}>

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

                    <div className={style.Product_Card_Main_Div_Rating_and_review_div}>
                        <ButtonWrapper>{rating} <span><StarIcon /></span> </ButtonWrapper>
                        <p>{reviews} Reviews</p>
                        <img src="https://images.meesho.com/images/marketing/1614851415969.png" alt="" />
                    </div>

                </Link>

            </div>


        </>
    )
   
    
}


export default ProductCard


