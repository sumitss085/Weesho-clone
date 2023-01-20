import { Box, SimpleGrid, Skeleton, useQuery } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../Component/ProductCard/ProductCard';
import { getProductData } from '../../Redux/ProductReducer/Product.action';





const ProductList = () => {
    const ProductList = useSelector(store => store.ProductReducer);

    const {productData, isLoading, isError } = ProductList;
    const dispatch = useDispatch();
    
    useEffect(() => {
            let query=(window.location.href)
            //console.log(query)
            let arr=query.split("/")
            console.log(arr)
           let query2=arr[4] //string
             let bag=""
           for(let i=0;i<query2.length;i++){
            if(query2[i]==="%" || query2[i]==="0" || query2[i]==="1"|| query2[i]==="2"|| query2[i]==="3"|| query2[i]==="4"|| query2[i]==="5"|| query2[i]==="6"|| query2[i]==="7"|| query2[i]==="8"|| query2[i]==="9"){
                continue
            }
                             bag+=query2[i]
           }
           console.log(bag)


   
          dispatch(getProductData(bag))
    }, []);
  return (
  
    <>
    
        <div style={{ margin: "10%", marginTop: "20px" }}>
      
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacingX="40px"
        spacingY="20px"
      >
        {isLoading ? (
          <Skeleton height={"150vh"} width={"80vw"} />
        ) : (
            productData.length > 0 &&
            productData.map((singlePro) => {
            return (
              <Box w="100%" key={singlePro.id} borderColor={"black"}>
                <Link to={`/products/${singlePro.id}`}>
                
                  <ProductCard data={singlePro} />
                </Link>
              </Box>
            );
            // console.log(singlePro)
          })
        )}
      </SimpleGrid>
    </div>

    </>
  )
}

export default ProductList