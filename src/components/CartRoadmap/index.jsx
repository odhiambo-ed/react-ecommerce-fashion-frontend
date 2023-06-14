import React from "react";

import { Text, Line } from "components";

const CartRoadmap = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-normal font-poppins not-italic text-black_900_87 text-left w-[auto]"
          variant="body5"
        >
          {props?.account}
        </Text>
        <Line className="bg-black_900_87 h-[1px] rotate-[-117deg] w-[2%]" />
        <Text
          className="font-normal font-poppins not-italic text-black_900_87 text-left w-[auto]"
          variant="body5"
        >
          {props?.nothing}
        </Text>
        {!!props?.linefourteen ? (
          <Line className="bg-black_900_87 h-[1px] rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.nothingOne ? (
          <Text
            className="font-normal font-poppins not-italic text-black_900_87 text-left w-[auto]"
            variant="body5"
          >
            {props?.nothingOne}
          </Text>
        ) : null}
        {!!props?.linefifteen ? (
          <Line className="bg-black_900_87 h-[1px] rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.nothingTwo ? (
          <Text
            className="font-normal font-poppins not-italic text-black_900_87 text-left w-[auto]"
            variant="body5"
          >
            {props?.nothingTwo}
          </Text>
        ) : null}
        {!!props?.linesixteen ? (
          <Line className="bg-black_900_87 h-[1px] rotate-[-117deg] w-[2%]" />
        ) : null}
        {!!props?.nothingThree ? (
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body5"
          >
            {props?.nothingThree}
          </Text>
        ) : null}
      </div>
    </>
  );
};

CartRoadmap.defaultProps = { account: "Account", nothing: "My Account" };

export default CartRoadmap;
