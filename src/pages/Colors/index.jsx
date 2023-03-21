import React from "react";

import { Text } from "components";

const ColorsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-start mx-[auto] p-[95px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start max-w-[1684px] mb-[172px] mx-[auto] w-[100%]">
          <Text
            className="font-semibold text-bluegray_501 text-left tracking-[3.00px] uppercase w-[auto]"
            variant="body5"
          >
            Theming
          </Text>
          <Text
            className="text-gray_900 text-left tracking-[1.00px] w-[auto]"
            as="h1"
            variant="h1"
          >
            Color Themes
          </Text>
          <Text
            className="font-bold mt-[109px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
            as="h3"
            variant="h3"
          >
            Grayscale
          </Text>
          <div className="md:gap-[20px] gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[55px] w-[100%]">
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[26px] justify-start pb-[37px] rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-gray_900 h-[220px] rounded-[32px] w-[100%]"></div>
              <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Title-Active
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for both links and titles.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[30px] justify-start pb-[35px] rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-bluegray_701 h-[220px] rounded-[32px] w-[100%]"></div>
              <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[34px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Body
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for body copy text
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[359px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[10px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[29px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[auto]">
                <Text
                  className="font-bold mt-[218px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Label
                </Text>
                <Text
                  className="mb-[8px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for the label text.
                </Text>
              </div>
              <div className="absolute bg-bluegray_501 h-[220px] inset-x-[0] mx-[auto] rounded-[32px] top-[0] w-[100%]"></div>
            </div>
            <div className="hover:cursor-pointer md:h-[358px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[12px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[34px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[auto]">
                <Text
                  className="font-bold mt-[213px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Placeholder
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for initial copy of inputs.
                </Text>
              </div>
              <div className="absolute bg-bluegray_300 h-[220px] inset-x-[0] mx-[auto] rounded-[32px] top-[0] w-[100%]"></div>
            </div>
            <div className="hover:cursor-pointer md:h-[358px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[10px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[32px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[100%]">
                <Text
                  className="font-bold mt-[214px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Line
                </Text>
                <Text
                  className="mb-[5px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for line based elements.
                </Text>
              </div>
              <div className="absolute bg-gray_300 h-[220px] inset-x-[0] mx-[auto] rounded-[32px] top-[0] w-[100%]"></div>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[30px] items-center justify-start pb-[35px] rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-bluegray_51 border-[1px] border-gray_300 border-solid h-[220px] rounded-[32px] w-[100%]"></div>
              <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Input Background
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for input bg accessibility.
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[359px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[9px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[29px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[auto]">
                <Text
                  className="font-bold mt-[221px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Background
                </Text>
                <Text
                  className="mb-[6px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for element backgrounds.
                </Text>
              </div>
              <div className="absolute bg-gray_55 border-[1px] border-gray_300 border-solid h-[220px] inset-x-[0] mx-[auto] rounded-[32px] top-[0] w-[100%]"></div>
            </div>
            <div className="hover:cursor-pointer md:h-[358px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[10px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[27px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[auto]">
                <Text
                  className="font-bold mt-[219px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Off-white
                </Text>
                <Text
                  className="mb-[10px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used to avoid darkmode strain.
                </Text>
              </div>
              <div className="absolute bg-gray_56 border-[1px] border-gray_300 border-solid h-[220px] inset-x-[0] mx-[auto] rounded-[32px] top-[0] w-[99%]"></div>
            </div>
          </div>
          <Text
            className="font-bold mt-[208px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
            as="h3"
            variant="h3"
          >
            Colors
          </Text>
          <div className="md:gap-[20px] gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[61px] w-[100%]">
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[29px] justify-start pb-[35px] rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-deep_purple_A400 flex flex-row gap-[22px] items-start justify-start p-[33px] sm:px-[20px] rounded-[32px] w-[100%]">
                <div className="bg-deep_purple_900 h-[48px] mb-[7px] mt-[99px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-deep_purple_A100 h-[48px] mb-[7px] mt-[99px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
              <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[33px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Primary
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used as the primary color.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[30px] justify-start pb-[37px] rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-cyan_400 flex flex-row gap-[22px] items-start justify-start p-[30px] sm:px-[20px] rounded-[32px] w-[100%]">
                <div className="bg-cyan_700 h-[48px] mb-[10px] mt-[102px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-light_blue_A100 h-[48px] mb-[10px] mt-[102px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
              <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[33px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Secondary
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for accents & actions.
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[358px] h-[390px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[9px] inset-x-[0] items-start justify-center mx-[auto] p-[29px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[100%]">
                <Text
                  className="font-bold mt-[188px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Error
                </Text>
                <Text
                  className="mb-[38px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for error states.
                </Text>
              </div>
              <div className="absolute bg-pink_401 flex flex-row gap-[22px] inset-x-[0] items-start justify-start mx-[auto] p-[30px] sm:px-[20px] rounded-[32px] top-[0] w-[100%]">
                <div className="bg-pink_A700 h-[48px] mb-[10px] mt-[102px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-pink_A101 h-[48px] mb-[10px] mt-[102px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[27px] justify-start pb-[2px] pr-[2px] rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-teal_A700 flex flex-row gap-[22px] items-start justify-start p-[30px] sm:px-[20px] rounded-[32px] w-[100%]">
                <div className="bg-teal_601 h-[48px] mb-[10px] mt-[102px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-teal_A400 h-[48px] mb-[10px] mt-[102px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start mb-[35px] md:ml-[0] ml-[32px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Success
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used for success states.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[29px] justify-start rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-orange_A201 flex flex-row gap-[22px] items-start justify-start p-[33px] sm:px-[20px] rounded-[32px] w-[100%]">
                <div className="bg-lime_901 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-orange_A100 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
              <div className="flex flex-col gap-[10px] items-start justify-start mb-[33px] md:ml-[0] ml-[29px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Warning
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  Used to represent caution.
                </Text>
              </div>
            </div>
            <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[29px] justify-start rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="bg-gradient1  flex flex-row gap-[22px] items-start justify-start p-[33px] sm:px-[20px] rounded-[32px] w-[100%]">
                <div className="bg-deep_purple_A400 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-deep_purple_A100 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start mb-[33px] md:ml-[0] ml-[33px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Gradient Primary
                </Text>
                <Text
                  className="not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  The primary gradient.
                </Text>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[359px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[10px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[27px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[auto]">
                <Text
                  className="font-bold mt-[223px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Gradient Secondary
                </Text>
                <Text
                  className="mb-[7px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  The secondary gradient.
                </Text>
              </div>
              <div className="absolute bg-gradient2  flex flex-row gap-[22px] inset-x-[0] items-start justify-start mx-[auto] p-[33px] sm:px-[20px] rounded-[32px] top-[0] w-[100%]">
                <div className="bg-deep_purple_A400 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-light_blue_A100 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[359px] h-[360px] hover:relative relative hover:shadow-bs2 hover:w-[100%] w-[100%]">
              <div className="absolute bg-white_A700 flex flex-col gap-[13px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[29px] sm:px-[20px] rounded-[32px] shadow-bs2 w-[100%]">
                <Text
                  className="font-bold mt-[218px] text-gray_900 text-left tracking-[1.00px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Gradient Accent
                </Text>
                <Text
                  className="mb-[5px] not-italic text-bluegray_501 text-left tracking-[1.00px] w-[auto]"
                  variant="body2"
                >
                  An accent gradient.
                </Text>
              </div>
              <div className="absolute bg-gradient3  flex flex-row gap-[22px] inset-x-[0] items-start justify-start mx-[auto] p-[33px] sm:px-[20px] rounded-[32px] top-[0] w-[100%]">
                <div className="bg-pink_401 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
                <div className="bg-orange_A100 h-[48px] mb-[8px] mt-[98px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[0] rounded-tr-[50%] w-[48px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
