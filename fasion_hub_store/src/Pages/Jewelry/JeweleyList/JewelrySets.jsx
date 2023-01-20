import React from 'react';
import SideBar from '../../../../Components/SideBar/SideBar';
import style from "../JeweleyList/JewelrySets.module.css"
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import JewelryCard from '../JewelryCad/JewelryCard';

const getData = async ()=>{
    let res = await axios.get(`http://localhost:8080/Jewelry`)
    return res.data.Jewelry_Sets
}

const JewelrySets = () => {
    
    const [ data , setData ] = useState([]);
    

    useEffect(()=>{

        getData().then((res)=>setData(res)).catch((err)=>console.log(err))
      
    },[]);


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
                        <SideBar/>
                    </div>


                    {/* id,image,title,price,miniPriceTitle,delivery_Type,rating,reviews */}

                    {/* Product Card  */}
                    <div>
                        {
                            data && data.length>0 && data.map((el)=>(
                                <JewelryCard key={el.id} 
                                
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