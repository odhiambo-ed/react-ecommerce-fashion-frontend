import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, List, Button, Input } from "components";
import CartRoadmap from "components/CartRoadmap";
import CartColumnproduct from "components/CartColumnproduct";
import CartCartsection from "components/CartCartsection";
import CartColumncarttotal from "components/CartColumncarttotal";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const CartPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
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
        </div>
        <CartRoadmap
          className="flex flex-row items-center justify-start md:ml-[0] ml-[135px] mt-[79px] md:px-[20px] self-stretch sm:w-[100%] w-[auto]"
          account="Home"
          nothing="Cart"
        />
        <div className="flex flex-col gap-[140px] md:gap-[40px] items-center mt-[80px] w-[100%]">
          <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start max-w-[1170px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[40px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <CartColumnproduct
                  className="bg-white_A700 flex flex-col items-center justify-end p-[22px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]"
                  product="Product"
                  price="Price"
                  quantity="Quantity"
                  subtotal="Subtotal"
                />
                <List
                  className="flex-col gap-[40px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <CartCartsection
                    className="bg-white_A700 flex flex-1 flex-row items-center justify-start p-[20px] rounded-[4px] shadow-bs w-[100%]"
                    g27Cq4500X5001="images/img_g27cq4500x5001_39x50.png"
                    close="images/img_close_red_600.svg"
                    lcdmonitor="LCD Monitor"
                    price="$650"
                    one="01"
                    arrowup="images/img_arrowup_black_900.svg"
                    arrowdown="images/img_arrowdown_black_900.svg"
                    priceOne="$650"
                  />
                  <CartCartsection
                    className="bg-white_A700 flex flex-1 flex-row items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]"
                    lcdmonitor="H1 Gamepad"
                    price="$550"
                    priceOne="$1100"
                  />
                </List>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-[40px] gap-[757px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                <Button className="border-[1px] border-black_900_7f border-solid cursor-pointer font-medium min-w-[218px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-black_900 text-center w-[auto]">
                  Return To Shop
                </Button>
                <Button className="border-[1px] border-black_900_7f border-solid cursor-pointer font-medium min-w-[195px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-black_900 text-center w-[auto]">
                  Update Cart
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[173px] md:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
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
              <CartColumncarttotal
                className="border-[1px] border-black_900 border-solid flex flex-col items-start justify-center p-[24px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[auto]"
                carttotal="Cart Total"
                subtotalOne="Subtotal:"
                priceOne="$1750"
                shipping="Shipping:"
                free="Free"
                total="Total:"
                priceTwo="$1750"
              />
            </div>
          </div>
          <ECommerceHomePageFooter className="bg-black_900 flex items-center justify-center md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
