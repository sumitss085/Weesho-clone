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
import Footer from "../Footer/Footer"
import { Main } from './Styled-Home';
import Footer1 from '../Footer/Footer1';
export const Home = () => {
    return (
        <div>
            <Main>
            <section id="homepage">
        <div>
          <h1>Lowest Prices</h1>
          <h1>Best Quality Shopping</h1>
          <p>25+ Crores worth Rewards | 500 Winners every Hour</p>
          <button>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII="
              alt=""
            />
            Download the <span> Meesho App</span>
          </button>
        </div>
        <div>
          <img
            src="https://images.meesho.com/images/marketing/1631722939962.webp"
            alt=""
          />
        </div>
      </section>
      </Main>
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
            <Footer1/>
            <div className={styles.foot}>
                {/* <div className={styles.banner5}>
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
                </div> */}
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
                            <Footer/>                           
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
