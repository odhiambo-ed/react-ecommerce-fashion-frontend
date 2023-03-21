import React from "react";

import { Text, Img } from "components";

const ECommerceHomePageRowdays = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[4px] h-[55px] md:h-[auto] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.days}
          </Text>
          <Text
            className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.three}
          </Text>
        </div>
        <Img
          src="images/img_semiclone.svg"
          className="h-[16px] mt-[26px] w-[4px]"
          alt="semiclone"
        />
        <div className="flex flex-col gap-[4px] h-[56px] md:h-[auto] items-start justify-start w-[43px]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.hours}
          </Text>
          <Text
            className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.twentythree}
          </Text>
        </div>
        <Img
          src="images/img_semiclone.svg"
          className="h-[16px] mt-[26px] w-[4px]"
          alt="semiclone_One"
        />
        <div className="flex flex-col gap-[4px] h-[57px] md:h-[auto] items-start justify-start w-[49px]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.minutes}
          </Text>
          <Text
            className="font-bold font-inter h-[39px] text-black_900 text-left tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.nineteen}
          </Text>
        </div>
        <Img
          src="images/img_semiclone.svg"
          className="h-[16px] mt-[26px] w-[4px]"
          alt="semiclone_Two"
        />
        <div className="flex flex-col gap-[4px] h-[57px] md:h-[auto] items-start justify-start w-[52px]">
          <Text
            className="font-medium font-poppins text-black_900 text-left w-[auto]"
            variant="body6"
          >
            {props?.seconds}
          </Text>
          <Text
            className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.fiftysix}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageRowdays.defaultProps = {
  days: "Days",
  three: "03",
  hours: "Hours",
  twentythree: "23",
  minutes: "Minutes",
  nineteen: "19",
  seconds: "Seconds",
  fiftysix: "56",
};

export default ECommerceHomePageRowdays;
