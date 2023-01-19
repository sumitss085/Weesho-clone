import { Button, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import React from 'react'
import "./Login.css"

const Login = () => {
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
                        <InputLeftAddon children='IN +91' fontSize="12px" bg="none" borderBottom="1px solid #aaa" />
                       
                        <label class="custom-field two">
                           <input type="tel" placeholder="&nbsp;"/>
                             <span class="placeholder">Phone number</span>
                        </label>
                    </InputGroup>
               </div>

               <div>
            
               <Button colorScheme='pink'color="white" w="255px">Button</Button>
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