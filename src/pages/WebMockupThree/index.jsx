import React from "react";

import { Img } from "components";

const WebMockupThreePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex items-center justify-start w-[100%]">
          <div
            className="bg-cover bg-no-repeat h-[1200px] px-[150px] md:px-[20px] relative w-[100%]"
            style={{ backgroundImage: "url('images/img_rectangle.png')" }}
          >
            <div className="absolute h-[1200px] inset-y-[0] my-[auto] right-[13%] md:w-[100%] w-[77%]">
              <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[45%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_rectangle6_1200x546.png"
                    className="h-[1200px] md:h-[auto] object-cover w-[100%]"
                    alt="rectangleSix"
                  />
                </div>
              </div>
              <div className="absolute backdrop-opacity-[0.5] bg-black_900_0c blur-[100.00px] bottom-[0] h-[966px] left-[0] w-[62%]"></div>
            </div>
            <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[13%] my-[auto] w-[48%]">
              <Img
                src="images/img_placeyourdesign_1170x757.png"
                className="h-[1170px] md:h-[auto] object-cover w-[100%]"
                alt="placeyourdesign"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebMockupThreePage;
