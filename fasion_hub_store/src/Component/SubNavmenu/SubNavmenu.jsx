import { Box, MenuItem,  Text } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { SubNavbarItemList} from '../../Contants'; 
import "./SubNavmenu.css"
const SubNavmenu = ({item,ind}) => {
   
     let objectLength = Object.keys(item)  
     let [searchParams, setSearchParams] = useSearchParams();
     const navigate = useNavigate();
          
     const object=SubNavbarItemList[ind]

 
     const handleClick =(list)=>{
      
       navigate(`/productslist/${list}` );
        
     }

  return (
    <>
   <Box className='menucolum' >
    {
      objectLength.map((el,ind)=>(
        <Box key={ind}>
          <Text color="#F43397" className='subNavMenuHeading'>{el}</Text>
           {
            object[el].map((list)=>(
              <MenuItem ket={ind} className='subNavMenuitem' onClick={()=>handleClick(list)}>{list}</MenuItem>
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