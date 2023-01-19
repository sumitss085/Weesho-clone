import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import {SimpleGrid,Box, Heading, Skeleton, Stack} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import WomenSareeCart from "./WomenSareeCart";
import  getProductData  from "../../Redux/WomensProducts/saree.action";


export function WomenSaree() {
  const productData = useSelector(store => console.log(store));
  
  const {payload, isLoading, isError } = productData;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductData());
  }, []);
  
  console.log(productData)
  return (
    <h1>testing</h1>
    // <div style={{ margin: "10%", marginTop: "20px" }}>
      
    //   <SimpleGrid
    //     columns={{ base: 1, sm: 2, md: 3 }}
    //     spacingX="40px"
    //     spacingY="20px"
    //   >
    //     {isLoading ? (
    //       <Skeleton height={"150vh"} width={"80vw"} />
    //     ) : (
    //       saree &&
    //       saree.map((singlePro) => {
    //         return (
    //           <Box w="100%" key={singlePro.id} borderColor={"black"}>
    //             <Link to={`/products/${singlePro.id}`}>
                
    //               <WomenSareeCart data={singlePro} />
    //             </Link>
    //           </Box>
    //         );
    //         // console.log(singlePro)
    //       })
    //     )}
    //   </SimpleGrid>
    // </div>
  );
}
