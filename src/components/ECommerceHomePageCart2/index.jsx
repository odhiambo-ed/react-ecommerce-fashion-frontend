import React from "react";

import { Button, Img, Text, RatingBar } from "components";

const ECommerceHomePageCart2 = (props) => {
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
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] py-[38px] w-[71%]">
            <Img
              src="images/img_gammaxxl240argb1500x500.png"
              className="h-[95px] md:h-[auto] mt-[9px] object-cover w-[100%]"
              alt="gammaxxl240argb"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.rgbliquidcpucooOne}
          </Text>
          <div className="flex flex-row gap-[12px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-medium font-poppins text-left text-red_600 w-[auto]"
              variant="body3"
            >
              {props?.price}
            </Text>
            <Text
              className="font-medium font-poppins line-through text-black_900_87 text-left w-[auto]"
              variant="body3"
            >
              {props?.oldprice}
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
              {props?.sixtyfive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart2.defaultProps = {
  rgbliquidcpucooOne: "RGB liquid CPU Cooler",
  price: "$160",
  oldprice: "$170",
  sixtyfive: "(65)",
};

export default ECommerceHomePageCart2;
