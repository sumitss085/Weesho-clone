import React from 'react';
import style from "./JewelryCard.module.css"
import { StarIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


const JewelryCard = ({ id, image, title, price, miniPriceTitle, delivery_Type, rating, reviews }) => {

    console.log(id, title, price, miniPriceTitle, delivery_Type, rating, reviews);

    return (
        <>


            <div key={id} className={style.Product_Card_Main_Div}>

                <Link to="/singleProduct">

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
                        <h1>{rating} <span><StarIcon /></span> </h1>
                        <p>{reviews} Reviews</p>
                        <img src="https://images.meesho.com/images/marketing/1614851415969.png" alt="" />
                    </div>

                </Link>

            </div>


        </>
    )
}

export default JewelryCard