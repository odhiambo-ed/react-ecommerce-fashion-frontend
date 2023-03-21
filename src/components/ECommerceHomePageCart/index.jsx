import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 md:h-[180px] h-[250px] p-[12px] relative rounded-[4px] w-[100%]">
          <div className="absolute flex flex-col gap-[8px] items-center justify-start right-[5%] self-stretch top-[5%] w-[auto]">
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
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[17px] w-[71%]">
            <Img
              src="images/img_672462zah9d56.png"
              className="h-[146px] md:h-[auto] object-cover w-[90%]"
              alt="672462zah9dFiftySix"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.thenorthcoat}
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
              src="images/img_ticket.svg"
              className="h-[20px] w-[100px]"
              alt="ticket"
            />
            <Text
              className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
              variant="body5"
            >
              {props?.sixtyfive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart.defaultProps = {
  thenorthcoat: "The north coat",
  price: "$260",
  oldprice: "$360",
  sixtyfive: "(65)",
};

export default ECommerceHomePageCart;
