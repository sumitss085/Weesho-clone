
import {
  Box,
  Flex,

} from '@chakra-ui/react';

import CartProgressBar from '../CartProgressBar/CartProgressBar';




export default function Navbar2() {


  return (
    <>
      <Box  px={20} pt="20px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} w="60%">


          <Box>
            <img src="./weesho.png" width={"80px"} alt="" />
          </Box>
          <Box>
            <CartProgressBar />
          </Box>


        </Flex>


      </Box>


    </>
  );
}