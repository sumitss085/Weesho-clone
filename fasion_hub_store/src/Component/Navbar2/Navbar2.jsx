
import {
  Box,
  Flex,

} from '@chakra-ui/react';

import CartProgressBar from '../CartProgressBar/CartProgressBar';




export default function Navbar2() {


  return (
    <>
      <Box border="1px solid black" px={20}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}   w="60%">
      
          
            <Box>Logo</Box>
            <Box>
                <CartProgressBar/>
            </Box>
          
          
        </Flex>

    
      </Box>

      
    </>
  );
}