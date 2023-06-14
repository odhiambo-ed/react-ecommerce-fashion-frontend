import React from "react";

import { Text, Input, Img } from "components";

const ECommerceHomePageFooter = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-center mb-[23px] mt-[76px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[87px] items-start justify-center self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-bold font-inter text-gray_50 text-left tracking-[0.72px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      ShopHaven
                    </Text>
                  </div>
                  <Text
                    className="font-medium font-poppins text-gray_50 text-left w-[auto]"
                    variant="body1"
                  >
                    Subscribe
                  </Text>
                </div>
                <Text
                  className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
                  variant="body3"
                >
                  Get 10% off your first order
                </Text>
              </div>
              <Input
                wrapClassName="border-[1px] border-gray_50 border-solid flex pl-[16px] py-[12px] rounded-[4px] w-[217px]"
                className="font-normal font-poppins not-italic p-[0] placeholder:text-gray_50_7e text-[16px] text-gray_50_7e text-left w-[100%]"
                name="sendmail"
                placeholder="Enter your email"
                suffix={
                  <Img
                    src="images/img_send.svg"
                    className="mt-[auto] mb-[1px] ml-[32px]"
                    alt="send"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-medium font-poppins text-gray_50 text-left w-[auto]"
                variant="body1"
              >
                Support
              </Text>
              <ul className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-poppins leading-[24.00px] not-italic text-gray_50 text-left"
                    variant="body3"
                  >
                    19207 JKIA, Nairobi.
                  </Text>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    odhiambo.edward111@gmail.com
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    +254-728-888-999
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-medium font-poppins text-gray_50 text-left w-[auto]"
                variant="body1"
              >
                Account
              </Text>
              <ul className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-poppins not-italic text-gray_50 text-left"
                    variant="body3"
                  >
                    My Account
                  </Text>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    Login / Register
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    Cart
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    Wishlist
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-medium font-poppins text-gray_50 text-left w-[auto]"
                variant="body1"
              >
                Quick Link
              </Text>
              <ul className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-normal font-poppins not-italic text-gray_50 text-left"
                    variant="body3"
                  >
                    Privacy Policy
                  </Text>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    Terms Of Use
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    FAQ
                  </a>
                </li>
                <li className="w-[auto]">
                  <a
                    className="cursor-pointer font-normal font-poppins not-italic text-[16px] text-gray_50 text-left"
                    href="javascript:"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-medium font-poppins text-gray_50 text-left w-[auto]"
                  variant="body1"
                >
                  Download App
                </Text>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium font-poppins text-gray_50_99 text-left w-[auto]"
                    variant="body6"
                  >
                    Save $3 with App New User Only
                  </Text>
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-black_900 flex h-[80px] items-center justify-start p-[2px] w-[80px]">
                      <Img
                        src="images/img_qrcode1.png"
                        className="h-[76px] md:h-[auto] object-cover w-[76px]"
                        alt="qrcodeOne"
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                      <div className="bg-black_902 md:h-[30px] h-[40px] p-[3px] relative w-[100%]">
                        <div className="h-[30px] m-[auto] w-[95%]">
                          <div className="h-[30px] m-[auto] w-[100%]">
                            <Img
                              src="images/img_pngtransparent.png"
                              className="absolute h-[30px] inset-[0] justify-center m-[auto] object-cover rounded-[4px] w-[100%]"
                              alt="pngtransparent"
                            />
                            <Img
                              src="images/img_vector1.svg"
                              className="absolute bottom-[37%] h-[1px] right-[7%] w-[1px]"
                              alt="vectorOne"
                            />
                          </div>
                          <Img
                            src="images/img_vector2.svg"
                            className="absolute bottom-[30%] h-[3px] right-[7%] w-[auto]"
                            alt="vectorTwo"
                          />
                        </div>
                        <Img
                          src="images/img_vector3.svg"
                          className="absolute bottom-[43%] h-[1px] right-[13%] w-[1px]"
                          alt="vectorThree"
                        />
                        <Img
                          src="images/img_vector4.svg"
                          className="absolute bottom-[38%] h-[2px] right-[9%] w-[1px]"
                          alt="vectorFour"
                        />
                      </div>
                      <div className="bg-black_900 flex items-center justify-start p-[3px] w-[100%]">
                        <Img
                          src="images/img_downloadappstore.png"
                          className="h-[34px] md:h-[auto] object-cover rounded-[4px] w-[100%]"
                          alt="downloadappstor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[24px] items-start justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_facebook.svg"
                  className="h-[24px] w-[24px]"
                  alt="facebook"
                />
                <Img
                  src="images/img_map.svg"
                  className="h-[24px] w-[24px]"
                  alt="map"
                />
                <Img
                  src="images/img_instagram.svg"
                  className="h-[24px] w-[24px]"
                  alt="instagram"
                />
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[24px] w-[24px]"
                  alt="linkedin"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
            <Img
              src="images/img_underline_white_a700_1x1440.svg"
              className="h-[1px] w-[1440px]"
              alt="underline_Three"
            />
            <div className="flex items-center justify-start self-stretch w-[auto]">
              <div className="flex flex-row gap-[6px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_location.svg"
                  className="h-[20px] w-[20px]"
                  alt="location"
                />
                <Text
                  className="font-normal font-poppins not-italic text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  Copyright <a href="https://edwardodhiambo.com/">Edward</a>{" "}
                  2023. All right reserved
                </Text>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

ECommerceHomePageFooter.defaultProps = {};

export default ECommerceHomePageFooter;
