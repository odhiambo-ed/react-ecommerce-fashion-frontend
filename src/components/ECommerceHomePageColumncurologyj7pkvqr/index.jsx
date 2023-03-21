import React from "react";

import { Img, Button, Text } from "components";

const ECommerceHomePageColumncurologyj7pkvqr = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-row items-center justify-end p-[12px] rounded-[4px] w-[100%]">
          <Img
            src="images/img_curologyj7pkvqrtusmunsplash.png"
            className="h-[159px] md:h-[auto] my-[33px] object-cover w-[70%]"
            alt="curologyj7pkvqr"
          />
          <div className="flex flex-col gap-[8px] items-start justify-start ml-[3px] self-stretch w-[auto]">
            <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
              <Img
                src="images/img_favorite.svg"
                className="h-[24px]"
                alt="favorite"
              />
            </Button>
            <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
              <Img src="images/img_eye.svg" className="h-[24px]" alt="eye" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.language}
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
              <Img
                src="images/img_ticket_black_900.svg"
                className="h-[20px] w-[100px]"
                alt="ticket"
              />
              <Text
                className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
                variant="body5"
              >
                {props?.onehundredfortyfive}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumncurologyj7pkvqr.defaultProps = {
  language: "Curology Product Set ",
  price: "$500",
  onehundredfortyfive: "(145)",
};

export default ECommerceHomePageColumncurologyj7pkvqr;
