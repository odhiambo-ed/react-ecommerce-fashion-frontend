import React from "react";

import { Text, Button, Img } from "components";

const WishlistCart6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col gap-[7px] items-center justify-end pt-[12px] rounded-[4px] w-[100%]">
          <div className="flex flex-col relative w-[92%]">
            <div className="flex items-center justify-start mx-[auto] w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <div className="bg-green_A400 flex items-center justify-center mb-[8px] px-[12px] py-[4px] rounded-[4px] self-stretch w-[auto]">
                  <Text
                    className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
                    variant="body6"
                  >
                    {props?.new}
                  </Text>
                </div>
                <div className="flex items-start justify-start w-[34px]">
                  <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                    <Img
                      src="images/img_eye.svg"
                      className="h-[24px]"
                      alt="eye_Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[-24px] mx-[auto] p-[9px] w-[78%] z-[1]">
              <Img
                src="images/img_g922500x5001.png"
                className="h-[152px] md:h-[auto] my-[5px] object-cover w-[100%]"
                alt="g922500x5001"
              />
            </div>
          </div>
          <div className="bg-black_900 flex items-center justify-end p-[8px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
            <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_cart_white_a700.svg"
                className="h-[24px] w-[24px]"
                alt="cart_Two"
              />
              <Text
                className="font-normal font-poppins not-italic text-left text-white_A700 w-[auto]"
                variant="body6"
              >
                {props?.addtocartTwo}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.havithvg92GamepOne}
          </Text>
          <div className="flex items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-medium font-poppins text-left text-red_600 w-[auto]"
              variant="body3"
            >
              {props?.priceTwo}
            </Text>
          </div>
          <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
            <Img
              src="images/img_ticket.svg"
              className="h-[20px] w-[100px]"
              alt="ticket_Two"
            />
            <Text
              className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
              variant="body5"
            >
              {props?.sixtyfiveTwo}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart6.defaultProps = {
  new: "NEW",
  addtocartTwo: "Add To Cart",
  havithvg92GamepOne: "HAVIT HV-G92 Gamepad",
  priceTwo: "$560",
  sixtyfiveTwo: "(65)",
};

export default WishlistCart6;
