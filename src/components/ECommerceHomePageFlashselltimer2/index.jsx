import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[32px] h-[35px] mb-[5px] mt-[2px] relative w-[43px]">
          <Text
            className="absolute font-poppins font-semibold inset-x-[0] mx-[auto] text-black_900 text-left top-[0] w-[max-content]"
            variant="body3"
          >
            {props?.fiftynine}
          </Text>
          <Text
            className="absolute bottom-[0] font-poppins inset-x-[0] mx-[auto] not-italic text-black_900 text-left w-[max-content]"
            variant="body8"
          >
            {props?.minutes}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer2.defaultProps = {
  fiftynine: "59",
  minutes: "Minutes",
};

export default ECommerceHomePageFlashselltimer2;
