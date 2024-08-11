import SocialLinks from "./SocialLinks";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[859px]shrink-0 flex flex-col items-center justify-start pt-[314px] pb-32 pr-5 pl-[21px] box-border relative gap-[138.2px] max-w-full text-center text-29xl text-ghostwhite-100  mq450:h-auto mq450:gap-[35px] mq900:gap-[69px] mq900:pt-[133px] mq900:pb-[54px] mq900:box-border mq1275:pt-[204px] mq1275:pb-[83px] mq1275:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] right-[0px] bottom-[-4px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/grafittipatternsvg.svg"
      />
      <div className="whitespace-nowrap mt-[-441.5px] w-[672px] h-[303.3px] relative max-w-full shrink-0">
        <div className="absolute top-[0px] left-[0px] [filter:blur(300px)] rounded-9980xl bg-ghostwhite-400 w-[672px] h-56 z-[1]" />
        <h1 className="m-0 absolute w-[calc(100%_-_20px)] top-[213.3px] left-[9.9px] text-inherit leading-[90px] uppercase flex items-center z-[1] mq450:text-10xl mq450:leading-[54px] mq900:text-19xl mq900:leading-[72px]">
          <span className="w-full">
            <span className = "clash-regular">{`Follow `}</span>
            <span className = "text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0066ff,_#579aff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              EHSAN’S
            </span>
            <span className="text-royalblue-300">
              <span className="text-ghostwhite-100">{` `}</span>
              <span>Socials</span>
            </span>
          </span>
        </h1>
      </div>
      <SocialLinks />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
