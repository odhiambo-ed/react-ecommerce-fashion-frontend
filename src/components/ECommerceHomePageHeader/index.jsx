import React from "react";

import { Text, Img, List } from "components";

const ECommerceHomePageHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-[160px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
          <div className="flex items-center justify-start sm:w-[100%] w-[auto]">
            <Text
              className="font-bold font-inter text-black_900 text-left tracking-[0.72px] w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.exclusive}
            </Text>
          </div>
          <div className="flex flex-row gap-[48px] items-start justify-start self-stretch w-[auto]">
            <div className="flex items-center justify-start w-[auto]">
              {!!props?.home ? (
                <Text
                  className="font-normal font-poppins not-italic text-black_900 text-center w-[auto]"
                  variant="body3"
                >
                  {props?.home}
                </Text>
              ) : null}
            </div>
            <div className="flex items-center justify-start w-[auto]">
              {!!props?.contact ? (
                <Text
                  className="font-normal font-poppins not-italic text-black_900 text-center w-[auto]"
                  variant="body3"
                >
                  {props?.contact}
                </Text>
              ) : null}
            </div>
            <div className="flex items-center justify-start w-[auto]">
              {!!props?.about ? (
                <Text
                  className="font-normal font-poppins not-italic text-black_900 text-center w-[auto]"
                  variant="body3"
                >
                  {props?.about}
                </Text>
              ) : null}
            </div>
            <div className="flex items-center justify-start pt-[2px] w-[auto]">
              {!!props?.signup ? (
                <Text
                  className="font-normal font-poppins not-italic text-black_900 text-center w-[auto]"
                  variant="body3"
                >
                  {props?.signup}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
          <div className="bg-gray_100 flex items-center justify-center pl-[20px] pr-[12px] py-[7px] rounded-[4px] self-stretch w-[auto]">
            <div className="flex flex-row gap-[34px] items-center justify-center self-stretch w-[auto]">
              <Text
                className="font-normal font-poppins not-italic text-black_900_87 text-left w-[auto]"
                variant="body6"
              >
                {props?.whatareyoulookiOne}
              </Text>
              <Img
                src="images/img_search.svg"
                className="h-[24px] w-[24px]"
                alt="search"
              />
            </div>
          </div>
          <div className="flex flex-row gap-[16px] items-center justify-center self-stretch w-[auto]">
            <List
              className="sm:flex-col flex-row gap-[16px] grid grid-cols-2 w-[63%]"
              orientation="horizontal"
            >
              <div className="md:h-[18px] h-[32px] pb-[6px] pl-[6px] relative w-[100%]">
                {!!props?.favorite ? (
                  <Img
                    src={props?.favorite}
                    className="absolute h-[18px] inset-[0] justify-center m-[auto] w-[auto]"
                    alt="favorite"
                  />
                ) : null}
                <div className="absolute h-[17px] md:h-[18px] right-[0] top-[0] w-[16px]">
                  {!!props?.ellipseone ? (
                    <div className="absolute bg-red_600 h-[16px] inset-[0] justify-center m-[auto] rounded-[50%] w-[16px]"></div>
                  ) : null}
                  {!!props?.four ? (
                    <Text
                      className="absolute font-normal font-poppins h-[max-content] inset-y-[0] left-[25%] my-[auto] not-italic text-center text-gray_50 w-[auto]"
                      variant="body6"
                    >
                      {props?.four}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="md:h-[24px] h-[32px] relative w-[100%]">
                {!!props?.cart ? (
                  <Img
                    src={props?.cart}
                    className="absolute bottom-[0] h-[24px] left-[0] w-[24px]"
                    alt="cart"
                  />
                ) : null}
                <div className="absolute h-[18px] right-[0] top-[0] w-[50%]">
                  {!!props?.ellipseone1 ? (
                    <div className="absolute bg-red_600 bottom-[0] h-[16px] inset-x-[0] mx-[auto] rounded-[50%] w-[16px]"></div>
                  ) : null}
                  {!!props?.two ? (
                    <Text
                      className="absolute font-normal font-poppins h-[100%] inset-y-[0] my-[auto] not-italic right-[25%] text-center text-gray_50 w-[auto]"
                      variant="body6"
                    >
                      {props?.two}
                    </Text>
                  ) : null}
                </div>
              </div>
            </List>
            {!!props?.user ? (
              <Img src={props?.user} className="h-[32px] w-[32px]" alt="user" />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageHeader.defaultProps = {
  exclusive: "Exclusive",
  whatareyoulookiOne: "What are you looking for?",
};

export default ECommerceHomePageHeader;
