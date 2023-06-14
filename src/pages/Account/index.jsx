import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Input, Button } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const AccountPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <ECommerceHomePageTopheader
            className="bg-black_900 flex flex-col items-end justify-start p-[12px] w-[100%]"
            offer="Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
            shopnow="ShopNow"
            language="English"
          />
          <ECommerceHomePageHeader
            className="flex flex-row flex-wrap font-inter items-center justify-between max-w-[1170px] mt-[40px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            exclusive="Exclusive"
            home="Home"
            contact="Contact"
            about="About"
            signup="Sign Up"
            user="images/img_user.svg"
          />
          <Img
            src="images/img_line3.svg"
            className="h-[1px] mt-[16px] w-[auto]"
            alt="lineThree"
          />
          <div className="flex flex-row font-poppins md:gap-[40px] items-start justify-between max-w-[1168px] mt-[79px] mx-[auto] md:px-[20px] w-[100%]">
            <CartRoadmap
              className="flex sm:flex-1 flex-row items-center justify-between self-stretch sm:w-[100%] w-[auto]"
              account="Home"
              nothing="My Account"
            />
            <Text
              className="font-normal not-italic text-black_900 text-left w-[auto]"
              variant="body5"
            ></Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[100px] md:gap-[40px] items-start justify-start max-w-[1170px] mt-[78px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[18%]">
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                variant="body3"
              >
                Manage My Account
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[35px] mt-[13px] self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-red_600 w-[auto]"
                  variant="body3"
                >
                  My Profile
                </Text>
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body3"
                >
                  Address Book
                </Text>
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body3"
                >
                  My Payment Options
                </Text>
              </div>
              <Text
                className="font-medium mt-[26px] text-black_900 text-left w-[auto]"
                variant="body3"
              >
                My Orders
              </Text>
              <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[35px] mt-[13px] self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body3"
                >
                  My Returns
                </Text>
                <Text
                  className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                  variant="body3"
                >
                  My Cancellations
                </Text>
              </div>
              <Text
                className="font-medium mt-[17px] text-black_900 text-left w-[auto]"
                variant="body3"
              >
                My WishList
              </Text>
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-start p-[38px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[75%]">
              <Text
                className="font-medium md:ml-[0] ml-[41px] text-left text-red_600 w-[auto]"
                variant="body1"
              >
                Edit Your Profile
              </Text>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[41px] mt-[15px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    First Name
                  </Text>
                  <Text
                    className="bg-gray_100 font-normal h-[50px] not-italic pl-[16px] sm:pr-[20px] pr-[35px] py-[12px] rounded-[4px] text-black_900_87 text-left w-[330px]"
                    variant="body3"
                  >
                    Md
                  </Text>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Last Name
                  </Text>
                  <Input
                    wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    name="placeboxinfo_One"
                    placeholder="Rimel"
                  ></Input>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start md:ml-[0] ml-[41px] mt-[23px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Email
                  </Text>
                  <Input
                    wrapClassName="bg-gray_100 pb-[10px] pl-[16px] pr-[35px] pt-[15px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    type="email"
                    name="email_One"
                    placeholder="rimel1111@gmail.com"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Address
                  </Text>
                  <Input
                    wrapClassName="bg-gray_100 pb-[10px] pl-[16px] pr-[35px] pt-[15px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    name="placeboxinfo_Two"
                    placeholder="Kingston, 5236, United State"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[41px] mt-[24px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Password Changes
                  </Text>
                  <Input
                    wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    name="placeboxinfo_Three"
                    placeholder="Current Passwod"
                  ></Input>
                </div>
                <Input
                  wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                  name="placeboxinfo_Four"
                  placeholder="New Passwod"
                ></Input>
                <Input
                  wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                  name="placeboxinfo_Five"
                  placeholder="Confirm New Passwod"
                ></Input>
              </div>
              <div className="flex flex-row gap-[32px] items-center justify-start ml-[auto] mt-[24px] self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                  variant="body3"
                >
                  Cancel
                </Text>
                <Button className="bg-red_600 cursor-pointer font-medium min-w-[214px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
          <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[140px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
