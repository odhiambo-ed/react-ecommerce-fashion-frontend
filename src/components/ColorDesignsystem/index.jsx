import React from "react";

import { Text } from "components";

const ColorDesignsystem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-inter font-semibold text-bluegray_905 text-left w-[auto]"
            variant="body4"
          >
            {props?.neutral500Four}
          </Text>
          <Text
            className="font-inter font-normal not-italic text-bluegray_905 text-left w-[auto]"
            variant="body4"
          >
            {props?.p202CFortySixFour}
          </Text>
        </div>
        {!!props?.texts ? (
          <Text
            className="font-inter font-medium text-bluegray_904 text-left w-[auto]"
            variant="body6"
          >
            {props?.texts}
          </Text>
        ) : null}
      </div>
    </>
  );
};

ColorDesignsystem.defaultProps = {
  neutral500Four: "Neutral / 200",
  p202CFortySixFour: "#D1D4DB",
};

export default ColorDesignsystem;
