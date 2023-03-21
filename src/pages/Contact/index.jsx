import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Button, Text, Input, TextArea } from "components";
import CartRoadmap from "components/CartRoadmap";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
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
            className="flex flex-row font-poppins items-center justify-start md:ml-[0] ml-[135px] mt-[79px] md:px-[20px] self-stretch sm:w-[100%] w-[auto]"
            account="Home"
            nothing="Cantact"
          />
          <div className="flex md:flex-col flex-row font-poppins gap-[30px] items-center justify-start max-w-[1170px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[35px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[32px] items-start justify-start mb-[15px] mt-[5px] self-stretch w-[auto]">
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Button className="bg-red_600 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_call.svg"
                        className="h-[20px]"
                        alt="call"
                      />
                    </Button>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Call To Us
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      We are available 24/7, 7 days a week.
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Phone: +8801611112222
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_underline.svg"
                  className="h-[1px] w-[270px]"
                  alt="underline_One"
                />
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Button className="bg-red_600 flex h-[40px] items-center justify-center p-[10px] rounded-[50%] w-[40px]">
                      <Img src="images/img_mail.svg" className="" alt="mail" />
                    </Button>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Write To US
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal leading-[21.00px] md:max-w-[100%] max-w-[250px] not-italic text-black_900 text-left"
                      variant="body5"
                    >
                      Fill out our form and we will contact you within 24 hours.
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Emails: customer@exclusive.com
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Emails: support@exclusive.com
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[69%]">
              <div className="flex flex-col gap-[32px] items-end justify-start my-[9px] self-stretch md:w-[100%] w-[auto]">
                <div className="gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Input
                    wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    type="text"
                    name="placeboxinfo"
                    placeholder="Your Name *"
                  ></Input>
                  <Input
                    wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    type="email"
                    name="placeboxinfo_One"
                    placeholder="Your Email *"
                  ></Input>
                  <Input
                    wrapClassName="bg-gray_100 pl-[16px] pr-[35px] py-[12px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-black_900_87 sm:pr-[20px] text-[16px] text-black_900_87 text-left w-[100%]"
                    type="number"
                    name="placeboxinfo_Two"
                    placeholder="Your Phone *"
                  ></Input>
                </div>
                <TextArea
                  className="bg-gray_100 border-[0] font-normal not-italic pb-[35px] pl-[16px] sm:pr-[20px] pr-[35px] pt-[15px] rounded-[4px] text-[16px] placeholder:text-black_900_87 text-black_900_87 text-left w-[100%]"
                  name="placeboxinfo_Three"
                  placeholder="Your Massage"
                ></TextArea>
                <Button className="bg-red_600 cursor-pointer font-medium min-w-[215px] sm:px-[20px] md:px-[40px] px-[48px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                  Send Massage
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

export default ContactPage;
