import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[27px] h-[36px] mb-[2px] relative w-[32px]">
          <Text
            className="absolute font-poppins font-semibold inset-x-[0] mx-[auto] text-black_900 text-left top-[0] w-[max-content]"
            variant="body3"
          >
            {props?.twentythree}
          </Text>
          <Text
            className="absolute bottom-[0] font-poppins inset-x-[0] mx-[auto] not-italic text-black_900 text-left w-[max-content]"
            variant="body8"
          >
            {props?.hours}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer.defaultProps = {
  twentythree: "23",
  hours: "Hours",
};

export default ECommerceHomePageFlashselltimer;
