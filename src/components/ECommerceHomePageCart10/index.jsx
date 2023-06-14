import React from "react";

import { Button, Img, Text, RatingBar } from "components";

const ECommerceHomePageCart10 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray_100 md:h-[180px] h-[250px] p-[12px] relative rounded-[4px] w-[100%]">
          <div className="absolute flex flex-col gap-[8px] items-center justify-start right-[5%] self-stretch top-[5%] w-[auto]">
            <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
              <Img
                src="images/img_favorite.svg"
                className="h-[24px]"
                alt="favorite"
              />
            </Button>
            <Button className="bg-white_A700 flex h-[34px] items-center justify-center p-[5px] rounded-[50%] w-[34px]">
              <Img src="images/img_eye.svg" className="h-[24px]" alt="eye" />
            </Button>
          </div>
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[2px] w-[71%]">
            <Img
              src="images/img_698717z8a1x34.png"
              className="h-[176px] md:h-[auto] object-cover w-[98%]"
              alt="698717z8a1xThirtyFour"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.quiltedsatinjacOne}
          </Text>
          <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
            <div className="flex items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-medium font-poppins text-left text-red_600 w-[auto]"
                variant="body3"
              >
                {props?.price}
              </Text>
            </div>
            <div className="flex flex-row gap-[8px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-row items-start justify-start self-stretch w-[auto]">
                <RatingBar
                  className="rounded-[1px]"
                  value={4}
                  starCount={4}
                  color="#ffad33"
                  activeColor="#ffad33"
                  size={20}
                ></RatingBar>
                <Img
                  src="images/img_volume.svg"
                  className="h-[20px] w-[20px]"
                  alt="volume"
                />
              </div>
              <Text
                className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
                variant="body5"
              >
                {props?.fiftyfive}
              </Text>
            </div>
          </div>
          <Img
            src="images/img_eye_red_600.svg"
            className="h-[20px] w-[48px]"
            alt="eye_One"
          />
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart10.defaultProps = {
  quiltedsatinjacOne: "Quilted Satin Jacket",
  price: "$660",
  fiftyfive: "(55)",
};

export default ECommerceHomePageCart10;
