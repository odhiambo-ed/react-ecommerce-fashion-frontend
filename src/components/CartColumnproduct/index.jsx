import React from "react";

import { Text } from "components";

const CartColumnproduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[284px] md:gap-[40px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.product}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.price}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.quantity}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-left w-[auto]"
            variant="body3"
          >
            {props?.subtotal}
          </Text>
        </div>
      </div>
    </>
  );
};

CartColumnproduct.defaultProps = {
  product: "Product",
  price: "Price",
  quantity: "Quantity",
  subtotal: "Subtotal",
};

export default CartColumnproduct;
