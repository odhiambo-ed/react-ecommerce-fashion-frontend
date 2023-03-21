import React from "react";

import { Text } from "components";

const ECommerceHomePageFlashselltimer1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[-4px] items-center justify-start self-stretch w-[auto]">
          <Text
            className="font-poppins font-semibold text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.five}
          </Text>
          <Text
            className="font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body8"
          >
            {props?.days}
          </Text>
        </div>
      </div>
    </>
  );
};

ECommerceHomePageFlashselltimer1.defaultProps = { five: "05", days: "Days" };

export default ECommerceHomePageFlashselltimer1;
