import { Image } from '@chakra-ui/image'
import { Box, HStack, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import "./Checkout.css";
import { TbCircle1, TbCircle2, TbCircle3 } from "react-icons/tb"
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Radio, useToast } from '@chakra-ui/react'
import CheckoutTotal from './CheckoutTotal';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const [opts, setopts] = useState(false);
    const [value, setValue] = useState(undefined);
    const toast = useToast();
    let navigate = useNavigate();

    const handleoptinp = () => {
        if (value) {
            setopts(true);
        }
        else {
            toast({
                title: `Enter Mobile Number`,
                status: 'warning',
                isClosable: true,
            })
            setopts(false);
        }
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleEnteropt = () => {
        toast({
            title: `Entered OTP Successful`,
            status: 'success',
            isClosable: true,
        })
        setopts(false);
        navigate("/address");
    }
    const handleNavi = () => {
        if (value) {
            toast({
                title: `Guest Login Successfull`,
                status: 'success',
                isClosable: true,
            })
            navigate("/address");

        }
        else {
            toast({
                title: `Enter Mobile Number`,
                status: 'warning',
                isClosable: true,
            })
            setopts(false);
        }
    }
    const handleMobile = () => {
        navigate("/checkout");
    }
    const handleAddress = () => {
        navigate("/address");
    }
    const handlePayClick = () => {
        navigate("/payment");
    }
    return (
        <div className='Main_CheckOut_Box'>
            <Box  bg='#363636' w='100%' p={2} color='white' display="flex" justifyContent="center" alignItems="center">
                <Box w="12%" cursor={"pointer"}>
                    <Image src="" w="100%" />
                </Box>
            </Box>

            <Box style={{ display: "flex", height: "auto", width: "85%", margin: "auto" }}>
                <Box style={{ flex: "7" }}>
                    <Box id="clip">
                        <span onClick={handleMobile} style={{ color: "#363636", backgroundColor: "rgb(242, 245, 248)" }}><TbCircle1 fontSize="25px" />Enter Mobile Numberd</span>
                        <span onClick={handleAddress}><TbCircle2 fontSize="25px" /> Shipping Address</span>
                        <span onClick={handlePayClick}><TbCircle3 fontSize="25px" /> Payment</span>
                    </Box>
                    <Box style={{ width: "95%", margin: "auto", marginTop: "50px" }}>
                        <Text fontWeight="bold" fontFamily="sans-serif">MOBILE</Text>
                        <Input placeholder='Enter Mobile Number' size='sm' type="number" htmlSize={6} width='auto' onChange={handleChange} value={value} />
                        <Button marginLeft="5px" onClick={handleoptinp}>Send OTP</Button>
                        {opts ? <Box>
                            <Text fontWeight="bold" fontFamily="sans-serif">OTP</Text>
                            <HStack display="flex" justifyContent="center">
                                <PinInput>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                                <Button marginLeft="5px" padding="10px 30px" onClick={handleEnteropt}>Enter</Button>
                            </HStack>
                        </Box> : ""}
                        <Text fontWeight="bold" fontFamily="sans-serif" mt="10px">OR</Text>
                        <Box style={{ marginTop: "10px" }}>
                            <Radio value='2'>Checkout as guest</Radio>

                            <Box style={{ marginTop: "20px" }}>
                                <Button color="white" bg="orange.400" padding="20px 40px" onClick={handleNavi}>PROCEED</Button>
                            </Box>
                        </Box>




                    </Box>

                </Box>

            </Box>
        </div>
    )
}

export default Checkout