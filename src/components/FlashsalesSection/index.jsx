import React from 'react'
import { Img, Text, Button, List } from "components";
import ECommerceHomePageRowdays from "components/ECommerceHomePageRowdays";
import ECommerceHomePageColumn from "components/ECommerceHomePageColumn";
import ECommerceHomePageColumnOne from "components/ECommerceHomePageColumnOne";
import ECommerceHomePageColumn1 from "components/ECommerceHomePageColumn1";
import ECommerceHomePageColumn2 from "components/ECommerceHomePageColumn2";

const index = () => {
  return (
    <>
      <div className="flex flex-col font-poppins gap-[40px] max-w-[1170px] mt-[137px] md:px-[20px] self-stretch md:w-[100%] mx-auto">
        <div className="flex flex-col md:h-[auto] items-start justify-start">
          <div className="flex flex-row font-poppins gap-[16px] items-start justify-start">
            <div className="bg-red_600 h-[40px] rounded-[4px] w-[20%] min-w-[30px]"></div>
            <Text
              className="font-semibold text-left text-red_600"
              variant="body3"
            >
              Today’s
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between self-stretch">
            <div>
              <Text
                className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Flash Sales
              </Text>
            </div>
            <div>
              <ECommerceHomePageRowdays
                className="flex flex-row items-center justify-between sm:w-[100%] w-[51%]"
                days="Days"
                three="03"
                hours="Hours"
                twentythree="23"
                minutes="Minutes"
                nineteen="19"
                seconds="Seconds"
                fiftysix="56"
              />
            </div>
            <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
              <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                <Img
                  src="images/img_arrowleft_black_900.svg"
                  className="h-[24px]"
                  alt="arrowleft"
                />
              </Button>
              <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                <Img
                  src="images/img_arrowright_black_900.svg"
                  className="h-[24px]"
                  alt="arrowright_Three"
                />
              </Button>
            </div>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-4 items-center justify-between max-w-[1770px] w-[100%]"
          orientation="horizontal"
        >
          <ECommerceHomePageColumn
            className="flex sm:flex-1 flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            _40="-40%"
            havithvg92GamepOne="HAVIT HV-G92 Gamepad"
            price="$120"
            oldprice="$160"
            eightyeight="(88)"
          />
          <ECommerceHomePageColumnOne
            className="flex sm:flex-1 flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            _35="-35%"
            addtocart="Add To Cart"
            ak900WiredkeyboOne="AK-900 Wired Keyboard"
            price="$960"
            oldprice="$1160"
            seventyfive="(75)"
          />
          <ECommerceHomePageColumn1
            className="flex sm:flex-1 flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            _30="-30%"
            ipslcdgamingmonOne="IPS LCD Gaming Monitor"
            price="$370"
            oldprice="$400"
            ninetynine="(99)"
          />
          <ECommerceHomePageColumn2
            className="flex sm:flex-1 flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
            _25="-25%"
            language="S-Series Comfort Chair "
            price="$375"
            oldprice="$400"
            ninetynine="(99)"
          />
        </List>
      </div>
      <Button className="bg-red_600 cursor-pointer font-medium min-w-[234px] mt-[59px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
        View All Products
      </Button>
    </>
  );
}

export default index