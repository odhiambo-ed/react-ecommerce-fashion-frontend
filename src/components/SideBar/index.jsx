import React from 'react'
import { Img, Text } from "components";

const index = () => {
  return (
    <div className="flex flex-col gap-[16px] items-start justify-start md:mt-[0] mt-[39px] self-stretch w-[auto]">
      <div className="flex flex-row items-center justify-between gap-3 self-stretch w-[auto]">
        <Text
          className="font-normal not-italic text-black_900 text-center w-[auto]"
          variant="body3"
        >
          Woman’s Fashion
        </Text>
        <Img
          src="images/img_arrowright.svg"
          className="h-[24px] w-[24px]"
          alt="arrowright"
        />
      </div>
      <div className="flex flex-row items-center justify-between gap-3 self-stretch w-[auto]">
        <Text
          className="font-normal not-italic text-black_900 text-center w-[auto]"
          variant="body3"
        >
          Men’s Fashion
        </Text>
        <Img
          src="images/img_arrowright.svg"
          className="h-[24px] w-[24px]"
          alt="arrowright_One"
        />
      </div>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Electronics
      </Text>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Home & Lifestyle
      </Text>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Medicine
      </Text>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Sports & Outdoor
      </Text>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Baby’s & Toys
      </Text>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Groceries & Pets
      </Text>
      <Text
        className="font-normal not-italic text-black_900 text-center w-[auto]"
        variant="body3"
      >
        Health & Beauty
      </Text>
    </div>
  );
}

export default index