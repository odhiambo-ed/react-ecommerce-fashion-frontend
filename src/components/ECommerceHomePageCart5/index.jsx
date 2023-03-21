import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col gap-[14px] justify-start pt-[12px] rounded-[4px] w-[100%]">
          <div className="md:h-[180px] h-[183px] md:ml-[0] ml-[36px] relative w-[83%]">
            <div className="absolute flex flex-col gap-[8px] items-center justify-start right-[0] self-stretch top-[0] w-[auto]">
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
            <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[8px] w-[86%]">
              <Img
                src="images/img_eos250d03500x500.png"
                className="h-[163px] md:h-[auto] object-cover w-[84%]"
                alt="eos250d03500xFifty"
              />
            </div>
          </div>
          <div className="bg-black_900 flex items-center justify-start p-[8px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
            <Text
              className="font-medium font-poppins text-left text-white_A700 w-[auto]"
              variant="body3"
            >
              {props?.addtocart}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.canoneosdslrcamOne}
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
                {props?.ninetyfive}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart5.defaultProps = {
  addtocart: "Add To Cart",
  canoneosdslrcamOne: "CANON EOS DSLR Camera",
  price: "$360",
  ninetyfive: "(95)",
};

export default ECommerceHomePageCart5;
