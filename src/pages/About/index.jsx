import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, List } from "components";
import CartRoadmap from "components/CartRoadmap";
import AboutColumnticket from "components/AboutColumnticket";
import AboutColumncontrast from "components/AboutColumncontrast";
import AboutColumntrash from "components/AboutColumntrash";
import ECommerceHomePageListcut from "components/ECommerceHomePageListcut";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const AboutPage = () => {
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
            account="Home"
            nothing="About"
          />
          <div className="flex md:flex-col flex-row font-inter md:gap-[40px] gap-[75px] items-center justify-end ml-[auto] mt-[42px] md:px-[20px] md:w-[100%] w-[91%]">
            <div className="flex flex-col gap-[40px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <Text
                className="text-black_900 text-justify tracking-[3.24px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Our Story
              </Text>
              <div className="flex flex-col font-poppins gap-[24px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[525px] not-italic text-black_900 text-left"
                  variant="body3"
                >
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region.{" "}
                </Text>
                <Text
                  className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[505px] not-italic text-black_900 text-left"
                  variant="body3"
                >
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </Text>
              </div>
            </div>
            <div className="bg-pink_A100 flex items-center justify-start rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] md:w-[100%] w-[55%]">
              <Img
                src="images/img_portraittwoaf.png"
                className="h-[609px] md:h-[auto] object-cover rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[100%]"
                alt="portraittwoaf"
              />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1170px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            orientation="horizontal"
          >
            <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[4px] hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <AboutColumnticket
                className="flex flex-col items-center justify-start sm:w-[100%] w-[169px]"
                language="10.5k "
                freedeliveryfor="Sallers active our site"
              />
            </div>
            <div className="bg-red_600 hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-1 items-center justify-end p-[29px] sm:px-[20px] rounded-[4px] hover:shadow-bs1 shadow-bs1 hover:w-[100%] w-[100%]">
              <AboutColumncontrast
                className="flex flex-col items-center justify-start mt-[2px] self-stretch sm:w-[100%] w-[auto]"
                contrast="images/img_contrast_black_900.svg"
                moneybackguaran="33k"
                wereurnmoneywit="Mopnthly Produduct Sale"
              />
            </div>
            <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-1 items-center justify-start p-[4px] rounded-[4px] hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <AboutColumntrash
                className="flex flex-col items-center justify-start my-[26px] sm:w-[100%] w-[262px]"
                p247Customerserv="45.5k"
                friendly247Cust="Customer active in our site"
              />
            </div>
            <div className="hover:border-[0] border-[1px] border-black_900_4c border-solid hover:cursor-pointer flex flex-1 items-center justify-end p-[27px] sm:px-[20px] rounded-[4px] hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <AboutColumncontrast
                className="flex flex-col items-center justify-start mt-[2px] self-stretch sm:w-[100%] w-[auto]"
                contrast="images/img_fire.svg"
                moneybackguaran="25k"
                wereurnmoneywit="Anual gross sale in our site"
              />
            </div>
          </List>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1170px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
              <div className="bg-gray_100 flex items-center justify-start pt-[39px] sm:px-[20px] px-[39px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image46.png"
                  className="h-[391px] md:h-[auto] object-cover w-[81%]"
                  alt="imageFortySix"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-inter font-medium text-black_900 text-left tracking-[1.28px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tom Cruise
                  </Text>
                  <Text
                    className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Founder & Chairman
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_eye_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="eye"
                  />
                  <Img
                    src="images/img_camera_black_900_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_linkedin_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="linkedin"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
              <div className="bg-gray_100 flex items-center justify-start pt-[33px] sm:px-[20px] px-[33px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image51.png"
                  className="h-[397px] md:h-[auto] object-cover w-[97%]"
                  alt="imageFiftyOne"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-inter font-medium text-black_900 text-left tracking-[1.28px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Emma Watson
                  </Text>
                  <Text
                    className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Managing Director
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_eye_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="eye"
                  />
                  <Img
                    src="images/img_camera_black_900_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_linkedin_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="linkedin"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
              <div className="bg-gray_100 flex items-center justify-start pt-[22px] sm:px-[20px] px-[22px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_image47.png"
                  className="h-[392px] md:h-[auto] mt-[16px] object-cover w-[100%]"
                  alt="imageFortySeven"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-inter font-medium text-black_900 text-left tracking-[1.28px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Will Smith
                  </Text>
                  <Text
                    className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Product Designer
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start self-stretch w-[auto]">
                  <Img
                    src="images/img_eye_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="eye"
                  />
                  <Img
                    src="images/img_camera_black_900_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_linkedin_black_900.svg"
                    className="h-[24px] w-[24px]"
                    alt="linkedin"
                  />
                </div>
              </div>
            </div>
          </List>
          <Img
            src="images/img_frame883_black_900.svg"
            className="h-[16px] mt-[40px] w-[112px]"
            alt="frame883"
          />
          <ECommerceHomePageListcut
            className="sm:flex-col flex-row font-poppins grid grid-cols-1 justify-center max-w-[943px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            price="FREE AND FAST DELIVERY"
            priceOne="Free delivery for all orders over $140"
            p247CustomerservOne="24/7 CUSTOMER SERVICE"
            friendly247CustOne="Friendly 24/7 customer support"
            moneybackguaranOne="MONEY BACK GUARANTEE"
            duration="We reurn money within 30 days"
          />
          <ECommerceHomePageFooter className="bg-black_900 flex font-poppins items-center justify-center mt-[139px] md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
