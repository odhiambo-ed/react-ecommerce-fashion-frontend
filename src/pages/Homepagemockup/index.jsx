import React from "react";

import { Img } from "components";

const HomepagemockupPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex h-[1200px] justify-end mx-[auto] relative w-[100%]">
        <div className="md:h-[1200px] h-[1277px] mt-[auto] mx-[auto] md:px-[20px] w-[100%]">
          <div className="md:h-[1200px] h-[1277px] m-[auto] w-[100%]">
            <div className="md:h-[1200px] h-[1277px] m-[auto] w-[100%]">
              <div className="md:h-[1200px] h-[1277px] m-[auto] w-[100%]">
                <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                  <div className="bg-bluegray_900 h-[1200px] w-[100%]"></div>
                </div>
                <Img
                  src="images/img_ellipse26.png"
                  className="absolute bottom-[0] h-[484px] object-cover right-[0] w-[25%]"
                  alt="ellipseTwentySix"
                />
              </div>
              <div className="absolute flex items-center justify-start right-[9%] top-[0] w-[35%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle6_1.png"
                    className="h-[1200px] md:h-[auto] object-cover w-[100%]"
                    alt="rectangleSix"
                  />
                </div>
              </div>
            </div>
            <div className="absolute backdrop-opacity-[0.5] bg-black_900_31 blur-[100.00px] h-[1074px] inset-y-[0] left-[13%] my-[auto] w-[48%]"></div>
          </div>
          <Img
            src="images/img_ellipse25.png"
            className="absolute h-[363px] left-[0] object-cover top-[0] w-[22%]"
            alt="ellipseTwentyFive"
          />
        </div>
        <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[9%] my-[auto] md:px-[20px] w-[48%]">
          <Img
            src="images/img_placeyourdesign_1.png"
            className="h-[1170px] md:h-[auto] object-cover w-[100%]"
            alt="placeyourdesign"
          />
        </div>
      </div>
    </>
  );
};

export default HomepagemockupPage;
