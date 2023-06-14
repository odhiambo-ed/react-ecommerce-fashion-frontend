import React from "react";

import { Img, Text } from "components";

const CartCartsection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[58px] mb-[4px] md:ml-[0] ml-[10px] relative md:w-[100%] w-[6%]">
          <div className="absolute bottom-[0] flex h-[54px] items-center justify-start p-[2px] right-[0] w-[54px]">
            {!!props?.g27Cq4500X5001 ? (
              <Img
                src={props?.g27Cq4500X5001}
                className="h-[39px] md:h-[auto] my-[5px] object-cover w-[100%]"
                alt="g27cq4500x5001"
              />
            ) : null}
          </div>
          {!!props?.close ? (
            <Img
              src={props?.close}
              className="absolute h-[24px] left-[0] top-[0] w-[24px]"
              alt="close"
            />
          ) : null}
        </div>
        <Text
          className="font-normal font-poppins md:ml-[0] ml-[20px] not-italic text-black_900 text-left w-[auto]"
          variant="body3"
        >
          {props?.lcdmonitor}
        </Text>
        <Text
          className="font-normal font-poppins md:ml-[0] ml-[177px] not-italic text-black_900 text-left w-[auto]"
          variant="body3"
        >
          {props?.price}
        </Text>
        <div className="flex items-center justify-start md:ml-[0] ml-[282px] outline outline-[1px] outline-black_900_66 p-[6px] rounded-[4px] md:w-[100%] w-[7%]">
          <div className="flex flex-row gap-[16px] items-center justify-start w-[48px]">
            {!!props?.one ? (
              <Text
                className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                {props?.one}
              </Text>
            ) : null}
            <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
              {!!props?.arrowup ? (
                <Img
                  src={props?.arrowup}
                  className="h-[16px] w-[16px]"
                  alt="arrowup"
                />
              ) : null}
              {!!props?.arrowdown ? (
                <Img
                  src={props?.arrowdown}
                  className="h-[16px] w-[16px]"
                  alt="arrowdown"
                />
              ) : null}
            </div>
          </div>
        </div>
        <Text
          className="font-normal font-poppins md:ml-[0] ml-[281px] not-italic text-black_900 text-left w-[auto]"
          variant="body3"
        >
          {props?.priceOne}
        </Text>
      </div>
    </>
  );
};

CartCartsection.defaultProps = {
  lcdmonitor: "LCD Monitor",
  price: "$650",
  priceOne: "$650",
};

export default CartCartsection;
