import {  InputGroup, InputLeftAddon, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {

   const [number,SetNumber]=useState("")

   const navigate = useNavigate();
   const toast = useToast()

   const {isAuth}=useSelector((store)=>store.AuthReducer)

   const handleNumber =(e)=>{
               let PhoneNumber = e.target.value
               SetNumber(PhoneNumber)
   }

   const handlePhoneNumber =()=>{
           if(number.length===10){
            navigate("/contactdetail")     
           }
           else{
            toast({
              position: 'top',
              title: `Invalid Mobile Number`,
              status: "warning",
              isClosable: true,
            })
           }
           SetNumber("")

   }

   if(isAuth){
    return navigate("/")
   }

  return (
    <div className='login_page'>

        <div className='login_form'>
           
            <div className='img_div'>
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="login_pic" /> 
            </div>

            <div className='form_div'>
               
                <div>
                <Text fontSize="14px" fontWeight="600" color="#333333">Sign Up to view your profile</Text>
                </div>
               
                <div>
                    <InputGroup size="sm">
                        <InputLeftAddon children='IN +91' fontSize="15px" bg="none" borderBottom="1px solid #aaa" h='40px'/>
                       
                        <label className="custom-field two">
                           <input type="number" placeholder="&nbsp;" required onClick={(e)=>handleNumber(e)}/>
                             <span className="placeholder">Phone number</span>
                        </label>
                    </InputGroup>
               </div>

               <div>
            
               <button  className='continueButton' onClick={handlePhoneNumber}>Continue</button>
               </div>

               <div id='form_bottom_div'>
                 <Text className='form_bottom_text'>By continuing, you agree to Meesho’s</Text>
                 <Text className='form_bottom_text'>Terms & Conditions  and  Privacy Policy</Text>
               </div>

                


            </div>

        </div>

    </div>
  )
}

export default Login


//<svg xmlns="http://www.w3.org/2000/svg" class="Loaderstyled__StyledLoader-sc-w4grmz-0 kxdQNm"><path d="M 7 30 L 7 18 A 7 7 0 0 1 21 18 L 21 30 M 21 18 A 7 7 0 0 1 35 18 L 35 30" class="Loaderstyled__StyledLightTrack-sc-w4grmz-1 jKOEut"></path><path d="M 7 30 L 7 18 A 7 7 0 0 1 21 18 L 21 30" class="Loaderstyled__StyledDarkTrack-sc-w4grmz-2 kCwEng"></path><path d="M 21 30 L 21 18 A 7 7 0 0 1 35 18 L 35 30" class="Loaderstyled__StyledDarkTrack-sc-w4grmz-2 Loaderstyled__StyledDarkRightTrack-sc-w4grmz-3 kCwEng lpeJlm"></path></svg>