import PropTypes from "prop-types";

const FooterColumns = ({ className = "" }) => {
  return (
    <div
      className={`w-[306px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border text-left text-base text-ghostwhite-600  ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[29.4px]">
        <div className="w-[268.9px] flex flex-row items-start justify-start py-0 px-5 box-border">
          <img
            className="h-[85px] w-[68px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="self-stretch relative leading-[22px] uppercase">
          <span className = "clash-regular ">{`© COPYRIGHT 2024 `}</span>
          <span className="clash-medium font-bold ">EHSANXA.COM</span>
        </div>
      </div>
    </div>
  );
};

FooterColumns.propTypes = {
  className: PropTypes.string,
};

export default FooterColumns;
