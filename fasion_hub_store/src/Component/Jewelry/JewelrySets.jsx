import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import style from "../Jewelry/JewelrySets.module.css"
import { useEffect } from 'react';
import ProductCard from '../../Components/card/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getJewelry } from '../../Redux/Jewelry/actions';
import {useLocation, useSearchParams} from "react-router-dom"



const JewelrySets = () => {

    const jewelry = useSelector((store)=>store.jewelry_data)
    const dispatch = useDispatch();
    const location= useLocation()
    const [searchParams] = useSearchParams()
   


    useEffect(() => {

        const order =searchParams.get("order")

        let paramObj={
            params:{
                _sort:order && "price",
                _order:order, 
            }
        }


        dispatch(getJewelry(paramObj));
    }, [location.search]);


    return (
        <>
            <div className={style.main_jewelry_div}>

                <div className={style.JewelrySets_heading_tag}>
                    <h1 >Jewelry Sets</h1>
                    <p className={style.JewelrySets_P_tag}>Showing 1-20 out of 10000 products</p>
                </div>

                <div className={style.sideBar_and_card_main_div}>
                    {/* Side bar */}
                    <div>
                        <SideBar />
                    </div>


                    {/* id,image,title,price,miniPriceTitle,delivery_Type,rating,reviews */}

                    {/* Product Card  */}
                    <div>
                        {
                            jewelry && jewelry.length > 0 && jewelry.map((el) => (
                                <ProductCard
                                    key={el.id}

                                    id={el.id}
                                    image={el.image}
                                    title={el.title}
                                    price={el.price}
                                    miniPriceTitle={el.miniPriceTitle}
                                    delivery_Type={el.delivery_Type}
                                    rating={el.rating}
                                    reviews={el.reviews}


                                />
                            ))
                        }
                    </div>

                </div>



            </div>
        </>
    )
}

export default JewelrySets