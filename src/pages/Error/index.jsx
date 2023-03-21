import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Button } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const ErrorPage = () => {
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
        <div className="flex font-poppins items-start mt-[79px] px-[135px] sm:px-[20px] md:px-[40px] w-[100%]">
          <CartRoadmap
            className="flex flex-row items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            account="Home"
            nothing="404 Error"
          />
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-start mt-[131px] md:px-[20px] self-stretch md:w-[100%] w-[auto]">
          <Text
            className="font-inter text-black_900 text-left tracking-[3.30px] w-[auto]"
            variant="body7"
          >
            404 Not Found
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            Your visited page not found. You may go home page.
          </Text>
        </div>
        <Button className="bg-red_600 cursor-pointer font-medium min-w-[254px] mt-[77px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
          Back to home page
        </Button>
        <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[140px] md:px-[20px] w-[100%]" />
      </div>
    </>
  );
};

export default ErrorPage;
