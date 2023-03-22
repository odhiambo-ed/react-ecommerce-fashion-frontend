import React from 'react'
import { Img, Text, Button, List } from "components";

const index = () => {
  return (
    <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] max-w-[1170px] mt-[79px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
      <div className="flex flex-col sm:flex-col md:gap-[40px] self-stretch md:w-[100%] w-[auto]">
        <div className="flex flex-col gap-[20px] self-stretch sm:w-[100%] w-[auto]">
          <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
            <div className="bg-red_600 h-[40px] rounded-[4px] w-[2%]"></div>
            <Text
              className="font-semibold text-left text-red_600 w-[auto]"
              variant="body3"
            >
              Categories
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <Text
                className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Browse By Category
              </Text>
            </div>
            <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
              <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="h-[24px]"
                  alt="arrowleft_One"
                />
              </Button>
              <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="h-[24px]"
                  alt="arrowright_Four"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <List
        className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-start self-stretch md:w-[100%] w-[auto]"
        orientation="horizontal"
      >
        <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-col gap-[16px] items-center justify-end hover:mx-[0] p-[23px] sm:px-[20px] rounded-[4px] hover:shadow-bs hover:w-[100%] w-[100%]">
          <Img
            src="images/img_mobile.svg"
            className="h-[56px] w-[56px]"
            alt="mobile"
          />
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            Phones
          </Text>
        </div>
        <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-col gap-[18px] items-center justify-end hover:mx-[0] p-[21px] sm:px-[20px] rounded-[4px] hover:shadow-bs hover:w-[100%] w-[100%]">
          <Img
            src="images/img_computer.svg"
            className="h-[56px] mt-[3px] w-[56px]"
            alt="computer"
          />
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            Computers
          </Text>
        </div>
        <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-col gap-[16px] items-center justify-end hover:mx-[0] p-[23px] sm:px-[20px] rounded-[4px] hover:shadow-bs hover:w-[100%] w-[100%]">
          <Img
            src="images/img_trash.svg"
            className="h-[56px] w-[56px]"
            alt="trash"
          />
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            SmartWatch
          </Text>
        </div>
        <div className="bg-red_600 hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-col gap-[16px] items-center justify-end hover:mx-[0] p-[23px] sm:px-[20px] rounded-[4px] hover:shadow-bs shadow-bs hover:w-[100%] w-[100%]">
          <Img
            src="images/img_camera.svg"
            className="h-[56px] w-[56px]"
            alt="camera"
          />
          <Text
            className="font-normal not-italic text-gray_50 text-left w-[auto]"
            variant="body3"
          >
            Camera
          </Text>
        </div>
        <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-col gap-[16px] items-center justify-end hover:mx-[0] p-[23px] sm:px-[20px] rounded-[4px] hover:shadow-bs hover:w-[100%] w-[100%]">
          <Img
            src="images/img_music.svg"
            className="h-[56px] w-[56px]"
            alt="music"
          />
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            HeadPhones
          </Text>
        </div>
        <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-col gap-[18px] items-center justify-end hover:mx-[0] p-[21px] sm:px-[20px] rounded-[4px] hover:shadow-bs hover:w-[100%] w-[100%]">
          <Img
            src="images/img_calculator.svg"
            className="h-[56px] mt-[3px] w-[56px]"
            alt="calculator"
          />
          <Text
            className="font-normal not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            Gaming
          </Text>
        </div>
      </List>
    </div>
  );
}

export default index