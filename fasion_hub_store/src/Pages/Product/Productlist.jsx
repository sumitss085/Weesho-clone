import React from 'react';

import style from "../Product/Productlist.module.css"
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {useLocation, useSearchParams} from "react-router-dom"
import { getProductData } from '../../Redux/ProductReducer/Product.action';
import SideBar from '../../Component/SideBar/SideBar';
import ProductCard from '../../Component/card/ProductCard';
import LargeWithAppLinksAndSocial from '../../Component/Footer/Footer';



const Productlist = () => {

    const ProductList = useSelector(store => store.ProductReducer);
    const dispatch = useDispatch();
    const {productData, isLoading, isError } = ProductList;
    
   
 

    useEffect(() => {

        
        let query=(window.location.href)  //get url from window location and store it in  query variable

        let arr=query.split("/")  //split url in array format which is seperated by "/" 
            
        let query2=arr[4] || "Home" // at index 4 of array we have query variable  and we created database according to that query variable (query2) ,but this string also include number and symbols  in query  variable (query2)  , to exract that perticular query variable we run for loop here and after extracting  we send that query to dispatch 
        
        let urlquery=""

           for(let i=0;i<query2.length;i++){
            if( query2[i]==="0" || query2[i]==="1"|| query2[i]==="2"|| query2[i]==="3"|| query2[i]==="4"|| query2[i]==="5"|| query2[i]==="6"|| query2[i]==="7"|| query2[i]==="8"|| query2[i]==="9"){
                continue
            }

            if(query2[i]==="%" || query2[i]==="&"){
                continue
            }
           
            urlquery+=query2[i]
           }
           
           
      

   
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

            <div>
          <LargeWithAppLinksAndSocial   />
        </div>
        </>
    )
}

export default Productlist