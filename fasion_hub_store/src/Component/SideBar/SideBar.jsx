import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import style from "../SideBar/SideBar.module.css"

const SideBar = () => {

  const [ searchParams,setSearchParams ] = useSearchParams();

  const initialOrder = searchParams.get("order")

  const [ order, setOrder ] = useState(initialOrder||"");



  const handelSort=(e)=>{
      setOrder(e.target.value)
  }

  useEffect(()=>{

    // const params={
    //   order
    // };

    // order && (params.order= order);
    // setSearchParams(params);

  },[]);


  return (
    <>

      <div className={style.sidebar_main_div}>

      <div className={style.SideBar_Sort_first_div}>

        <Accordion allowMultiple >
          <AccordionItem p="3px" border="none">
            <h2>
              <AccordionButton>
                <Box as="h1" flex='1' textAlign='left'>
                  <h1 className={style.sort_by_h1_tag}>Sort by : <span style={{ color: "black" }}>Relevance</span></h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  onClick={handelSort} className={style.AccordionPanel_section_main_div} p={5}>
              <input type="radio"  value="asc" name='sort_by' defaultChecked={order==="asc"}/>
              <h1>Price ( High to Low )</h1>
            </AccordionPanel>

            <AccordionPanel p={5} onClick={handelSort}  className={style.AccordionPanel_section_main_div}>
              <input type="radio" value="desc" name='sort_by'defaultChecked={order==="desc"}/>
              <h1> Price ( Low to High )</h1>

            </AccordionPanel>

            <AccordionPanel p={5}  className={style.AccordionPanel_section_main_div}>
              <input type="radio" value="" name='sort_by'/>
              <h1> Rating</h1>

            </AccordionPanel>


            <AccordionPanel p={5}  className={style.AccordionPanel_section_main_div}>
              <input type="radio" value="" name='sort_by' />
              <h1> Discount</h1>

            </AccordionPanel>


          </AccordionItem>
        </Accordion>
      </div>


      <div className={style.Filters_main_div}>



        <div className={style.Filters_main_Div_inside_heading_tag}>
          <h1>FILTERS</h1>
          <p>1000+ Products</p>
        </div>



        {/* category filter */}



        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Category</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Jewellery Set</h1>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>

        {/* Gender Filter */}



        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Gender</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <div className={style.Gender_women_filter_button}>Women</div>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>


        {/* fabric Filter */}


        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Fabric</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Chambray</h1>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>


        {/* Color Filter */}


        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Color</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <div className={style.Color_filter_button}>
                  <div>Being</div>
                  <div>Black</div>
                  <div>Show More</div>
                </div>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>


        {/* Price Filter */}



        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Price</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <div className={style.Color_filter_button}>
                  <div>Under ₹ 149</div>
                  <div>Under ₹ 199</div>
                  <div>Under ₹ 249</div>
                  <div>Under ₹ 349</div>
                  <div>Under ₹ 399</div>
                  <div>Under ₹ 449</div>
                  <div>₹ 0 - ₹ 99 </div>
                  <div>₹ 100 - ₹ 149</div>
                  <div>₹ 150 - ₹ 199</div>
                  <div></div>
                </div>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>


        {/* Discount Filter */}


        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Discount</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <div className={style.Color_filter_button}>
                  <div>All Discounted </div>
                  <div></div>
                </div>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>



        {/* Rating Filter */}


        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Rating</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>2.0 and above</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>3.0 and above</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>3.5 and above</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>4.0 and above</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>M-Trusted</h1>
              </AccordionPanel>

            </AccordionItem>

          </Accordion>

        </div>


        {/* Size Filter */}


        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Size</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>10</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>11</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>12</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>13</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>14</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>15</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>16</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>2.14</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>2.2</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>2.3</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>2.4</h1>
              </AccordionPanel>






            </AccordionItem>

          </Accordion>

        </div>


        {/* Combo Filter */}


        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Combo</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Combos</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Pack of 1</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Pack of 2</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Pack of 3</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Pack of 4</h1>
              </AccordionPanel>


              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Pack of 5</h1>
              </AccordionPanel>


            </AccordionItem>

          </Accordion>

        </div>


        {/* Print Or Pattern Type Filter */}



        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Print Or Pattern Type</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Solid</h1>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>


        {/* Fit/Shape Filter */}



        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Fit/Shape</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>A-line</h1>
              </AccordionPanel>

              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Flared</h1>
              </AccordionPanel>

            </AccordionItem>

          </Accordion>

        </div>



        {/* Type Filter */}



        <div className={style.Filter_main_div_inside_category}>

          <Accordion allowMultiple>
            <AccordionItem border="none" p="5px">
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <h1 className={style.Filter_main_div_inside_category_heading}>Type</h1>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className={style.Filter_main_div_inside_category_Jewelry_filter}>
                <input type="checkbox" />
                <h1>Flat Sheets</h1>
              </AccordionPanel>
            </AccordionItem>

          </Accordion>

        </div>








      </div>
      </div>







    </>
  )
}

export default SideBar