import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,

  HStack,

  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,


  useColorModeValue,
  Stack,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useToast,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsCart3, BsFillBagCheckFill, BsSearch } from 'react-icons/bs';
import { ImMobile } from 'react-icons/im';
import { FaUserAlt } from 'react-icons/fa';


import "./MainNavbar.css"

import { useDispatch, useSelector } from 'react-redux';
import { logout, logoutRequest, logoutSuccess } from '../../Redux/AuthReducer/action';
import Loadingindicator from '../Loding_Indicator/Loadingindicator';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SearchResultItem from '../SearchResultItem/SearchResultItem';

const Links = [ 'Profile', 'Cart'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function MainNavbar() {
   
  const [searchQuery, setSearchQuery]=useState("")
 
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchFilterResults, setSearchFilterResults] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user, isAuth, isLoading } = useSelector((store) => store.AuthReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const searchBarRef = useRef(null);
  const searchBarWidth = searchBarRef.current ? searchBarRef.current.clientWidth : null;

  const searchResultsDivStyle = {
    width: searchBarWidth,
    maxHeight: '300px',
    overflowY: 'scroll',
    border: '1px solid gray',
    position: 'absolute',
    zIndex: '1',
    backgroundColor: '#F9F9F8',
  };

  const HandleSignup = () => {
    if (isAuth) {
      toast({
        position: 'top',
        title: `Already Login `,
        status: "info",
        isClosable: true,
      })
    }
    else {
      navigate("/login")
    }


  }
  const HandleLOgout = () => {
    if (isAuth) {
      dispatch(logoutRequest())

      setTimeout(() => {
        dispatch(logoutSuccess())
        toast({
          position: 'top',
          title: `Logout Successfull `,
          status: "success",
          isClosable: true,
        })


      }, 2000)



    }



  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchBarRef]);

  

  useEffect( ()=>{

        if(searchQuery){
          axios.get('https://weesho-search-data.vercel.app/AllData')
          .then((res)=>{
            setSearchResults(res.data)
            
          })
          .catch((err)=>console.log(err))
        }
        else{
          setShowResults(false);
        }
     
   
   
     const delayDebouncingfunction = setTimeout(() => {

      const filtered =searchResults.filter((product)=>product.title.toLowerCase().includes(searchQuery.toLowerCase()) )
      setShowResults(true);
      setSearchFilterResults(filtered)
      
      
         
      
    }, 3000);

    return ()=>clearTimeout(delayDebouncingfunction)

  },[searchQuery])

  const handleSearch =(e)=>{
    setSearchQuery(e.target.value)
   
  }

  if(isLoading){
    return <Loadingindicator/>
    }
  

  return (
    <>
      <Box className='navbar' >
        <Flex className="navFlex">
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} className="searchlogo" >
            <Link to="/">
              <Box className='Imag_Logo_Box'>
                <Image className='MainLogo' src={"./weesho.png"} />
              </Box>
            </Link>
            
            <Box ref={searchBarRef} className="inputBox" >
             
                <Input className='SearchINputbox'   type='text' placeholder='Try Saree , Kurti or Search by Product Code'  onChange={(e)=>handleSearch(e)} value={searchQuery}/>
                
                {showResults && (
                           <div style={searchResultsDivStyle}>
                              {  searchFilterResults.map((result) => (
                                   <SearchResultItem key={result.id} result={result} />
                                  ))
                              }
                          </div>
                 )}
            </Box>
          </HStack>

          {/* //downloadapp and supplier */}
          <Flex className="navcontainer" >
            <Box className='Downloadapp_box' >
              <Menu >
                <ImMobile color='black' />
                <MenuButton as={Text}  >
                  <Text fontSize="17px" color="#333333">Download App</Text>
                </MenuButton >
                <MenuList >
                  <MenuItem><p>Download From</p></MenuItem>
                  <MenuItem><img className="downloadApp" src="https://images.meesho.com/images/pow/playstore-icon-big.webp" alt="google play logo" /></MenuItem>
                  <MenuItem><img className="downloadApp" src="https://images.meesho.com/images/pow/appstore-icon-big.webp" alt="app store logo" /></MenuItem>
                </MenuList>

              </Menu>

            </Box>
            <Box className='Downloadapp_box'>
              <Text color="#333333">Become a Supplier</Text>
            </Box>

            <Box>
              <Popover arrowSize={10} autoFocus={false}>

                <PopoverTrigger zIndex="10">
                  <Box className='cart_profile'>
                    <FaUserAlt className='usericon' />
                    <Text pl={3} fontSize={{ base: '14px', md: '16px', lg: '18px' }}>Profile</Text>
                  </Box>
                </PopoverTrigger>

                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader textAlign={"left"}>
                    <Text fontSize={{ base: '15px', md: '16px', lg: '20px' }}>{user.name ? user.name : "Hello User"}</Text>
                    <Text fontSize="12px">To access your Weesho account</Text>
                  </PopoverHeader>
                  <PopoverBody>
                    <Box  >

                      <Button w={{ base: '100px', md: '150px', lg: '200px' }} bg="#FF19B3" disabled={isAuth === true} onClick={HandleSignup}>Sign Up</Button>

                    </Box>
                  </PopoverBody>
                  <PopoverBody m="auto">
                    <Box >
                      <Button w={{ base: '100px', md: '150px', lg: '200px' }} bg="#FF19B3" disabled={isAuth === false} onClick={HandleLOgout}>Logut</Button>
                    </Box>
                  </PopoverBody>
                  <PopoverBody m="auto">
                    <Box >
                      <HStack fontSize="15px"> <BsFillBagCheckFill fontSize="18px" /><Text fontSize="18px">My Order</Text></HStack>
                    </Box>
                  </PopoverBody>

                </PopoverContent>
              </Popover>
            </Box>

            <Box className='Mycart'>
              <Link to="/Cart">
                <Box className='cart_profile' >
                  <BsCart3 />
                  <Text fontSize={{ base: '14px', md: '16px', lg: '18px' }}>Cart</Text>
                </Box>
              </Link>
            </Box>

          </Flex>

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>


    </>
  );
}
