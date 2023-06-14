import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col gap-[14px] items-center justify-start pt-[12px] rounded-[4px] w-[100%]">
          <div className="flex flex-col relative w-[92%]">
            <div className="flex items-center justify-start mx-[auto] w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Button className="bg-red_600 cursor-pointer font-normal font-poppins mb-[50px] min-w-[55px] not-italic px-[12px] py-[4px] rounded-[4px] text-[12px] text-center text-gray_50 w-[auto]">
                  {props?._35}
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
            <div className="flex items-center justify-end mb-[auto] mt-[-73px] mx-[auto] py-[39px] w-[78%] z-[1]">
              <Img
                src="images/img_ak90001500x500.png"
                className="h-[101px] md:h-[auto] object-cover w-[100%]"
                alt="ak90001500x500"
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
            {props?.ak900WiredkeyboOne}
          </Text>
          <div className="flex flex-row gap-[12px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-medium font-poppins text-left text-red_600 w-[auto]"
              variant="body3"
            >
              {props?.price}
            </Text>
            <Text
              className="font-medium font-poppins line-through text-black_900_87 text-left w-[auto]"
              variant="body3"
            >
              {props?.oldprice}
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
              {props?.seventyfive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageColumnOne.defaultProps = {
  _35: "-35%",
  addtocart: "Add To Cart",
  ak900WiredkeyboOne: "AK-900 Wired Keyboard",
  price: "$960",
  oldprice: "$1160",
  seventyfive: "(75)",
};

export default ECommerceHomePageColumnOne;
