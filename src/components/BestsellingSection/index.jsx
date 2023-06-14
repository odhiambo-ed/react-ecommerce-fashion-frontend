import React from "react";
import { Text, Button, List } from "components";
import ECommerceHomePageCart from "components/ECommerceHomePageCart";
import ECommerceHomePageCart1 from "components/ECommerceHomePageCart1";
import ECommerceHomePageCart2 from "components/ECommerceHomePageCart2";
import ECommerceHomePageCart3 from "components/ECommerceHomePageCart3";

const index = () => {
  return (
    <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-start justify-start max-w-[1170px] mt-[69px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
      <div className="flex flex-col sm:flex-col md:gap-[40px] self-stretch md:w-[100%] w-[auto]">
        <div className="flex flex-col gap-[20px] self-stretch sm:w-[100%] w-[auto]">
          <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
            <div className="bg-red_600 h-[40px] rounded-[4px] w-[2%]"></div>
            <Text
              className="font-semibold text-left text-red_600 w-[auto]"
              variant="body3"
            >
              This Month
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Text
              className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
              as="h4"
              variant="h4"
            >
              Best Selling Products
            </Text>
            <Button className="bg-red_600 cursor-pointer font-medium min-w-[159px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
              View All
            </Button>
          </div>
        </div>
      </div>
      <List
        className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch md:w-[100%] w-[auto]"
        orientation="horizontal"
      >
        <ECommerceHomePageCart
          className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
          thenorthcoat="The north coat"
          price="$260"
          oldprice="$360"
          sixtyfive="(65)"
        />
        <ECommerceHomePageCart1
          className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
          guccidufflebag="Gucci duffle bag"
          price="$960"
          oldprice="$1160"
          sixtyfive="(65)"
        />
        <ECommerceHomePageCart2
          className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
          rgbliquidcpucooOne="RGB liquid CPU Cooler"
          price="$160"
          oldprice="$170"
          sixtyfive="(65)"
        />
        <ECommerceHomePageCart3
          className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
          smallbookself="Small BookSelf"
          price="$360"
          sixtyfive="(65)"
        />
      </List>
    </div>
  );
};

export default index;
