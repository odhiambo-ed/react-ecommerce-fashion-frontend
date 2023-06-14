import React from "react";

import { List, Img, Text } from "components";

const ECommerceHomePageListcut = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col gap-[24px] items-center justify-start self-stretch w-[auto]">
          <div
            className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[20px] w-[80px]"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img src={props?.cut} className="h-[40px] w-[40px]" alt="cut" />
          </div>
          <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
            <Text
              className="font-poppins font-semibold text-black_900 text-left w-[auto]"
              variant="body1"
            >
              {props?.price}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-black_900 text-center w-[auto]"
              variant="body5"
            >
              {props?.priceOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-center justify-start w-[auto]">
          <div
            className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[20px] w-[80px]"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img src={props?.music} className="h-[40px] w-[40px]" alt="music" />
          </div>
          <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
            <Text
              className="font-poppins font-semibold text-black_900 text-left w-[auto]"
              variant="body1"
            >
              {props?.p247CustomerservOne}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
              variant="body5"
            >
              {props?.friendly247CustOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-center justify-start self-stretch w-[auto]">
          <div
            className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[20px] w-[80px]"
            style={{ backgroundImage: "url('images/img_services.svg')" }}
          >
            <Img
              src={props?.checkmark}
              className="h-[40px] w-[40px]"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-center justify-start self-stretch w-[auto]">
            <Text
              className="font-poppins font-semibold text-black_900 text-left w-[auto]"
              variant="body1"
            >
              {props?.moneybackguaranOne}
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
              variant="body5"
            >
              {props?.duration}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

ECommerceHomePageListcut.defaultProps = {
  price: "FREE AND FAST DELIVERY",
  priceOne: "Free delivery for all orders over $140",
  p247CustomerservOne: "24/7 CUSTOMER SERVICE",
  friendly247CustOne: "Friendly 24/7 customer support",
  moneybackguaranOne: "MONEY BACK GUARANTEE",
  duration: "We reurn money within 30 days",
};

export default ECommerceHomePageListcut;
