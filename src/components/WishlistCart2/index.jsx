import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col gap-[7px] justify-end pt-[12px] rounded-[4px] w-[100%]">
          <div className="md:h-[180px] h-[190px] md:ml-[0] ml-[40px] mr-[12px] relative w-[81%]">
            <div className="absolute flex items-center justify-start right-[0] top-[0] w-[34px]">
              <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                <Img
                  src="images/img_trash_black_900.svg"
                  className="h-[24px]"
                  alt="trash_Two"
                />
              </Button>
            </div>
            <div className="absolute bottom-[0] flex items-center justify-start left-[0] p-[6px] w-[88%]">
              <Img
                src="images/img_gp11prd31.png"
                className="h-[150px] md:h-[auto] my-[9px] object-cover w-[100%]"
                alt="gp11prdThirtyOne"
              />
            </div>
          </div>
          <div className="bg-black_900 flex items-center justify-start p-[8px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
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
            {props?.gp11Shooterusb}
          </Text>
          <div className="flex items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-medium font-poppins text-left text-red_600 w-[auto]"
              variant="body3"
            >
              {props?.priceTwo}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart2.defaultProps = {
  addtocartTwo: "Add To Cart",
  gp11Shooterusb: "GP11 Shooter USB Gamepad",
  priceTwo: "$550",
};

export default WishlistCart2;
