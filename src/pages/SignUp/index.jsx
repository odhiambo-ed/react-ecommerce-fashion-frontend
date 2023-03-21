import React from "react";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Button } from "components";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

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
            className="flex flex-row flex-wrap font-inter items-center justify-between max-w-[1170px] mt-[38px] mx-[auto] md:px-[20px] self-stretch w-[100%]"
            exclusive="Exclusive"
            home="Home"
            contact="Contact"
            about="About"
          />
          <Img
            src="images/img_line3.svg"
            className="h-[1px] mt-[16px] w-[auto]"
            alt="lineThree"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-[129px] md:gap-[40px] items-center justify-between max-w-[1305px] mt-[60px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
          <div className="bg-bluegray_100 flex md:flex-1 items-center justify-end pt-[75px] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] md:w-[100%] w-[62%]">
            <Img
              src="images/img_dlbeatsnoop1.png"
              className="h-[706px] md:h-[auto] object-cover rounded-tr-[4px] w-[100%]"
              alt="dlbeatsnoopOne"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-[48px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-inter font-medium text-black_900 text-left tracking-[1.44px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Create an account
              </Text>
              <Text
                className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
                variant="body3"
              >
                Enter your details below
              </Text>
            </div>
            <div className="flex flex-col gap-[40px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[40px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  >
                    Name
                  </Text>
                  <Img
                    src="images/img_underline.svg"
                    className="h-[1px] w-[370px]"
                    alt="underline_One"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  >
                    Email or Phone Number
                  </Text>
                  <Img
                    src="images/img_underline.svg"
                    className="h-[1px] w-[370px]"
                    alt="underline_Two"
                  />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left w-[auto]"
                    variant="body3"
                  >
                    Password
                  </Text>
                  <Img
                    src="images/img_underline.svg"
                    className="h-[1px] w-[370px]"
                    alt="underline_Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Button className="bg-red_600 cursor-pointer font-medium sm:min-w-[100%] min-w-[371px] px-[122px] sm:px-[20px] md:px-[40px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                  Create Account
                </Button>
                <div className="flex flex-col gap-[32px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Button
                    className="common-pointer border-[1px] border-black_900_66 border-solid cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[371px] px-[86px] py-[16px] rounded-[4px] w-[auto]"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        src="images/img_google.svg"
                        className="mb-[2px] mr-[16px]"
                        alt="google"
                      />
                    }
                  >
                    <div className="font-normal md:px-[40px] not-italic sm:px-[20px] text-[16px] text-black_900 text-left">
                      Sign up with Google
                    </div>
                  </Button>
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900_99 text-left w-[auto]"
                      variant="body3"
                    >
                      Already have account?
                    </Text>
                    <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                      <Text
                        className="common-pointer font-medium text-black_900_99 text-left w-[auto]"
                        variant="body3"
                        onClick={() => navigate("/login")}
                      >
                        Log in
                      </Text>
                      <Img
                        src="images/img_underline.svg"
                        className="h-[1px] w-[47px]"
                        alt="underline_Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-[140px] w-[100%]">
          <ECommerceHomePageFooter className="bg-black_900 flex items-center justify-center md:px-[20px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
