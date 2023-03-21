import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[35px] md:h-[36px] mb-[7px] mt-[4px] relative w-[48px]">
          <Text
            className="absolute font-poppins font-semibold inset-x-[0] mx-[auto] text-black_900 text-left top-[0] w-[max-content]"
            variant="body3"
          >
            {props?.thirtyfive}
          </Text>
          <Text
            className="absolute bottom-[0] font-poppins inset-x-[0] mx-[auto] not-italic text-black_900 text-left w-[max-content]"
            variant="body8"
          >
            {props?.seconds}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer3.defaultProps = {
  thirtyfive: "35",
  seconds: "Seconds",
};

export default ECommerceHomePageFlashselltimer3;
