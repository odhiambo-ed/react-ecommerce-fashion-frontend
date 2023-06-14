import React from "react";

import { Img, Text } from "components";

const AboutColumntrash = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[20px] w-[80px]"
          style={{ backgroundImage: "url('images/img_services.svg')" }}
        >
          <Img
            src="images/img_trash_white_a700.svg"
            className="h-[40px] w-[40px]"
            alt="trash"
          />
        </div>
        <div className="flex flex-col gap-[12px] items-center justify-start self-stretch w-[auto]">
          <Text
            className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.p247Customerserv}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.friendly247Cust}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutColumntrash.defaultProps = {
  p247Customerserv: "45.5k",
  friendly247Cust: "Customer active in our site",
};

export default AboutColumntrash;
