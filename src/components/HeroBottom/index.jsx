import React from 'react'
import { Img, Text, Button, List } from "components";
import ECommerceHomePageFlashselltimer from "components/ECommerceHomePageFlashselltimer";
import ECommerceHomePageFlashselltimer1 from "components/ECommerceHomePageFlashselltimer1";
import ECommerceHomePageFlashselltimer2 from "components/ECommerceHomePageFlashselltimer2";
import ECommerceHomePageFlashselltimer3 from "components/ECommerceHomePageFlashselltimer3";

const index = () => {
  return (
    <div className="bg-black_900 flex items-center justify-start max-w-[1170px] mt-[139px] mx-[auto] md:px-[20px] px-[44px] w-[100%]">
      <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start md:w-[100%] w-[99%]">
        <div className="flex flex-col items-start justify-start md:w-[100%] w-[42%]">
          <Text
            className="font-poppins font-semibold text-green_A400 text-left w-[auto]"
            variant="body3"
          >
            Categories
          </Text>
          <Text
            className="font-inter font-semibold leading-[60.00px] mt-[27px] text-gray_50 text-left tracking-[1.92px] w-[100%]"
            as="h3"
            variant="h3"
          >
            Enhance Your Music Experience
          </Text>
          <List
            className="sm:flex-col flex-row font-poppins gap-[24px] grid grid-cols-4 justify-start mt-[32px] self-stretch w-[auto]"
            orientation="horizontal"
          >
            <ECommerceHomePageFlashselltimer
              className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[11px] rounded-[50%] w-[100%]"
              twentythree="23"
              hours="Hours"
            />
            <ECommerceHomePageFlashselltimer1
              className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[11px] rounded-[50%] w-[100%]"
              five="05"
              days="Days"
            />
            <ECommerceHomePageFlashselltimer2
              className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[9px] rounded-[50%] w-[100%]"
              fiftynine="59"
              minutes="Minutes"
            />
            <ECommerceHomePageFlashselltimer3
              className="bg-white_A700 flex flex-col h-[62px] items-center justify-start p-[7px] rounded-[50%] w-[100%]"
              thirtyfive="35"
              seconds="Seconds"
            />
          </List>
          <Button className="bg-green_A400 cursor-pointer font-medium font-poppins min-w-[171px] mt-[40px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
            Buy Now!
          </Button>
        </div>
        <div className="h-[500px] relative md:w-[100%] w-[57%]">
          <div className="absolute backdrop-opacity-[0.5] bg-bluegray_100_75 blur-[200.00px] h-[500px] inset-y-[0] left-[4%] my-[auto] rounded-[252px] w-[84%]"></div>
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[16px] w-[100%]">
            <Img
              src="images/img_jblboombox2hero020x1.png"
              className="h-[330px] md:h-[auto] my-[29px] object-cover w-[100%]"
              alt="jblboombox2hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index