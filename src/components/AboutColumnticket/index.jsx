import React from "react";

import { Img, Text } from "components";

const AboutColumnticket = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[20px] w-[80px]"
          style={{ backgroundImage: "url('images/img_services.svg')" }}
        >
          <Img
            src="images/img_ticket_gray_50.svg"
            className="h-[40px] w-[40px]"
            alt="ticket"
          />
        </div>
        <div className="flex flex-col gap-[12px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
          <Text
            className="font-bold font-inter text-black_900 text-left tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.language}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-black_900 text-center w-[auto]"
            variant="body3"
          >
            {props?.freedeliveryfor}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutColumnticket.defaultProps = {
  language: "10.5k ",
  freedeliveryfor: "Sallers active our site",
};

export default AboutColumnticket;
