
import {  Text } from '@chakra-ui/react'
import React from 'react'
import "./ContactDetails.css"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const ContactDetails = () => {
  return (
    <>
    <div className='contactmaindiv'>
    <div className='contactForm_Box'>
          <div className='headingbox'>
            
            <Text>Select Delivery Address</Text>
          </div>

          <div className='formBox'>
              <div className='contactHeading'>
              <BsTelephone fontSize="20px"/>
                <Text className='detail'>Contact Details</Text>
              </div>

              <form >

                   <div>
                      <label class="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required/>
                         <span className="placeholder">Name</span>
                      </label>
                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="tel" placeholder="&nbsp;" required/>
                         <span className="placeholder">Phone Number</span>
                      </label>
                    </div>

                       <div className='contactHeading address' >
                        <CiLocationOn fontSize="30px"/>
                         <Text className='detail'>Address</Text>
                       </div>

                       <div>
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required/>
                         <span className="placeholder">House Number /Building 
                          Name</span>
                      </label>
                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required/>
                         <span className="placeholder">Road Name / Area / Colony</span>
                      </label>
                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required/>
                         <span className="placeholder">Pin Code</span>
                      </label>
                    </div>

                    <div className='city'>
                   
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required/>
                         <span className="placeholder">City</span>
                      </label>
                    
                   
                      <label class="phone-field pho">
                      <input type="select" placeholder="&nbsp;" required/>
                         <span className="placeholder">state</span>
                      </label>
                   

                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="tel" placeholder="&nbsp;"/>
                         <span className="placeholder">NearBy location (Optional)</span>
                      </label>
                    </div>
                    <div>
                      <input type="submit"  className='submitbtn'/>
                    </div>

              </form>
        </div>
    
    </div>
               
    </div>
 
  
    



    </>
  )
}

export default ContactDetails