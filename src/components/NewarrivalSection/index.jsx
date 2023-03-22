import React from 'react'
import { Img, Text, List } from "components";

const index = () => {
  return (
    <div className="flex flex-col font-poppins md:gap-[40px] gap-[60px] items-start justify-start max-w-[1170px] mt-[140px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
      <div className="flex flex-col gap-[20px] items-start justify-start self-stretch w-[auto]">
        <div className="flex flex-row font-poppins gap-[16px] items-center justify-start self-stretch w-[auto]">
          <div className="bg-red_600 h-[40px] rounded-[4px] w-[2%]"></div>
          <Text
            className="font-semibold text-left text-red_600 w-[auto]"
            variant="body3"
          >
            Featured
          </Text>
        </div>
        <Text
          className="font-inter font-semibold text-black_900 text-left tracking-[1.44px] w-[auto]"
          as="h4"
          variant="h4"
        >
          New Arrival
        </Text>
      </div>
      <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
        <div className="bg-black_900 flex md:h-[511px] h-[600px] justify-end pt-[29px] sm:px-[20px] px-[29px] relative rounded-[4px] md:w-[100%] w-[49%]">
          <Img
            src="images/img_ps5slimgoedko.png"
            className="h-[511px] mt-[auto] mx-[auto] object-cover w-[511px]"
            alt="ps5slimgoedko"
          />
          <div className="absolute bottom-[5%] flex flex-col gap-[16px] items-start justify-start left-[6%] self-stretch w-[auto]">
            <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                as="h6"
                variant="h6"
              >
                PlayStation 5
              </Text>
              <Text
                className="font-normal font-poppins leading-[21.00px] md:max-w-[100%] max-w-[242px] not-italic text-gray_50 text-left"
                variant="body5"
              >
                Black and White version of the PS5 coming out on sale.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-medium text-left text-white_A700 w-[auto]"
                variant="body3"
              >
                Shop Now
              </Text>
              <Img
                src="images/img_underline_white_a700.svg"
                className="h-[1px] w-[81px]"
                alt="underline_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
          <div className="bg-black_901 h-[284px] sm:pl-[20px] pl-[24px] relative rounded-[4px] w-[100%]">
            <Img
              src="images/img_attractivewoma.png"
              className="absolute h-[284px] inset-y-[0] my-[auto] object-cover right-[0] w-[76%]"
              alt="attractivewoma"
            />
            <div className="absolute bottom-[8%] flex flex-col gap-[16px] items-start justify-start left-[8%] self-stretch w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Women’s Collections
                </Text>
                <Text
                  className="font-normal font-poppins leading-[21.00px] md:max-w-[100%] max-w-[255px] not-italic text-gray_50 text-left"
                  variant="body5"
                >
                  Featured woman collections that give you another vibe.
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  Shop Now
                </Text>
                <Img
                  src="images/img_underline_white_a700.svg"
                  className="h-[1px] w-[81px]"
                  alt="underline_Two"
                />
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 justify-center self-stretch sm:w-[100%] w-[auto]"
            orientation="horizontal"
          >
            <div className="bg-black_900 md:h-[222px] h-[284px] p-[24px] sm:px-[20px] relative rounded-[4px] w-[100%]">
              <div className="absolute h-[222px] inset-[0] justify-center m-[auto] w-[78%]">
                <div className="backdrop-opacity-[0.5] bg-bluegray_100_e5 blur-[300.00px] h-[196px] m-[auto] rounded-[50%] w-[196px]"></div>
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                  <Img
                    src="images/img_69694768amazo.png"
                    className="h-[221px] md:h-[auto] object-cover w-[91%]"
                    alt="69694768amazo"
                  />
                </div>
              </div>
              <div className="absolute bottom-[8%] flex flex-col gap-[8px] items-start justify-start left-[8%] self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Speakers
                  </Text>
                  <Text
                    className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
                    variant="body5"
                  >
                    Amazon wireless speakers
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    Shop Now
                  </Text>
                  <Img
                    src="images/img_underline_white_a700.svg"
                    className="h-[1px] w-[81px]"
                    alt="underline"
                  />
                </div>
              </div>
            </div>
            <div className="bg-black_900 md:h-[238px] h-[284px] p-[16px] relative rounded-[4px] w-[100%]">
              <div className="h-[238px] m-[auto] w-[238px]">
                <div className="backdrop-opacity-[0.5] bg-bluegray_100_e5 blur-[300.00px] h-[238px] m-[auto] rounded-[50%] w-[238px]"></div>
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[4px] w-[89%]">
                  <Img
                    src="images/img_652e82cd70aa652.png"
                    className="h-[203px] md:h-[auto] mb-[7px] mt-[4px] object-cover w-[100%]"
                    alt="652e82cd70aa652"
                  />
                </div>
              </div>
              <div className="absolute bottom-[8%] flex flex-col gap-[8px] items-start justify-start left-[9%] self-stretch w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-inter font-semibold text-gray_50 text-left tracking-[0.72px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Perfume
                  </Text>
                  <Text
                    className="font-normal font-poppins not-italic text-gray_50 text-left w-[auto]"
                    variant="body5"
                  >
                    GUCCI INTENSE OUD EDP
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    Shop Now
                  </Text>
                  <Img
                    src="images/img_underline_white_a700.svg"
                    className="h-[1px] w-[81px]"
                    alt="underline"
                  />
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
}

export default index