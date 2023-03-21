import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, List, Text, Button } from "components";
import WishlistCart from "components/WishlistCart";
import WishlistCart1 from "components/WishlistCart1";
import WishlistCart2 from "components/WishlistCart2";
import WishlistCart3 from "components/WishlistCart3";
import WishlistCart4 from "components/WishlistCart4";
import WishlistCart5 from "components/WishlistCart5";
import WishlistCart6 from "components/WishlistCart6";
import WishlistCart7 from "components/WishlistCart7";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const WishlistPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <ECommerceHomePageTopheader
          className="bg-black_900 flex flex-col items-end justify-start p-[12px] w-[100%]"
          offer="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
          shopnow="ShopNow"
          language="English"
        />
        <ECommerceHomePageHeader
          className="flex flex-row flex-wrap font-inter items-center justify-between max-w-[1170px] mt-[40px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
          exclusive="Exclusive"
          home="Home"
          contact="Contact"
          about="About"
          signup="Sign Up"
          user="images/img_user_black_900.svg"
        />
        <Img
          src="images/img_line3.svg"
          className="h-[1px] mt-[16px] w-[auto]"
          alt="lineThree"
        />
        <List
          className="flex-col font-poppins md:gap-[40px] gap-[80px] grid items-start max-w-[1170px] mt-[80px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
          orientation="vertical"
        >
          <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-row md:gap-[40px] gap-[835px] items-center justify-between self-stretch md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-black_900 text-center w-[auto]"
                variant="body1"
              >
                Wishlist (4)
              </Text>
              <Button className="border-[1px] border-black_900_7f border-solid cursor-pointer font-medium min-w-[223px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-black_900 text-center w-[auto]">
                Move All To Bag
              </Button>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <WishlistCart
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                _35="-35%"
                addtocart="Add To Cart"
                guccidufflebag="Gucci duffle bag"
                price="$960"
                oldprice="$1160"
              />
              <WishlistCart1
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                addtocartOne="Add To Cart"
                rgbliquidcpucooOne="RGB liquid CPU Cooler"
                priceOne="$1960"
              />
              <WishlistCart2
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                addtocartTwo="Add To Cart"
                gp11Shooterusb="GP11 Shooter USB Gamepad"
                priceTwo="$550"
              />
              <WishlistCart3
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                addtocartThree="Add To Cart"
                quiltedsatinjacOne="Quilted Satin Jacket"
                priceThree="$750"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[60px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-row md:gap-[40px] gap-[864px] items-center justify-between self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-red_600 h-[40px] rounded-[4px] w-[13%]"></div>
                <Text
                  className="font-normal not-italic text-black_900 text-center w-[auto]"
                  variant="body1"
                >
                  Just For You
                </Text>
              </div>
              <Button className="border-[1px] border-black_900_7f border-solid cursor-pointer font-medium min-w-[150px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-black_900 text-center w-[auto]">
                See All
              </Button>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <WishlistCart4
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                thirtyfive="-35%"
                addtocart="Add To Cart"
                asusfhdgaming="ASUS FHD Gaming Laptop"
                price="$960"
                oldprice="$1160"
                sixtyfive="(65)"
              />
              <WishlistCart5
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                addtocartOne="Add To Cart"
                ipslcdgamingmonOne="IPS LCD Gaming Monitor"
                priceOne="$1160"
                sixtyfiveOne="(65)"
              />
              <WishlistCart6
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                new="NEW"
                addtocartTwo="Add To Cart"
                havithvg92GamepOne="HAVIT HV-G92 Gamepad"
                priceTwo="$560"
                sixtyfiveTwo="(65)"
              />
              <WishlistCart7
                className="flex flex-col items-start justify-start self-stretch w-[100%]"
                addtocartThree="Add To Cart"
                ak900WiredkeyboOne="AK-900 Wired Keyboard"
                priceThree="$200"
                sixtyfiveThree="(65)"
              />
            </div>
          </div>
        </List>
        <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[140px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default WishlistPage;
