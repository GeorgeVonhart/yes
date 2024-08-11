import { useMemo } from "react";
import PropTypes from "prop-types";

const SocialLinks = ({ className = "", propWidth }) => {
  const socialLinksStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[673px] flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full shrink-0 text-center text-5xl text-ghostwhite-100  ${className}`}
      style={socialLinksStyle}
    >
      <div className="w-[410.7px] flex flex-col items-end justify-start gap-[96px] max-w-full mq450:gap-[48px]">
        <div className="self-stretch rounded-md bg-gray-400 flex flex-row flex-wrap items-start justify-start pt-[79px] pb-[43px] pr-[31px] pl-[33px] relative gap-[12px] z-[1] border-[1px] border-solid border-ghostwhite-700">
          <img
            className="h-[88px] w-[88px] absolute !m-[0] top-[-17px] left-[161.3px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/twitterglowingsvg.svg"
          />
          <div className="w-[85.1px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border">
            <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 border-t-[1px] border-solid border-ghostwhite-500" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[11.8px] min-w-[161px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[36px] min-w-[98px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h2 className="clash semi-bold m-0 relative text-inherit leading-[30px] uppercase  font-inherit whitespace-nowrap mq450:text-lgi mq450:leading-[24px]">
                  X / Twitter
                </h2>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[15px] text-base text-ghostwhite-300 ">
                  <div className="clash-regular flex-1 relative leading-[22px] uppercase inline-block min-w-[119.6px]">
                    Stay in Touch
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start">
                  <div className="flex-1 shadow-[0px_5px_5px_rgba(0,_0,_0,_0.15)] rounded-8xs [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.66),_rgba(255,_255,_255,_0)),_#0085ff] flex flex-row items-start justify-start py-[9px] px-[19px] border-[1px] border-solid border-white">
                    <div className="clash-semibold flex-1 relative text-base leading-[21px] uppercase   text-white text-center inline-block min-w-[77px] z-[1]">
                      Follow
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[85.1px] flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 box-border">
              <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 border-t-[1px] border-solid border-ghostwhite-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-[35px] text-base text-ghostwhite-600">
          <div className="relative leading-[24px] uppercase  z-[1]">
            <p className="clash-medium m-0">LIFESTYLE, GAMBLING, GAMING AND MORE</p>
            <p className="clash-medium m-0 text-royalblue-300">ENJOY!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default SocialLinks;
