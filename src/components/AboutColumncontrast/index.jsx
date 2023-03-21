import React from "react";

import { Img, Text } from "components";

const AboutColumncontrast = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex h-[80px] items-center justify-start p-[20px] w-[80px]"
          style={{
            backgroundImage: "url('images/img_services_white_a700.svg')",
          }}
        >
          <Img
            src={props?.contrast}
            className="h-[40px] w-[40px]"
            alt="contrast"
          />
        </div>
        <div className="flex flex-col gap-[8px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
          <Text
            className="font-bold font-inter text-left text-white_A700 tracking-[1.28px] w-[auto]"
            as="h5"
            variant="h5"
          >
            {props?.moneybackguaran}
          </Text>
          <Text
            className="font-normal font-poppins not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            {props?.wereurnmoneywit}
          </Text>
        </div>
      </div>
    </>
  );
};

AboutColumncontrast.defaultProps = {
  contrast: "images/img_contrast_black_900.svg",
  moneybackguaran: "33k",
  wereurnmoneywit: "Mopnthly Produduct Sale",
};

export default AboutColumncontrast;
