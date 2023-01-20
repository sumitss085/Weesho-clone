import { Box, MenuItem,  Text } from '@chakra-ui/react'
import React from 'react'
import { SubNavbarItemList} from '../../Contants'; 
import "./SubNavmenu.css"
const SubNavmenu = ({item,ind}) => {
   
     let objectLength = Object.keys(item)  
     
          
     const object=SubNavbarItemList[ind]

  return (
    <>
   <Box display="flex" gap="50px"justifyContent="space-between"  p="15px">
    {
      objectLength.map((el,ind)=>(
        <Box key={ind}>
          <Text color="#F43397" className='subNavMenuHeading'>{el}</Text>
           {
            object[el].map((list)=>(
              <MenuItem  className='subNavMenuitem'>{list}</MenuItem>
            ))
          
           }
        </Box>
      ))
    }
    

   </Box>
     
                 
   
   
    </>
  )
}

export default SubNavmenu