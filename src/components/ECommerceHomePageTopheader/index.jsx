import React from "react";

import { Text, Img } from "components";

const ECommerceHomePageTopheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[231px] md:gap-[40px] items-start justify-between ml-[auto] mr-[124px] self-stretch md:w-[100%] w-[auto]">
          <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
            <Text
              className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
              variant="body5"
            >
              {props?.offer}
            </Text>
            <a
              className="font-poppins font-semibold text-[14px] text-center text-gray_50 underline w-[auto]"
              href="javascript:"
            >
              {props?.shopnow}
            </a>
          </div>
          <div className="flex flex-row gap-[5px] items-center justify-center self-stretch w-[auto]">
            <Text
              className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
              variant="body5"
            >
              {props?.language}
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="h-[24px] w-[24px]"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageTopheader.defaultProps = {
  offer: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
  shopnow: "ShopNow",
  language: "English",
};

export default ECommerceHomePageTopheader;
