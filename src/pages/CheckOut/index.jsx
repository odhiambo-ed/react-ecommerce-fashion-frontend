import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Input, CheckBox, Radio, Button } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const CheckOutPage = () => {
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
            user="images/img_user_black_900.svg"
          />
          <Img
            src="images/img_line3.svg"
            className="h-[1px] mt-[16px] w-[auto]"
            alt="lineThree"
          />
          <CartRoadmap
            className="flex flex-row font-poppins items-center justify-start mt-[79px] md:px-[20px] self-stretch sm:w-[100%] w-[auto]"
            account="Account"
            nothing="My Account"
            nothingOne="Product"
            nothingTwo="View Cart"
            nothingThree="CheckOut"
          />
          <div className="flex font-inter items-start justify-start mt-[74px] md:px-[20px] self-stretch w-[auto]">
            <Text
              className="font-medium text-black_900 text-left tracking-[1.44px] w-[auto]"
              as="h4"
              variant="h4"
            >
              Billing Details
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-[40px] items-start justify-between max-w-[1170px] mt-[37px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-col gap-[24px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[32px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  ></Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame803"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  >
                    Company Name
                  </Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame803_One"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  ></Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame804"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  >
                    Apartment, floor, etc. (optional)
                  </Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame805"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  ></Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame806"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  ></Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame807"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  ></Text>
                  <Input
                    wrapClassName="bg-gray_100 flex h-[50px] rounded-[4px] w-[100%]"
                    className="p-[0] w-[100%]"
                    name="frame808"
                    placeholder=""
                  ></Input>
                </div>
              </div>
              <CheckBox
                className="font-normal not-italic text-[16px] text-black_900 text-left"
                inputClassName="bg-red_600 h-[24px] mr-[5px] rounded-[4px] w-[24px]"
                name="savethisinforma_One"
                id="savethisinforma_One"
                label="Save this information for faster check-out next time"
              ></CheckBox>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[32px] items-start justify-start md:mt-[0] mt-[32px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[32px] items-end justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex h-[54px] items-center justify-start p-[2px] w-[54px]">
                    <Img
                      src="images/img_g922500x5001.png"
                      className="h-[42px] md:h-[auto] my-[3px] object-cover w-[96%]"
                      alt="g922500x5001"
                    />
                  </div>
                  <div className="flex flex-row gap-[210px] items-center justify-between self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      LCD Monitor
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      $650
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex h-[54px] items-center justify-start p-[2px] w-[54px]">
                    <Img
                      src="images/img_g27cq4500x5001_39x50.png"
                      className="h-[39px] md:h-[auto] my-[5px] object-cover w-[100%]"
                      alt="g27cq4500x5001"
                    />
                  </div>
                  <div className="flex flex-row gap-[204px] items-center justify-between self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      H1 Gamepad
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      $1100
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[307px] items-start justify-between self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body3"
                        >
                          Subtotal:
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body3"
                        >
                          $1750
                        </Text>
                      </div>
                      <Img
                        src="images/img_underline_black_900.svg"
                        className="h-[1px] w-[422px]"
                        alt="underline"
                      />
                    </div>
                    <div className="flex flex-row gap-[314px] items-start justify-between self-stretch sm:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Shipping:
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body3"
                      >
                        Free
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_underline_black_900.svg"
                    className="h-[1px] w-[422px]"
                    alt="underline_One"
                  />
                </div>
                <div className="flex flex-row gap-[335px] items-start justify-between self-stretch sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Total:
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    $1750
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[155px] items-center justify-between self-stretch sm:w-[100%] w-[auto]">
                <Radio
                  value="Bank"
                  className="font-normal not-italic text-[16px] text-black_900 text-left"
                  inputClassName="border-[1px] border-black_900 border-solid h-[24px] mr-[5px] w-[24px]"
                  checked={false}
                  name="bank"
                  label="Bank"
                  id="Bank"
                ></Radio>
                <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex items-center justify-start p-[2px] w-[22%]">
                    <Img
                      src="images/img_image32.png"
                      className="h-[16px] md:h-[auto] my-[3px] object-cover w-[98%]"
                      alt="imageThirtyTwo"
                    />
                  </div>
                  <div className="flex items-center justify-start p-[2px] w-[22%]">
                    <Img
                      src="images/img_image30.png"
                      className="h-[11px] md:h-[auto] my-[6px] object-cover w-[98%]"
                      alt="imageThirty"
                    />
                  </div>
                  <div className="flex items-center justify-start w-[22%]">
                    <Img
                      src="images/img_image31.png"
                      className="h-[25px] md:h-[auto] object-cover w-[93%]"
                      alt="imageThirtyOne"
                    />
                  </div>
                  <div className="flex items-center justify-start w-[22%]">
                    <Img
                      src="images/img_image33.png"
                      className="h-[18px] md:h-[auto] my-[3px] object-cover w-[93%]"
                      alt="imageThirtyThree"
                    />
                  </div>
                </div>
              </div>
              <Radio
                value="Cashondelivery"
                className="font-normal not-italic text-[16px] text-black_900 text-left"
                inputClassName="border-[1px] border-black_900 border-solid h-[24px] mr-[5px] rounded-[12px] w-[24px]"
                checked={true}
                name="cashondelivery"
                label="Cash on delivery"
                id="Cashondelivery"
              ></Radio>
              <div className="flex sm:flex-col flex-row gap-[16px] items-end justify-start self-stretch sm:w-[100%] w-[auto]">
                <Input
                  wrapClassName="border-[1px] border-black_900 border-solid pb-[13px] pl-[24px] pr-[35px] pt-[18px] rounded-[4px] sm:w-[100%] w-[57%]"
                  className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:px-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                  name="frame798"
                  placeholder="Coupon Code"
                ></Input>
                <Button className="bg-red_600 cursor-pointer font-medium min-w-[211px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                  Apply Coupon
                </Button>
              </div>
              <Button className="bg-red_600 cursor-pointer font-medium min-w-[190px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                Place Order
              </Button>
            </div>
          </div>
          <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[140px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
