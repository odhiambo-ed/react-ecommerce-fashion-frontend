import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Line, Button, List } from "components";
import ECommerceHomePageListcut from "components/ECommerceHomePageListcut";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";
import SideBar from "components/SideBar"
import Hero from "components/Hero"
import FlashsalesSection from "components/FlashsalesSection"
import CategoriesSection from "components/CategoriesSection"
import BestsellingSection from "components/BestsellingSection"
import HeroBottom from "components/HeroBottom"
import OurproductSection from "components/OurproductSection"
import NewarrivalSection from "components/NewarrivalSection"

const ECommerceHomePagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start overflow-auto w-[100%]">
          <ECommerceHomePageTopheader
            className="bg-black_900 flex flex-col items-end justify-start p-[12px] w-[100%]"
            offer="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            shopnow="ShopNow"
            language="English"
          />
          <ECommerceHomePageHeader
            className="flex flex-row flex-wrap font-inter items-center justify-between max-w-[1170px] mt-[40px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            exclusive="Exclusive"
            contact="Contact"
            about="About"
            signup="Sign Up"
          />
          <Img
            src="images/img_line3.svg"
            className="h-[1px] mt-[16px] w-[auto]"
            alt="lineThree"
          />
          <div className="flex md:flex-col flex-row font-poppins md:gap-[20px] items-start justify-start max-w-[1170px] mx-[auto] md:px-[20px] w-[100%]">
            <SideBar />
            <Line className="bg-black_900_75 md:h-[1px] h-[384px] mb-[2px] md:ml-[0] ml-[16px] md:w-[100%] w-[1px]" />
            <Hero />
          </div>
          <FlashsalesSection />
          <Line className="bg-black_900_75 h-[1px] max-w-[1170px] mt-[60px] mx-[auto] rotate-[-180deg] w-[100%]" />
          <CategoriesSection />
          <Line className="bg-black_900_75 h-[1px] max-w-[1170px] mt-[70px] mx-[auto] rotate-[-180deg] w-[100%]" />
          <BestsellingSection />
          <HeroBottom />
          <OurproductSection />
          <NewarrivalSection />
          <ECommerceHomePageListcut
            className="flex sm:flex-col flex-row font-poppins grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 justify-center max-w-[943px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            price="FREE AND FAST DELIVERY"
            priceOne="Free delivery for all orders over $140"
            p247CustomerservOne="24/7 CUSTOMER SERVICE"
            friendly247CustOne="Friendly 24/7 customer support"
            moneybackguaranOne="MONEY BACK GUARANTEE"
            duration="We return money within 30 days"
          />
          <Button className="bg-gray_100 flex h-[46px] items-center justify-center mt-[61px] p-[11px] rotate-[90deg] rounded-[50%] w-[46px]">
            <Img
              src="images/img_arrowup.svg"
              className="h-[24px]"
              alt="arrowup"
            />
          </Button>
          <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[32px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ECommerceHomePagePage;
