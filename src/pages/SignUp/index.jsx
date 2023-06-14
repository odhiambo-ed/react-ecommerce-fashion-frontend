import React, { useState } from "react";
import axios from "axios";

import ECommerceHomePageTopheader from "components/ECommerceHomePageTopheader";
import ECommerceHomePageHeader from "components/ECommerceHomePageHeader";
import { Img, Text, Button } from "components";
import ECommerceHomePageFooter from "components/ECommerceHomePageFooter";
import { useNavigate, Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const hundleSignUp = (e) => {
    e.preventDefault();

    // Form Validation
    const errors = [];
    
    setFormErrors([]);

    // Perform Form Validation
    if (firstName.trim() === "") {
      errors.push("**First name is required**");
    }
    if (secondName.trim() === "") {
      errors.push("**Second name is required**");
    }
    if (email.trim() === "") {
      errors.push("**Email is required**");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("**Email is invalid**");
    }
    if (password.trim() === "") {
      errors.push("**Password is required**");
    }
    if (password!== confirmPassword) {
      errors.push("**Password does not match**");
    }

    // Set the form errors and clear them after 5 seconds
    setFormErrors(errors);
    setTimeout(() => {
      setFormErrors([]);
    }, 5000);

    // Send the form data to the backend service for processing if there are no validation errors
    if (errors.length === 0) {
      const url = "https://api.edwardodhiambo.com/auth/register";
      const data = {
        firstName,
        secondName,
        email,
        password
      };

      axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        window.location.href = "/account";
      })
    }

  
  }

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
            <form
              onSubmit={hundleSignUp}
              className="flex flex-col gap-[40px] items-center justify-start self-stretch sm:w-[100%] w-[auto]"
            >
              <div className="flex flex-col gap-[40px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className="border-b-2 border-gray-500 border-l-0 border-r-0 border-t-0 focus:outline-none focus:border-blue-500"
                  />
                  <label htmlFor="">Second Name</label>
                  <input
                    type="text"
                    value={secondName}
                    onChange={(event) => setSecondName(event.target.value)}
                    className="border-b-2 border-gray-500 border-l-0 border-r-0 border-t-0 focus:outline-none focus:border-blue-500"
                  />
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="border-b-2 border-gray-500 border-l-0 border-r-0 border-t-0 focus:outline-none focus:border-blue-500"
                  />
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="border-b-2 border-gray-500 border-l-0 border-r-0 border-t-0 focus:outline-none focus:border-blue-500"
                  />
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="border-b-2 border-gray-500 border-l-0 border-r-0 border-t-0 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              {
                formErrors.length > 0 && (
                  <ul className="text-red-500">
                    {formErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )
              }
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                <Button type="submit" className="bg-red_600 cursor-pointer font-medium sm:min-w-[100%] min-w-[371px] px-[122px] sm:px-[20px] md:px-[40px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_50 w-[auto]">
                  Create Account
                </Button>
                <div className="flex flex-col gap-[32px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                  <Button
                    className="common-pointer border-[1px] border-black_900_66 border-solid cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[371px] px-[86px] py-[16px] rounded-[4px] w-[auto]"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        src="images/img_google.svg"
                        className=""
                        alt="google"
                      />
                    }
                  >
                    <div className="font-normal px-1 md:px-[40px] not-italic sm:px-[20px] text-[16px] text-black_900 text-left">
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
            </form>
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
