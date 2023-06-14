import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Line, Button, List } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageColumn from "components/ECommerceHomePageColumn";
import ECommerceHomePageColumnOne from "components/ECommerceHomePageColumnOne";
import ECommerceHomePageColumn1 from "components/ECommerceHomePageColumn1";
import ECommerceHomePageCart2 from "components/ECommerceHomePageCart2";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const ProductDetailspagePage = () => {
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
            nothing="Gaming"
            nothingThree="Havic HV G-92 Gamepad"
          />
          <div className="flex md:flex-col flex-row font-poppins md:gap-[20px] items-center justify-start max-w-[1170px] mt-[78px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[16px] items-center justify-start md:w-[100%] w-[15%]">
              <div className="bg-gray_100 flex items-center justify-start p-[12px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image57.png"
                  className="h-[114px] md:h-[auto] object-cover w-[83%]"
                  alt="imageFiftySeven"
                />
              </div>
              <div className="bg-gray_100 flex items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image58.png"
                  className="h-[97px] md:h-[auto] object-cover w-[87%]"
                  alt="imageFiftyEight"
                />
              </div>
              <div className="bg-gray_100 flex items-center justify-start p-[18px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image61.png"
                  className="h-[94px] md:h-[auto] my-[4px] object-cover w-[100%]"
                  alt="imageSixtyOne"
                />
              </div>
              <div className="bg-gray_100 flex items-center justify-start p-[16px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image59.png"
                  className="h-[106px] md:h-[auto] object-cover w-[89%]"
                  alt="imageFiftyNine"
                />
              </div>
            </div>
            <div className="bg-gray_100 flex md:flex-1 items-center justify-end md:ml-[0] ml-[30px] p-[27px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[43%]">
              <Img
                src="images/img_image63.png"
                className="h-[315px] md:h-[auto] mb-[104px] mt-[127px] object-cover w-[100%]"
                alt="imageSixtyThree"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:ml-[0] ml-[70px] md:w-[100%] w-[35%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-inter font-semibold text-black_900 text-left tracking-[0.72px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Havic HV G-92 Gamepad
                </Text>
                <div className="flex flex-row font-poppins gap-[16px] items-start justify-start mt-[9px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_ticket_black_900.svg"
                      className="h-[20px] w-[100px]"
                      alt="ticket"
                    />
                    <Text
                      className="font-normal not-italic text-black_900_87 text-left w-[auto]"
                      variant="body5"
                    >
                      (150 Reviews)
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Line className="bg-black_900_87 h-[16px] w-[1px]" />
                    <Text
                      className="font-normal not-italic text-green_A400_90 text-left w-[auto]"
                      variant="body5"
                    >
                      In Stock
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-inter font-normal mt-[13px] not-italic text-black_900 text-left tracking-[0.72px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  $192.00
                </Text>
                <Text
                  className="font-normal font-poppins leading-[21.00px] mt-[20px] not-italic text-black_900 text-left sm:w-[100%] w-[94%]"
                  variant="body5"
                >
                  PlayStation 5 Controller Skin High quality vinyl with air
                  channel adhesive for easy bubble free install & mess free
                  removal Pressure sensitive.
                </Text>
                <Img
                  src="images/img_underline.svg"
                  className="h-[1px] mt-[24px] w-[auto]"
                  alt="underline"
                />
                <div className="flex flex-row font-inter gap-[24px] items-start justify-start mt-[21px] self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left tracking-[0.60px] w-[auto]"
                    variant="body1"
                  >
                    Colours:
                  </Text>
                  <Img
                    src="images/img_contrast_red_300.svg"
                    className="h-[20px] w-[48px]"
                    alt="contrast"
                  />
                </div>
                <div className="flex flex-row font-inter gap-[24px] items-center justify-start mt-[21px] self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left tracking-[0.60px] w-[auto]"
                    variant="body1"
                  >
                    Size:
                  </Text>
                  <div className="flex flex-row font-poppins gap-[16px] items-start justify-start self-stretch w-[auto]">
                    <Button className="cursor-pointer font-medium h-[32px] outline outline-[1px] outline-black_900_7f py-[5px] rounded-[4px] text-[14px] text-black_900 text-center w-[32px]">
                      XS
                    </Button>
                    <Button className="cursor-pointer font-medium h-[32px] outline outline-[1px] outline-black_900_7f py-[5px] rounded-[4px] text-[14px] text-black_900 text-center w-[32px]">
                      S
                    </Button>
                    <Button className="bg-red_600 cursor-pointer font-medium h-[32px] py-[5px] rounded-[4px] text-[14px] text-center text-gray_50 w-[32px]">
                      M
                    </Button>
                    <Button className="cursor-pointer font-medium h-[32px] outline outline-[1px] outline-black_900_7f py-[5px] rounded-[4px] text-[14px] text-black_900 text-center w-[32px]">
                      L
                    </Button>
                    <Button className="cursor-pointer font-medium h-[32px] outline outline-[1px] outline-black_900_7f py-[5px] rounded-[4px] text-[14px] text-black_900 text-center w-[32px]">
                      XL
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row font-poppins items-center justify-between mt-[24px] w-[100%]">
                  <div className="flex flex-row gap-[-1px] h-[44px] md:h-[auto] items-start justify-start w-[159px]">
                    <div className="border-[1px] border-black_900_7f border-solid flex items-center justify-start p-[8px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[26%]">
                      <Img
                        src="images/img_menu.svg"
                        className="h-[24px] my-[2px] w-[24px]"
                        alt="menu"
                      />
                    </div>
                    <Button className="border-black_900_7f border-solid border-y-[1px] cursor-pointer font-medium min-w-[80px] py-[7px] text-[20px] text-black_900 text-center w-[auto]">
                      2
                    </Button>
                    <div className="bg-red_600 flex items-center justify-start p-[8px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[26%]">
                      <Img
                        src="images/img_plus.svg"
                        className="h-[24px] my-[2px] w-[24px]"
                        alt="plus"
                      />
                    </div>
                  </div>
                  <Button className="bg-red_600 cursor-pointer font-medium min-w-[165px] sm:px-[20px] md:px-[40px] px-[48px] py-[10px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                    Buy Now
                  </Button>
                  <Button className="flex h-[40px] items-center justify-center outline outline-[1px] outline-black_900_7f p-[4px] rounded-[4px] w-[40px]">
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[32px]"
                      alt="favorite_One"
                    />
                  </Button>
                </div>
              </div>
              <div className="border-[1px] border-black_900_7f border-solid flex flex-col items-start justify-start py-[24px] rounded-[4px] w-[100%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[16px] self-stretch w-[auto]">
                  <Img
                    src="images/img_music_black_900.svg"
                    className="h-[40px] w-[40px]"
                    alt="music"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Free Delivery
                    </Text>
                    <a
                      className="font-medium text-[12px] text-black_900 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Enter your postal code for Delivery Availability
                    </a>
                  </div>
                </div>
                <Img
                  src="images/img_underline_black_900.svg"
                  className="h-[1px] mt-[16px] w-[auto]"
                  alt="underline_One"
                />
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[16px] mt-[16px] self-stretch w-[auto]">
                  <Img
                    src="images/img_refresh.svg"
                    className="h-[40px] w-[40px]"
                    alt="refresh"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Return Delivery
                    </Text>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body6"
                    ></Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-start justify-start max-w-[1170px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
            <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_600 h-[40px] rounded-[4px] w-[15%]"></div>
              <Text
                className="font-semibold text-left text-red_600 w-[auto]"
                variant="body3"
              >
                Related Item
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch md:w-[100%] w-[auto]"
              orientation="horizontal"
            >
              <ECommerceHomePageColumn
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _40="-40%"
                havithvg92GamepOne="HAVIT HV-G92 Gamepad"
                price="$120"
                oldprice="$160"
                eightyeight="(88)"
              />
              <ECommerceHomePageColumnOne
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _35="-35%"
                addtocart="Add To Cart"
                ak900WiredkeyboOne="AK-900 Wired Keyboard"
                price="$960"
                oldprice="$1160"
                seventyfive="(75)"
              />
              <ECommerceHomePageColumn1
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                _30="-30%"
                ipslcdgamingmonOne="IPS LCD Gaming Monitor"
                price="$370"
                oldprice="$400"
                ninetynine="(99)"
              />
              <ECommerceHomePageCart2
                className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]"
                rgbliquidcpucooOne="RGB liquid CPU Cooler"
                price="$160"
                oldprice="$170"
                sixtyfive="(65)"
              />
            </List>
          </div>
          <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[140px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailspagePage;
