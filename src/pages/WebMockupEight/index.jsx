import React from "react";

import { Img } from "components";

const WebMockupEightPage = () => {
  return (
    <>
      <div className="bg-white_A700 h-[1200px] mx-[auto] relative w-[100%]">
        <div className="absolute h-[1200px] inset-[0] justify-center m-[auto] md:px-[20px] w-[100%]">
          <div className="bg-gradient  flex h-[100%] items-center justify-start m-[auto] w-[100%]">
            <Img
              src="images/img_rectangle.png"
              className="h-[1200px] sm:h-[auto] object-cover w-[100%]"
              alt="rectangle"
            />
          </div>
          <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] rotate-[35deg] w-[66%]">
            <div className="flex items-center justify-start w-[100%]">
              <Img
                src="images/img_rectangle6.png"
                className="h-[1168px] md:h-[auto] object-cover w-[100%]"
                alt="rectangleSix"
              />
            </div>
          </div>
        </div>
        <Img
          src="images/img_shadow.png"
          className="absolute bottom-[0] h-[1079px] object-cover right-[0] w-[auto]"
          alt="shadow"
        />
        <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] pb-[1037px] rotate-[35deg] w-[100%]">
          <Img
            src="images/img_placeyourdesign.png"
            className="h-[1200px] sm:h-[auto] object-cover w-[100%]"
            alt="placeyourdesign"
          />
        </div>
      </div>
    </>
  );
};

export default WebMockupEightPage;
