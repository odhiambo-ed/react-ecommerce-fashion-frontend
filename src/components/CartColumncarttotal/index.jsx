import React from "react";

import { Text, Img, Button } from "components";

const CartColumncarttotal = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-medium font-poppins mt-[6px] text-black_900 text-left w-[auto]"
          variant="body1"
        >
          {props?.carttotal}
        </Text>
        <div className="flex flex-row gap-[307px] items-start justify-between mt-[23px] self-stretch sm:w-[100%] w-[auto]">
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.subtotalOne}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.priceOne}
          </Text>
        </div>
        <Img
          src="images/img_underline_black_900.svg"
          className="h-[1px] mt-[15px] w-[auto]"
          alt="underline"
        />
        <div className="flex flex-row gap-[314px] items-start justify-between mt-[16px] self-stretch sm:w-[100%] w-[auto]">
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.shipping}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.free}
          </Text>
        </div>
        <Img
          src="images/img_underline_black_900.svg"
          className="h-[1px] mt-[14px] w-[auto]"
          alt="underline_One"
        />
        <div className="flex flex-row gap-[335px] items-start justify-between mt-[16px] self-stretch sm:w-[100%] w-[auto]">
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.total}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.priceTwo}
          </Text>
        </div>
        <Button className="bg-red_600 cursor-pointer font-medium font-poppins mb-[8px] min-w-[260px] md:ml-[0] ml-[65px] mt-[15px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
          {props?.proceesToCheckout}
        </Button>
      </div>
    </>
  );
};

CartColumncarttotal.defaultProps = {
  carttotal: "Cart Total",
  subtotalOne: "Subtotal:",
  priceOne: "$1750",
  shipping: "Shipping:",
  free: "Free",
  total: "Total:",
  priceTwo: "$1750",
};

export default CartColumncarttotal;
