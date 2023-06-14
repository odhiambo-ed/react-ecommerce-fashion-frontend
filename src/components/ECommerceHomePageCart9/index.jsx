import React from "react";

import { Button, Img, Text, RatingBar } from "components";

const ECommerceHomePageCart9 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col p-[12px] relative rounded-[4px] w-[100%]">
          <div className="flex items-center justify-start mx-[auto] w-[92%]">
            <div className="flex flex-row items-start justify-between w-[100%]">
              <Button className="bg-green_A400 cursor-pointer font-normal font-poppins mb-[50px] min-w-[51px] not-italic px-[12px] py-[4px] rounded-[4px] text-[12px] text-center text-gray_50 w-[auto]">
                {props?.new}
              </Button>
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[24px]"
                    alt="favorite"
                  />
                </Button>
                <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                  <Img
                    src="images/img_eye.svg"
                    className="h-[24px]"
                    alt="eye"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start mb-[auto] mt-[-53px] mx-[auto] p-[6px] w-[71%] z-[1]">
            <Img
              src="images/img_gp11prd31.png"
              className="h-[150px] md:h-[auto] my-[9px] object-cover w-[100%]"
              alt="gp11prdThirtyOne"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.gp11Shooterusb}
          </Text>
          <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
            <div className="flex items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-medium font-poppins text-left text-red_600 w-[auto]"
                variant="body3"
              >
                {props?.price}
              </Text>
            </div>
            <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-row items-start justify-start self-stretch w-[auto]">
                <RatingBar
                  className="rounded-[1px]"
                  value={4}
                  starCount={4}
                  color="#ffad33"
                  activeColor="#ffad33"
                  size={20}
                ></RatingBar>
                <Img
                  src="images/img_volume.svg"
                  className="h-[20px] w-[20px]"
                  alt="volume"
                />
              </div>
              <Text
                className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
                variant="body5"
              >
                {props?.fiftyfive}
              </Text>
            </div>
          </div>
          <Img
            src="images/img_contrast.svg"
            className="h-[20px] w-[48px]"
            alt="contrast"
          />
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart9.defaultProps = {
  new: "NEW",
  gp11Shooterusb: "GP11 Shooter USB Gamepad",
  price: "$660",
  fiftyfive: "(55)",
};

export default ECommerceHomePageCart9;
