import React from "react";

import { Button, Img, Text } from "components";

const WishlistCart7 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 flex flex-col gap-[7px] justify-end pt-[12px] rounded-[4px] w-[100%]">
          <div className="md:h-[180px] h-[190px] md:ml-[0] ml-[40px] mr-[12px] relative w-[81%]">
            <div className="absolute flex items-center justify-start right-[0] top-[0] w-[34px]">
              <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
                <Img
                  src="images/img_eye.svg"
                  className="h-[24px]"
                  alt="eye_Three"
                />
              </Button>
            </div>
            <div className="absolute bottom-[0] flex items-center justify-end left-[0] py-[39px] w-[88%]">
              <Img
                src="images/img_ak90001500x500.png"
                className="h-[101px] md:h-[auto] object-cover w-[100%]"
                alt="ak90001500x500"
              />
            </div>
          </div>
          <div className="bg-black_900 flex items-center justify-end p-[8px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
            <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_cart_white_a700.svg"
                className="h-[24px] w-[24px]"
                alt="cart_Three"
              />
              <Text
                className="font-normal font-poppins not-italic text-left text-white_A700 w-[auto]"
                variant="body6"
              >
                {props?.addtocartThree}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.ak900WiredkeyboOne}
          </Text>
          <div className="flex items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-medium font-poppins text-left text-red_600 w-[auto]"
              variant="body3"
            >
              {props?.priceThree}
            </Text>
          </div>
          <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
            <Img
              src="images/img_ticket.svg"
              className="h-[20px] w-[100px]"
              alt="ticket_Three"
            />
            <Text
              className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
              variant="body5"
            >
              {props?.sixtyfiveThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WishlistCart7.defaultProps = {
  addtocartThree: "Add To Cart",
  ak900WiredkeyboOne: "AK-900 Wired Keyboard",
  priceThree: "$200",
  sixtyfiveThree: "(65)",
};

export default WishlistCart7;