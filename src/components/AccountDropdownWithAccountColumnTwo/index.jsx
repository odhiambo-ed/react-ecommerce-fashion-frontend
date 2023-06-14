import React from "react";

import { Img, Text } from "components";

const AccountDropdownWithAccountColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black_900_0a flex items-center justify-end p-[9px] rounded-[4px] w-[100%]">
          <div className="flex flex-col gap-[13px] items-start justify-start mt-[8px] self-stretch w-[auto]">
            <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_user_gray_50.svg"
                className="h-[32px] w-[32px]"
                alt="user_One"
              />
              <Text
                className="font-normal font-poppins not-italic text-center text-gray_50 w-[auto]"
                variant="body5"
              >
                {props?.managemyaccountOne}
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_computer_gray_50.svg"
                className="h-[24px] w-[24px]"
                alt="computer"
              />
              <Text
                className="font-normal font-poppins not-italic text-center text-gray_50 w-[auto]"
                variant="body5"
              >
                {props?.myorder}
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_close.svg"
                className="h-[24px] w-[24px]"
                alt="close"
              />
              <Text
                className="font-normal font-poppins not-italic text-center text-gray_50 w-[auto]"
                variant="body5"
              >
                {props?.mycancellationsOne}
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_home.svg"
                className="h-[24px] rounded-[1px] w-[24px]"
                alt="home_One"
              />
              <Text
                className="font-normal font-poppins not-italic text-center text-gray_50 w-[auto]"
                variant="body5"
              >
                {props?.myreviews}
              </Text>
            </div>
            <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_arrowleft.svg"
                className="h-[24px] w-[24px]"
                alt="arrowleft"
              />
              <Text
                className="font-normal font-poppins not-italic text-center text-gray_50 w-[auto]"
                variant="body5"
              >
                {props?.logout}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountDropdownWithAccountColumnTwo.defaultProps = {
  managemyaccountOne: "Manage My Account",
  myorder: "My Order",
  mycancellationsOne: "My Cancellations",
  myreviews: "My Reviews",
  logout: "Logout",
};

export default AccountDropdownWithAccountColumnTwo;
