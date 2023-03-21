import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart4 = (props) => {
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
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] sm:px-[20px] px-[37px] w-[71%]">
            <Img
              src="images/img_71rdoexxtrl1.png"
              className="h-[180px] md:h-[auto] object-cover w-[100%]"
              alt="71rdoexxtrlOne"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.breeddrydogfoodOne}
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
                src="images/img_ticket_black_900_20x100.svg"
                className="h-[20px] w-[100px]"
                alt="ticket"
              />
              <Text
                className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
                variant="body5"
              >
                {props?.thirtyfive}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart4.defaultProps = {
  breeddrydogfoodOne: "Breed Dry Dog Food",
  price: "$100",
  thirtyfive: "(35)",
};

export default ECommerceHomePageCart4;
