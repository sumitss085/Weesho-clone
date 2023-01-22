
import {  Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./ContactDetails.css"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess } from '../../Redux/AuthReducer/action';
import Loadingindicator from '../../Component/Loding_Indicator/Loadingindicator';
import { useNavigate } from 'react-router-dom';


const init={
  name:"",
  phonenumber:"",
  city:"",
  state:"",
  pincode:"",
  housename:"",
  area:"",
  location:""
}

const ContactDetails = () => {
  const [userDetails,SetUserDetails]=useState(init)
  const {name,phonenumber,city,state,pincode,housename,area,location}=userDetails

   const dispatch =useDispatch()

   const {user,isLoading,isAuth}=useSelector((store)=>store.AuthReducer)

  const navigate=useNavigate()
  const toast = useToast()

  const HandleChange =(e)=>{
     const {name,value} = e.target
     SetUserDetails((prev)=>({...prev,[name]:value}))
  }

  const HandleSubbmit =(e)=>{
    e.preventDefault()
    setTimeout(()=>{
      toast({
        position: 'top',
        title: `Login Successfull`,
        status: "success",
        isClosable: true,
      })
    },3000)

    setTimeout(()=>{
      dispatch(loginSuccess(userDetails))
    },3000)
    dispatch(loginRequest())


    
   
    SetUserDetails(init)
  }


   if(isLoading){
     return <Loadingindicator/> 
   }
    if(isAuth){
      navigate("/")
    }
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

              <form onSubmit={(e)=>HandleSubbmit(e)}>

                   <div>
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required name="name" value={name} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">Name</span>
                      </label>
                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="number" placeholder="&nbsp;" required name="phonenumber" value={phonenumber} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">Phone Number</span>
                      </label>
                    </div>

                       <div className='contactHeading address' >
                        <CiLocationOn fontSize="30px"/>
                         <Text className='detail'>Address</Text>
                       </div>

                       <div>
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required name="housename" value={housename} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">House Number /Building 
                          Name</span>
                      </label>
                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required name="area" value={area} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">Road Name / Area / Colony</span>
                      </label>
                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="number" placeholder="&nbsp;" required name="pincode" value={pincode} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">Pin Code</span>
                      </label>
                    </div>

                    <div className='city'>
                   
                      <label className="phone-field pho">
                         <input type="text" placeholder="&nbsp;" required name="city" value={city} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">City</span>
                      </label>
                    
                   
                      <label class="phone-field pho">
                      <input type="select" placeholder="&nbsp;" required  name="state" value={state} onChange={e=>HandleChange(e)}/>
                         <span className="placeholder">state</span>
                      </label>
                   

                    </div>

                    <div>
                      <label className="phone-field pho">
                         <input type="tel" placeholder="&nbsp;"  name="location" value={location} onChange={e=>HandleChange(e)}/>
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