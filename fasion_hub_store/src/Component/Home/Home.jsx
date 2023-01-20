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
                        <img alt="" width="8%" height="50%" src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png"/>
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
                     <img alt='' src="https://images.meesho.com/images/marketing/1631611172021.png"/>
                </div>
                <div className={styles.temp}>
                   <img alt='' src="https://images.meesho.com/images/marketing/1631610854491.png"/>
                </div>
                <div className={styles.temp}>
                    <img alt='' src="https://images.meesho.com/images/marketing/1631611208025.png"/>
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
                        <img alt='' src="https://images.meesho.com/images/pow/playstore-icon.png"/>
                        <img alt='' src="https://images.meesho.com/images/pow/appstore-icon.png"/>
                    </div>
                </div>
            </div>
            <div className={styles.banner4}>
            </div>
            <div className={styles.foot}>
            <div className={styles.banner5}>
                <div className={styles.banner5tbox}>
                    <h1 className={styles.banner5h1}>Shop Non-Stop on Meesho</h1>
                    <p style={{textAlign: 'left',marginTop:10}}>Trusted by more than 1 Crore Indians<br/>
                        Cash on Delivery | Free Delivery
                        </p>
                        
                        <div className={styles.logos}>

                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="playstore" />
                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="apple"/>
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
                         <a href="https://www.facebook.com/meeshosupply"><img src="https://meesho.com/assets/facebook.png" alt="fb"/></a>  
                         <a href="https://www.instagram.com/meeshoapp/"><img src="https://meesho.com/assets/instagram.png" alt="instagram"/></a>   
                         <a href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw"><img src="https://meesho.com/assets/youtube.png" alt="youtube"/></a>
                            <a href="https://www.linkedin.com/company/meesho/"><img src="https://meesho.com/assets/linkedin.png" alt="linkedin" /></a>
                            <a href="https://twitter.com/Meesho_Official/"><img src="https://meesho.com/assets/twitter.png" alt="twitter"/></a>
                        </div>
                   
                    </div>

                    <div className={styles.career}>
                    <h4>Contact Us</h4>
                    <h6>Fashnear Technologies Private<br/>Limited,<br/>
                            CIN: U74900KA2015PTC082263<br/>
                            06-105-B, 06-102, (138 Wu)<br/>Vaishnavi Signature, No. 78/9,<br/>Outer Ring Road, Bellandur,<br/>Varthur Hobli, Bengaluru-560103,<br/>Karnataka, India<br/>
                            E-mail address:<br/>query@meesho.com<br/>
                            © 2015-2022 Meesho.com</h6>
                        
                </div>
                    
                </div>

                <div className={styles.footer}>
                
                <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'   style={{marginLeft:15}}  >
        More About Meesho
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Meesho: Affordable Online Shopping at Your Fingertips
There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet. 

A Huge Selection of Products Across All Categories
We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.

Latest Women's Fashion Is Right Here
Women’s Ethnic Wear Collection
When it comes to women's ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!

 

Western Wear for Women
Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!

 

Accessories, Jewellery, and Footwear
You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you'll be sure to find the perfect accessories for any outfit!

 

Men's Ethnic Wear
Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men’s ethnic wear collection! Whether you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs.

Largest Collection of Menswear and Accessories 
 

Men’s Western Wear
Through our large selection of menswear products we offer, you’re sure to find something you love. We have a vast collection of t-shirts, jeans, polos, coats, and shirts. We have sizes in stock that fit any man’s body type, and the best news of all is that they’re all affordable. We make it easy to find exactly what you’re looking for, too. Our search tool lets you filter our selection down by size, color, material, and more. 

 

Ethnic Wear for Men
If you're on the hunt for a new sherwani or any other type of Indian attire for an upcoming wedding, our latest men's ethnic wear collection has got you covered. We have a range of budget-friendly styles to choose from, so you're sure to find something that fits your needs. Whether you're looking for a Sherwani set, Kurta pajamas, or an ethnic jacket, we've got it all!

 

Men’s Accessories and Footwear
When it comes to fashion, no one knows how to help you gain the upper hand in style better than us. Shop our online collection of accessories for men and pick out something for yourself or for your other half! Our accessories collection includes items like men's wallets, cufflinks, bags for men, and more. So don't waste another minute and get yourself some accessories today! Do not forget to check out our latest footwear for men. We have everything from colorful sneakers to formal footwear to flip-flops for men.

 

Affordable and Top Quality Beauty Products
With so many different cosmetics brands, products, and items to choose from, it can be overwhelming when trying to find the right makeup for you. Sometimes it's nice to try out new products, but if you buy bad quality makeup that breaks you out, it's not very cost-effective. We are only concerned with the best products. We only stock up on the best makeup and skincare that won't damage your skin or make you break out. We have everything from foundations, makeup removers, concealers to primer, mascara, eye shadow, and lipsticks.

 

Cute and Trendy Kidswear Collection
Kids grow so fast, it feels like you're constantly buying new clothes for them! Whether you're looking for the latest trends or just want something practical and affordable, our kidswear collection has got you covered. You'll find everything from rompers and dresses for girls to sets and jeans for boys. Plus, we have ethnic wear and accessories for kids of all ages. And don't forget to check out our baby care collection for all the basic products for baby care.

Shop Home & Kitchen Products, Electronics, and More
 

Kitchen Products
If you're looking to spice up your kitchen, then you've come to the right place! We carry a wide variety of home and kitchen essentials like cooking utensils and serveware, kitchen storage, appliances like blenders, choppers, cooktops, and more! We are dedicated to providing the highest quality products for a reasonable price. We're confident that we have everything you're looking for in your kitchen or home! 

 

Home Utility and Essentials
It's always a good idea to switch up your home's style every now and then - it keeps things fresh and also allows you to try out new trends. But of course, you never want to spend more money than you have to. That's where Meesho comes in! We've got amazing prices on all kinds of home furnishing items like bedsheets, curtains, cushions, and more. Plus, we have a constantly rotating selection of the best home decor items so you can always stay on top of the latest trends. So be sure to check out our home decor section today! 

 

Electronics and Accessories
At Meesho, we give you access to a huge selection of gadgets and essentials for your electronic devices. Here you'll find everything from chargers and headphones to data cables and even external battery packs. Every month, we offer different sales and discounts on products, allowing you to save on your favorite essentials. Here you can find the perfect gift for everyone on your list without breaking your budget!

 

Health, Fitness & Sports
We know how important it is to take care of your health and keep yourself fit. We have everything you need to start your journey towards fitness. At our store, you will find a wide variety of fitness equipment at very affordable prices. We have everything you need to get started with your home workouts, including dumbbell sets, exercise bands, exercise mats, skipping ropes, sports kits and more!

 

Office Supplies and Stationery 
We have a wide range of stationery items which will help you stay tidy and organised. You can buy notebooks, diaries and notepads and craft supplies which are great for school and college, or you can buy office supplies which are great for adults. We have a variety of pens, pencils, and other stationery supplies to ensure that you have what you need to write down your thoughts, make lists and so much more.

 

Get the Meesho App for Hassle Free Online Shopping 
If you want a seamless shopping experience, you should also consider downloading Meesho’s App. While you may think that it's unnecessary to have an app for shopping, there are plenty of features that will make your life easier. If you find yourself preferring to shop from home, this is the app for you. It makes shopping online easier than ever. You can browse through a plethora of products and even get great deals with more discounts than you can count. You can even share products you like with your friends on social media in just seconds. 

Download Meesho App Now
 

Become a Reseller: Start Making Money In Three Simple Steps
Now you know all about different categories and products Meesho has to offer. It's time to explore and understand Meesho’s reselling option. Apart from using Meesho as an online shopping platform, you also have the option to start your online business with us. Here’s how you can begin your entrepreneurial journey.

Browse: You can register for a new account or log in to an existing one on the Meesho app or website. Once you're logged in, you can browse through our catalog and select products that you want to purchase at wholesale rates!

Share: With a single click, you can share catalogs and product images over Whatsapp, Facebook, or Instagram to your contacts using the share option.

Earn: After sharing the products and catalogs with your customers, you will start getting orders from them. You can add a profit margin to Meesho’s prices and quote that to your customers.This will be your profit. You can quote product prices with an added margin, which will include a profit for you. Once you place the orders on your customer’s behalf, Meesho will take care of the delivery process for you. 

Don't Miss Out! Start Shopping Online on Meesho Now
Meesho offers multiple payment options including debit and credit cards, UPI, and COD to help you with a smooth checkout process. If you are unhappy with any of the products you order you can immediately return them and get a full refund with no questions asked. In case you have any queries or concerns, simply send us an email at query@meesho.com. Or you can contact us on social media through Facebook, Instagram, or Twitter. We're here to help you! 

 

Online Shopping
Home & Living
Curtains & Sheers | Round Cushions | Sofa Covers | Cotton Bedsheets | Bedding Sets | Pillow Covers | Decorative Items | Duvet Covers | Blankets | Home Temple | Yoga mats | Bean Bags | Single Bed Sheet | Cushions | Face Towels | Cotton Towel | Trays | Coasters
Men Ethnicwear
Men Dhoti Kurtas | Men Indo Western Dresses | Men Velvet Sherwanis | Men Dhotis
Women Western Wear
Women Frocks | Long Tops Women | Tshirt Dresses | Designer Gown | Pencil Skirts | Women Trousers | Flared Jeans | Women Sweatshirts | Shrugs | Capris | Jacket Dresses | Fancy Ladies Sweater | Chikankari Palazzos | Ankle Length Leggings | Tights | Printed Leggings | Kaftans | Maternity Wear | Denim Women Shorts | Black Jeggings | Short Night Dress | Women Night Suits | Lace Lingerie Sets | Lingerie Sets | Push Up Bra | Stockings | Black Camisoles | Cotton Bathrobes | Satin Night Suit | Body shapers | Women Pyjamas | Swimwear | Women Jackets | Women Thermal Set
Women Ethnicwear
Silk Saree | Puff Sleeve Blouses | Chikankari Kurtis | Designer Lehenga | Sharara | Phulkari Dupatta | Petticoats | Abaya | Black Kurta | Velvet Shawls | Blouse Piece | Kurti Fabric | Designer Suits
Women Footwear
Women Slippers | Bellies | Juttis & Mojaris
Women Accessories
Hoop Earrings | Stud Earrings Women | Oxidised Ring | Handbags | Umbrellas | Cateye Sunglasses | Jewellery Set | Slingbags | Trolley Bags | Hijabs | Ankle Socks Women | Clutches | Hair Accessories | Maangtika | Pouches | Duffle Bags | Pashmina Shawls | Bindis | Waist Bags | Rucksacks | Briefcases | Small Travel Bags | Potlis | Nosepins | Gold Bangles | Bridal Anklets | Chandbali Earrings | Necklaces | Multi Necklace
Electronics & Accessories
Android Smart Watches | On Ear Headphones | Bluetooth Speakers | Bluetooth Earphones | Sport Headphones | CCTV Cameras | Spy Cameras | Keyboard | Laptop Bags | Mouse | Laptop Accessories | Pen Drives | Earphones | Fast Charging Power Banks | Headphones | Data Cables | Car Mobile Holders | Car Mobile Holders | Mobile Chargers | Speakers | Diwali Lightings | Microphone | Memory Cards | Digital Photo Frames | Dongle | VR Box
Men Western Wear
Cotton Shorts Men | Denim Jeans Men | Formal Trousers Men | Men Active Shorts | Sport Jackets Men | Printed Tshirts | Formal Shirts Men | Sleeveless Sweatshirts Men | Leather Jackets Men | Grey Blazers | Men Sweaters | Sport Tracksuits Men | Vests | Printed Briefs Men | Men Trunks | Wool Jackets Men
Men Footwear
Reebok Sports Shoes Men | Men Sandals | Leather Loafers Men
Men Accessories
Leather Watches Men | Gold Jewellery Men | Hair Spray For Men | Men Keychains | Men Socks | Men Scarves | Men Wrist Bands | Men Crossbody Bags | Men Shirt Studs
Kids
Kids Lunch Boxes | Kids Ethnic Jackets | Kids Blazers | Rompers | Kids Kurtis & Kurtas | Kids Salwar Suit Sets | Kids Ethnic Gowns | Tshirts Boys | Girls Stylish Tops
Baby
Baby Pillows | Baby Towels | Baby Hanging Cradle | Baby Sleeping Bag | Baby Blanket
Home & Kitchen
Toaster | Mixer Grinder | Cookers | Juicer | Food Processors | Roti Maker | Sandwich Maker | Kettles | Hand Blender | Table Cover | Napkins Holder | Kitchen Mat | Kitchen Towel | Aprons | Kitchen Gloves | Racks & Holders | Spice Racks | Jars & Container | Water Bottles | Thermos & Flasks | Lunch Boxes | Salt & Pepper Shakers | Knives | Food Strainers | Choppers | Mashers | Graters | Cutlery | Chopping Boards | Kitchen Scissors | Ice Cube Trays | Measuring Cups | Tongs | Ice Cream Scoops | Funnels | Trivets
Personal Care & Wellness
Tummy trimmer | Makeup Kits | Hair Color | Hair Steamers | Hair Care | Oral Care | Beard Oil | Deodorants | Eye Lenses | Soap | Oximeter | Bb Cream | Body Scrub | Olive Oils | Talcum Powder | Face Steamers | Compact | Nail Cutter | Lip Balm
    </AccordionPanel>
  </AccordionItem>
</Accordion>
                
            </div>

            </div>
            
        </div>

    )
}
