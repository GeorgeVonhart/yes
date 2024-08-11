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
      className={`flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border shrink-0 text-center text-5xl text-ghostwhite-100 ${className}`}
      style={socialLinksStyle}
    >
      <div className="w-[410.7px] flex flex-col items-center justify-start gap-[48px] max-w-full">
        <div className="self-stretch rounded-md bg-gray-400 flex flex-col items-center justify-start pt-[79px] pb-[43px] px-[33px] relative gap-[24px] border-[1px] border-solid border-ghostwhite-700">
          <img
            className="h-[88px] w-[88px] absolute top-[-44px] left-1/2 transform -translate-x-1/2"
            loading="lazy"
            alt=""
            src="/twitterglowingsvg.svg"
          />
          <h2 className="clash-semi-bold m-0 relative text-inherit leading-[30px] uppercase font-inherit whitespace-nowrap text-center">
            X / Twitter
          </h2>
          <div className="w-full text-base text-ghostwhite-300 uppercase leading-[22px] text-center">
            Stay in Touch
          </div>
          <div className=" flex flex-row items-center justify-center">
          <button className="cursor-pointer border-none p-0 bg-transparent flex items-center justify-center" style={{ width: '150px', height: '40px' }}> {/* Set width to 30px, adjust as needed */}
  <div className="button-outline button-gradient2 relative flex items-center justify-center py-[9px] px-[19px] rounded-8xs w-full h-full">
    <div className="clash-medium text-mid leading-[21px] uppercase text-white text-center relative z-10 flex items-center justify-center w-full h-full">
      Follow
    </div>
    <div className="absolute inset-0 rounded-[inherit]" style={{
      content: '""',
      padding: '2px',
      background: 'linear-gradient(to bottom, cyan, transparent)',
      borderRadius: 'inherit',
      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      maskComposite: 'exclude',
    }}></div>
  </div>
</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center py-0 px-[35px] text-base text-ghostwhite-600">
          <div className="relative leading-[24px] uppercase text-center z-[1]">
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
  propWidth: PropTypes.any,
};

export default SocialLinks;
