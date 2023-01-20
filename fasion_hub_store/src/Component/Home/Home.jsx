import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import styles from "./home.module.css";
export const Home = () => {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        Lowest Prices
                        <div>Best Quality Shopping</div>
                    </div>
                    <div className={styles.title1}>
                        50 lakh+ Styles | 650+ categories
                    </div>
                    <div className={styles.button}>
                        <img alt="" width="8%" height="50%" src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png" />
                        <span>Download the Meesho App</span>
                    </div>
                </div>
                <div className={styles.container1}>
                </div>
            </div>
            <br />
            <div className={styles.line}>
                <div className={styles.hr}></div>
                <div className={styles.hrtitle}>Top Categories to choose from</div>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.banner1}>
                <div className={styles.img}>
                    <img alt='' src="https://images.meesho.com/images/marketing/1631611172021.png" />
                </div>
                <div className={styles.temp}>
                    <img alt='' src="https://images.meesho.com/images/marketing/1631610854491.png" />
                </div>
                <div className={styles.temp}>
                    <img alt='' src="https://images.meesho.com/images/marketing/1631611208025.png" />
                </div>
            </div>
            <div>
                <div className={styles.banner2} >
                    <div className={styles.tbox}>
                        <span>Homecare</span>
                        <button>VIEW ALL</button>
                    </div>
                    <div className={styles.cardBox}>
                        <div className={styles.card}>
                            <img src="https://images.meesho.com/images/marketing/1629883981751.png" alt="" />
                        </div>
                        <button>Bedsheets</button>
                    </div>
                    <div className={styles.cardBox}>
                        <div className={styles.card}>
                            <img src="https://images.meesho.com/images/marketing/1629884011960.png" alt="" />
                        </div>
                        <button>Kitchenware</button>
                    </div>
                    <div className={styles.cardBox}>
                        <div className={styles.card}>
                            <img src="https://images.meesho.com/images/marketing/1629883997863.png" alt="" />
                        </div>
                        <button>Carpets</button>
                    </div>
                </div>
            </div>
            <br />
            <div className={styles.banner3}>
                <div className={styles.banner3container}>
                    <h4>Become a Reseller and</h4>
                    <h1>Start your Online Business</h1>
                    <h1>with Zero Investment</h1>
                    <div className={styles.banner3ibox}>
                        <img alt='' src="https://images.meesho.com/images/pow/playstore-icon.png" />
                        <img alt='' src="https://images.meesho.com/images/pow/appstore-icon.png" />
                    </div>
                </div>
            </div>
            <div className={styles.banner4}>
            </div>
            <div className={styles.foot}>
                <div className={styles.banner5}>
                    <div className={styles.banner5tbox}>
                        <h1 className={styles.banner5h1}>Shop Non-Stop on Meesho</h1>
                        <p style={{ textAlign: 'left', marginTop: 10 }}>Trusted by more than 1 Crore Indians<br />
                            Cash on Delivery | Free Delivery
                        </p>

                        <div className={styles.logos}>

                            <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="playstore" />
                            <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="apple" />
                        </div>

                    </div>
                    <div className={styles.career}>
                        <p>Careers</p>

                        <p>Become a supplier</p>
                        <p>Our Influencer Program</p>
                        <p>Hall of Fame</p>


                    </div>
                    <div className={styles.career}>
                        <p>Legal and Policies</p>
                        <p>Meesho Tech Blog</p>
                        <p>Notices and Return</p>
                    </div>

                    <div className={styles.career}>

                        <h4>Reach out to us</h4>
                        <div className={styles.social}>
                            <a href="https://www.facebook.com/meeshosupply"><img src="https://meesho.com/assets/facebook.png" alt="fb" /></a>
                            <a href="https://www.instagram.com/meeshoapp/"><img src="https://meesho.com/assets/instagram.png" alt="instagram" /></a>
                            <a href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw"><img src="https://meesho.com/assets/youtube.png" alt="youtube" /></a>
                            <a href="https://www.linkedin.com/company/meesho/"><img src="https://meesho.com/assets/linkedin.png" alt="linkedin" /></a>
                            <a href="https://twitter.com/Meesho_Official/"><img src="https://meesho.com/assets/twitter.png" alt="twitter" /></a>
                        </div>

                    </div>

                    <div className={styles.career}>
                        <h4>Contact Us</h4>
                        <h6>Fashnear Technologies Private<br />Limited,<br />
                            CIN: U74900KA2015PTC082263<br />
                            06-105-B, 06-102, (138 Wu)<br />Vaishnavi Signature, No. 78/9,<br />Outer Ring Road, Bellandur,<br />Varthur Hobli, Bengaluru-560103,<br />Karnataka, India<br />
                            E-mail address:<br />query@meesho.com<br />
                            © 2015-2022 Meesho.com</h6>

                    </div>

                </div>



                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                   <h1 style={{fontWeight:"bold" }} >More About Meeso</h1>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <h1 style={{fontWeight:"bold" , textAlign:"left" }} >Meesho: Affordable Online Shopping at Your Fingertips</h1>
                            <p>There are many benefits of shopping online. You can take your time and look
                                 at different options to find exactly what you want. It's easy to compare prices 
                                 online and find exactly what you are looking for. And now with Meesho, you can shop
                                  for anything you want at the lowest prices in the market.  Even if you want to shop 
                                  for cool gifts for your friends and family, there are many options that you can 
                                  find on the Internet. </p>
                                  <br />
                                  <h1  style={{fontWeight:"bold" , textAlign:"left" }} >A Huge Selection of Products Across All Categories</h1>
                            <p>We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need. </p>
                                  <br />
                                  <h1  style={{fontWeight:"bold" , textAlign:"left" }}  >Women’s Ethnic Wear Collection</h1>
                            <p>When it comes to women's ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today! </p>
                                 <br />
                                  <h1  style={{fontWeight:"bold" , textAlign:"left" }}  >Western Wear for Women</h1>
                            <p>Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love! </p>
                                 <br />
                                  <h1  style={{fontWeight:"bold" , textAlign:"left" }} >Accessories, Jewellery, and Footwear</h1>
                            <p>You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you'll be sure to find the perfect accessories for any outfit!</p>
                                 <br />
                                  <h1  style={{fontWeight:"bold" , textAlign:"left" }} >Men's Ethnic Wear</h1>
                            <p>
Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men’s ethnic wear collection! Whether you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs. </p>
                                 <br />
                                  <h1  style={{fontWeight:"bold" , textAlign:"left" }} >Men’s Western Wear</h1>
                            <p>Through our large selection of menswear products we offer, you’re sure to find something you love. We have a vast collection of t-shirts, jeans, polos, coats, and shirts. We have sizes in stock that fit any man’s body type, and the best news of all is that they’re all affordable. We make it easy to find exactly what you’re looking for, too. Our search tool lets you filter our selection down by size, color, material, and more.  </p>
                         
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>



            </div>

        </div>

    )
}
