import React from 'react'
import { Img, Text, Line } from "components";

const HeroItemOne = () => {
  return (
      <>
          <Img
              src="images/img_heroendframe.png"
              className="absolute bottom-[0] h-[328px] object-cover right-[0] w-[56%]"
              alt="heroendframe"
          />
          <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[7%] my-[auto] w-[33%]">
              <div className="flex flex-row font-poppins gap-[24px] items-center justify-start self-stretch w-[auto]">
                  <Img
                      src="images/img_1200pxapplegraylogo.png"
                      className="h-[49px] md:h-[auto] object-cover w-[40px]"
                      alt="1200pxapplegray"
                  />
                  <Text
                      className="font-normal not-italic text-center text-gray_50 w-[auto]"
                      variant="body3"
                  >
                      iPhone 14 Series
                  </Text>
              </div>
              <Text
                  className="font-inter font-semibold leading-[60.00px] mt-[20px] text-gray_50 text-left tracking-[1.92px] w-[100%]"
                  as="h3"
                  variant="h3"
              >
                  Up to 10% off Voucher
              </Text>
              <div className="flex flex-row font-poppins gap-[8px] items-center justify-start md:ml-[0] ml-[3px] mt-[22px] self-stretch w-[auto]">
                  <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                      <Text
                          className="font-medium text-center text-gray_50 w-[auto]"
                          variant="body3"
                      >
                          Shop Now
                      </Text>
                      <Line className="bg-gray_50 h-[1px] w-[100%]" />
                  </div>
                  <Img
                      src="images/img_arrowright_gray_50.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright_Two"
                  />
              </div>
          </div> 
    </>
  )
}

export default HeroItemOne