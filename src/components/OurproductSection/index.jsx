import React from 'react'
import { Img, Text, Button } from "components";
import ECommerceHomePageCart4 from "components/ECommerceHomePageCart4";
import ECommerceHomePageCart5 from "components/ECommerceHomePageCart5";
import ECommerceHomePageCart6 from "components/ECommerceHomePageCart6";
import ECommerceHomePageColumncurologyj7pkvqr from "components/ECommerceHomePageColumncurologyj7pkvqr";
import ECommerceHomePageCart7 from "components/ECommerceHomePageCart7";
import ECommerceHomePageCart8 from "components/ECommerceHomePageCart8";
import ECommerceHomePageCart9 from "components/ECommerceHomePageCart9";
import ECommerceHomePageCart10 from "components/ECommerceHomePageCart10";

const index = () => {
  return (
    <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-center justify-start max-w-[1170px] mt-[71px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
      <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
        <div className="flex flex-col sm:flex-col flex-row md:gap-[40px] items-end justify-between self-stretch md:w-[100%] w-[auto]">
          <div className="flex flex-col gap-[20px] self-stretch sm:w-[100%] w-[auto]">
            <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_600 h-[40px] rounded-[4px] w-[2%]"></div>
              <Text
                className="font-semibold text-left text-red_600 w-[auto]"
                variant="body3"
              >
                Our Products
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text
                className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Explore Our Products
              </Text>
              <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                  <Img
                    src="images/img_arrowleft_black_900.svg"
                    className="h-[24px]"
                    alt="arrowleft_Two"
                  />
                </Button>
                <Button className="bg-gray_100 flex h-[46px] items-center justify-center p-[11px] rounded-[50%] w-[46px]">
                  <Img
                    src="images/img_arrowright_black_900.svg"
                    className="h-[24px]"
                    alt="arrowright_Five"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:gap-[40px] gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] self-stretch md:w-[100%] w-[auto]">
          <ECommerceHomePageCart4
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            breeddrydogfoodOne="Breed Dry Dog Food"
            price="$100"
            thirtyfive="(35)"
          />
          <ECommerceHomePageCart5
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            addtocart="Add To Cart"
            canoneosdslrcamOne="CANON EOS DSLR Camera"
            price="$360"
            ninetyfive="(95)"
          />
          <ECommerceHomePageCart6
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            asusfhdgaming="ASUS FHD Gaming Laptop"
            price="$700"
            threehundredtwentyfive="(325)"
          />
          <ECommerceHomePageColumncurologyj7pkvqr
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            language="Curology Product Set "
            price="$500"
            onehundredfortyfive="(145)"
          />
          <ECommerceHomePageCart7
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            new="NEW"
            kidselectriccarOne="Kids Electric Car"
            price="$960"
            sixtyfive="(65)"
          />
          <ECommerceHomePageCart8
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            jrzoomsoccer="Jr. Zoom Soccer Cleats"
            price="$1160"
            thirtyfive="(35)"
          />
          <ECommerceHomePageCart9
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            new="NEW"
            gp11Shooterusb="GP11 Shooter USB Gamepad"
            price="$660"
            fiftyfive="(55)"
          />
          <ECommerceHomePageCart10
            className="flex flex-col items-start justify-start self-stretch w-[100%]"
            quiltedsatinjacOne="Quilted Satin Jacket"
            price="$660"
            fiftyfive="(55)"
          />
        </div>
      </div>
      <Button className="bg-red_600 cursor-pointer font-medium min-w-[234px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
        View All Products
      </Button>
    </div>
  );
}

export default index