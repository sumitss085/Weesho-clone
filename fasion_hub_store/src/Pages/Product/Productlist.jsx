import React from 'react';

import style from "../Product/Productlist.module.css"
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {useLocation, useSearchParams} from "react-router-dom"
import { getProductData } from '../../Redux/ProductReducer/Product.action';
import SideBar from '../../Component/SideBar/SideBar';
import ProductCard from '../../Component/card/ProductCard';



const Productlist = () => {

    const ProductList = useSelector(store => store.ProductReducer);
    const dispatch = useDispatch();
    const {productData, isLoading, isError } = ProductList;
    
   
 

    useEffect(() => {

        
        let query=(window.location.href)

        let arr=query.split("/")
            
           let query2=arr[4] || "Home" //string
             let urlquery=""
           for(let i=0;i<query2.length;i++){
            if(query2[i]==="%" || query2[i]==="0" || query2[i]==="1"|| query2[i]==="2"|| query2[i]==="3"|| query2[i]==="4"|| query2[i]==="5"|| query2[i]==="6"|| query2[i]==="7"|| query2[i]==="8"|| query2[i]==="9"){
                continue
            }
            urlquery+=query2[i]
           }
           
      

//    console.log(urlquery);
          dispatch(getProductData(urlquery))
          
         
         
    }, []);


            
    return (
        <>
            <div className={style.main_jewelry_div}>

                <div className={style.JewelrySets_heading_tag}>
                    <h1 >{"Product List"}</h1>
                    <p className={style.JewelrySets_P_tag}>Showing 1-20 out of 10000 products</p>
                </div>

                <div className={style.sideBar_and_card_main_div}>
                    {/* Side bar */}
                    <div>
                        <SideBar/>
                    </div>


                    
                    <div>
                        {
                            productData.length > 0 && productData.map((el) => (
                                <ProductCard
                                    key={el.id}

                                    id={el.id}
                                    image={el.images}
                                    title={el.title}
                                    price={el.original_price}
                                    miniPriceTitle={"Onword"}
                                    delivery_Type={"Free Delivery"}
                                    rating={el.rating}
                                    reviews={"Free Review"}
                                    


                                />
                            ))
                        }
                    </div>

                </div>



            </div>
        </>
    )
}

export default Productlist