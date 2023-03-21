import React from "react";

import { List, Text, Img } from "components";
import ColorDesignsystem from "components/ColorDesignsystem";

const ColorPage = () => {
  return (
    <>
      <div className="bg-gray_700 flex flex-col font-poppins items-start justify-start mx-[auto] p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
        <List
          className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-2 justify-start md:ml-[0] ml-[40px] self-stretch sm:w-[100%] w-[auto]"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-black text-bluegray_800 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              black
            </Text>
            <div className="flex items-start justify-start self-stretch w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[212px]">
                <Img
                  src="images/img_color.svg"
                  className="h-[100%] w-[100%]"
                  alt="color"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    black
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #000000
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-black text-bluegray_800 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              white
            </Text>
            <div className="flex items-start justify-start self-stretch w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[212px]">
                <Img
                  src="images/img_color_white_a700.svg"
                  className="h-[100%] w-[100%]"
                  alt="color"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    white
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FFFFFF
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
        <List
          className="flex-col gap-[48px] grid md:ml-[0] ml-[40px] mt-[269px] w-[70%]"
          orientation="vertical"
        >
          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <Text
              className="font-black text-bluegray_800 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              success
            </Text>
            <div className="gap-[16px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_gray_101.svg"
                  className="h-[100%] w-[100%]"
                  alt="color"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    50
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #ECFDF5
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_teal_50.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_One"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    100
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #D1FAE5
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_green_a100.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Two"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    200
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #A7F3D0
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_green_a200.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Three"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    300
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #6EE7B7
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_teal_300.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Four"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    400
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #34D399
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <div className="bg-teal_400 flex items-end justify-start p-[8px] rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[24px] mb-[50px] w-[24px]"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    500
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #10B981
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_teal_600.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Five"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    600
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #059669
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_teal_800.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Six"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    700
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #047857
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_teal_901.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Seven"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    800
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #065F46
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_teal_902.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Eight"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    900
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #064E3B
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <Text
              className="font-black text-bluegray_800 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              warning
            </Text>
            <div className="gap-[16px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_yellow_50.svg"
                  className="h-[100%] w-[100%]"
                  alt="color"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    50
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FFFBEB
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_yellow_100.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_One"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    100
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FEF3C7
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_amber_200.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Two"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    200
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FDE68A
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_amber_300.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Three"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    300
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FCD34D
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_yellow_700.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Four"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    400
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FBBF24
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <div className="bg-amber_700 flex items-end justify-start p-[8px] rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[24px] mb-[50px] w-[24px]"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    500
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #F59E0B
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_orange_800.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Five"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    600
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #D97706
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_deep_orange_900.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Six"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    700
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #B45309
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_deep_orange_901.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Seven"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    800
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #92400E
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_lime_900.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Eight"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    900
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #78350F
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
            <Text
              className="font-black text-bluegray_800 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              error
            </Text>
            <div className="gap-[16px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_red_50.svg"
                  className="h-[100%] w-[100%]"
                  alt="color"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    50
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FFF1F2
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_deep_orange_50.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_One"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    100
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FFE4E6
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_red_100.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Two"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    200
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FECDD3
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_pink_200.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Three"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    300
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FDA4AF
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_pink_300.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Four"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    400
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #FB7185
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <div className="bg-red_400 flex items-end justify-start p-[8px] rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[24px] mb-[50px] w-[24px]"
                    alt="videocamera"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    500
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #F43F5E
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_pink_600.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Five"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    600
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #E11D48
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_red_800.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Six"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    700
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #BE123C
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_pink_900.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Seven"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    800
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #9F1239
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col gap-[8px] h-[166px] md:h-[auto] items-start justify-start p-[16px] rounded-[8px] w-[100%]">
                <Img
                  src="images/img_color_pink_901.svg"
                  className="h-[100%] w-[100%]"
                  alt="color_Eight"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-black text-bluegray_800 text-left w-[auto]"
                    variant="body5"
                  >
                    900
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body6"
                  >
                    #881337
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
        <List
          className="sm:flex-col flex-row font-inter gap-[32px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-start max-w-[1200px] mb-[282px] md:ml-[0] ml-[70px] mt-[144px] w-[100%]"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-bluegray_904 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Neutral / 600"
                p202CFortySixFour="#1B253C"
              />
            </div>
            <ColorDesignsystem
              className="bg-bluegray_905 flex flex-col items-start justify-start p-[16px] w-[100%]"
              neutral500Four="Neutral / 500"
              p202CFortySixFour="#202C46"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-bluegray_700 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Neutral / 400"
                p202CFortySixFour="#4D566B"
              />
              <ColorDesignsystem
                className="bg-gray_500 flex flex-col items-start justify-end p-[12px] w-[100%]"
                neutral500Four="Neutral / 300"
                p202CFortySixFour="#9096A2Delete this?"
              />
              <ColorDesignsystem
                className="bg-bluegray_101 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Neutral / 200"
                p202CFortySixFour="#D1D4DB"
                texts="Form borders"
              />
              <ColorDesignsystem
                className="bg-gray_200 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Neutral / 100"
                p202CFortySixFour="#E9EAEC"
                texts="Lines / Borders"
              />
              <ColorDesignsystem
                className="bg-gray_102 flex flex-col items-start justify-end p-[15px] w-[100%]"
                neutral500Four="Neutral / 50"
                p202CFortySixFour="#F4F4F6"
                texts="Backgrounds only"
              />
              <ColorDesignsystem
                className="bg-white_A700 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Neutral / 0"
                p202CFortySixFour="#FFFFFF"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-indigo_700 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Blue / 700"
                p202CFortySixFour="#2240A4"
              />
              <ColorDesignsystem
                className="bg-indigo_500 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Blue / 600"
                p202CFortySixFour="#2A4EC7"
              />
            </div>
            <ColorDesignsystem
              className="bg-blue_A700 flex flex-col items-start justify-start p-[16px] w-[100%]"
              neutral500Four="Blue / 500"
              p202CFortySixFour="#315CEA"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-indigo_A200 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Blue / 400"
                p202CFortySixFour="#5A7DEE"
              />
              <ColorDesignsystem
                className="bg-indigo_100 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Blue / 300"
                p202CFortySixFour="#ADBEF7"
              />
              <ColorDesignsystem
                className="bg-blue_50 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Blue / 200"
                p202CFortySixFour="#EAEFFD"
              />
              <ColorDesignsystem
                className="bg-gray_51 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Blue / 100"
                p202CFortySixFour="#F5F7FE"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-deep_purple_500 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Purple / 600"
                p202CFortySixFour="#6436BF"
              />
            </div>
            <ColorDesignsystem
              className="bg-deep_purple_A200 flex flex-col items-start justify-start p-[16px] w-[100%]"
              neutral500Four="Purple / 500"
              p202CFortySixFour="#773FE2"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-deep_purple_300 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Purple / 400"
                p202CFortySixFour="#9265E8"
              />
              <ColorDesignsystem
                className="bg-deep_purple_100 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Purple / 300"
                p202CFortySixFour="#C9B2F3"
              />
              <ColorDesignsystem
                className="bg-deep_purple_50 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Purple / 200"
                p202CFortySixFour="#F1ECFC"
              />
              <ColorDesignsystem
                className="bg-gray_52 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Purple / 100"
                p202CFortySixFour="#F8F5FE"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-pink_700 flex flex-col items-center justify-start p-[16px] w-[100%]"
                neutral500Four="Magenta / 600"
                p202CFortySixFour="#C24764"
              />
            </div>
            <ColorDesignsystem
              className="bg-pink_400 flex flex-col items-center justify-start p-[16px] w-[100%]"
              neutral500Four="Magenta / 500"
              p202CFortySixFour="#E35275"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-pink_301 flex flex-col items-center justify-start p-[16px] w-[100%]"
                neutral500Four="Magenta / 400"
                p202CFortySixFour="#E97591"
              />
              <ColorDesignsystem
                className="bg-pink_100 flex flex-col items-center justify-start p-[16px] w-[100%]"
                neutral500Four="Magenta / 300"
                p202CFortySixFour="#F4BAC8"
              />
              <ColorDesignsystem
                className="bg-red_51 flex flex-col items-center justify-start p-[16px] w-[100%]"
                neutral500Four="Magenta / 200"
                p202CFortySixFour="#FCEEF1"
              />
              <ColorDesignsystem
                className="bg-gray_53 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Magenta / 100"
                p202CFortySixFour="#FEF6F8"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-green_600 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Green / 600"
                p202CFortySixFour="#21AF52"
              />
            </div>
            <ColorDesignsystem
              className="bg-green_A700 flex flex-col items-start justify-start p-[16px] w-[100%]"
              neutral500Four="Green / 500"
              p202CFortySixFour="#27CE60"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-green_400 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Green / 400"
                p202CFortySixFour="#52D880"
              />
              <ColorDesignsystem
                className="bg-green_A101 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Green / 300"
                p202CFortySixFour="#A9EBBF"
              />
              <ColorDesignsystem
                className="bg-green_50 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Green / 200"
                p202CFortySixFour="#E9FAEF"
              />
              <ColorDesignsystem
                className="bg-gray_54 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Green / 100"
                p202CFortySixFour="#F4FDF7"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-red_801 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Red / 600"
                p202CFortySixFour="#B71F3B"
              />
            </div>
            <ColorDesignsystem
              className="bg-red_601 flex flex-col items-start justify-start p-[16px] w-[100%]"
              neutral500Four="Red / 500"
              p202CFortySixFour="#DF2648"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-red_301 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Red / 400"
                p202CFortySixFour="#E9677F"
              />
              <ColorDesignsystem
                className="bg-pink_201 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Red / 300"
                p202CFortySixFour="#F2A6B4"
              />
              <ColorDesignsystem
                className="bg-red_101 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Red / 200"
                p202CFortySixFour="#F9D2D9"
              />
              <ColorDesignsystem
                className="bg-red_52 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Red / 100"
                p202CFortySixFour="#FCE9EC"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[2px] items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-orange_801 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Yellow / 600"
                p202CFortySixFour="#C77414"
              />
            </div>
            <ColorDesignsystem
              className="bg-yellow_900 flex flex-col items-start justify-start p-[16px] w-[100%]"
              neutral500Four="Yellow / 500"
              p202CFortySixFour="#F89118"
            />
            <div className="flex flex-col items-center justify-start w-[100%]">
              <ColorDesignsystem
                className="bg-orange_300 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Yellow / 400"
                p202CFortySixFour="#FAB261"
              />
              <ColorDesignsystem
                className="bg-orange_100 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Yellow / 300"
                p202CFortySixFour="#FCCF9C"
              />
              <ColorDesignsystem
                className="bg-yellow_101 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Yellow / 200"
                p202CFortySixFour="#FDE7CD"
              />
              <ColorDesignsystem
                className="bg-orange_50 flex flex-col items-start justify-start p-[16px] w-[100%]"
                neutral500Four="Yellow / 100"
                p202CFortySixFour="#FEF3E6"
              />
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default ColorPage;
