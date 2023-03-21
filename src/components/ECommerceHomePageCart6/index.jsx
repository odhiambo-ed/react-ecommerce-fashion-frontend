import React from "react";

import { Button, Img, Text } from "components";

const ECommerceHomePageCart6 = (props) => {
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
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] px-[9px] w-[71%]">
            <Img
              src="images/img_ideapadgaming3i01500x500.png"
              className="h-[180px] md:h-[auto] object-cover w-[100%]"
              alt="ideapadgaming3i"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.asusfhdgaming}
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
              <Img
                src="images/img_ticket.svg"
                className="h-[20px] w-[100px]"
                alt="ticket"
              />
              <Text
                className="font-poppins font-semibold text-black_900_87 text-left w-[auto]"
                variant="body5"
              >
                {props?.threehundredtwentyfive}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageCart6.defaultProps = {
  asusfhdgaming: "ASUS FHD Gaming Laptop",
  price: "$700",
  threehundredtwentyfive: "(325)",
};

export default ECommerceHomePageCart6;
