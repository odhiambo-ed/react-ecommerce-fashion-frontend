import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[64px]",
  h2: "font-semibold sm:text-[40px] md:text-[46px] text-[54px]",
  h3: "sm:text-[38px] md:text-[44px] text-[48px]",
  h4: "sm:text-[32px] md:text-[34px] text-[36px]",
  h5: "sm:text-[28px] md:text-[30px] text-[32px]",
  h6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "text-[20px]",
  body2: "font-normal text-[19px]",
  body3: "text-[16px]",
  body4: "text-[15px]",
  body5: "text-[14px]",
  body6: "text-[12px]",
  body7: "font-medium text-[110px] sm:text-[48px] md:text-[48px]",
  body8: "font-normal text-[11px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
