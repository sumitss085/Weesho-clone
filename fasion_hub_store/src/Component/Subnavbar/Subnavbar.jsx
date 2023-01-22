import { Box, Flex, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import React from 'react'
import "./Subnavbar.css"
import { SubNavbarItem ,SubNavbarItemList} from '../../Contants'; 
import SubNavmenu from '../SubNavmenu/SubNavmenu';
const Subnavbar = () => {
  return (
    <div>
         <Box className='subNavbar'> 
           {
            SubNavbarItem.map((ele,ind)=>(
              <Menu key={ind}  >
                  <MenuButton as={Text} className="subnavHeading" >
                    {ele}
                  </MenuButton >
                  <MenuList   >
                    <SubNavmenu item={SubNavbarItemList[ind]}  ind={ind}/>
                      
                    
                  </MenuList>
                  
                 
                
                 
                </Menu>
            ))
           }

        </Box>
    </div>
  )
}

export default Subnavbar