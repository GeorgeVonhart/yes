import SocialLinks from "./SocialLinks";
import PropTypes from "prop-types";

const Container2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start pt-[85.7px] px-5 pb-32 box-border relative gap-10 shrink-0 max-w-full text-center text-29xl text-ghostwhite-100  mq450:gap-[35px] mq450:pb-[54px] mq450:box-border mq750:gap-[69px] mq1100:pt-px mq1100:pb-[83px] mq1100:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] right-[0px] bottom-[-4px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/grafittipatternsvg.svg"
      />
      <div className="w-[652px] flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <textarea
            className="[border:none] bg-ghostwhite-400 h-56 w-[672px] [outline:none] absolute !m-[0] top-[-213.3px] right-[-10.1px] [filter:blur(300px)] rounded-9980xl z-[1]"
            rows={11}
            cols={34}
          />
          <h1 className="m-0 flex-1 relative text-inherit leading-[90px] uppercase inline-block [filter:blur(25px)] opacity-[0.15] max-w-full z-[2] font-inherit mq450:text-10xl mq450:leading-[54px] mq750:text-19xl mq750:leading-[72px]">
            <span className="clash-medium">{`Follow `}</span>
            <span className="clash-bold text-royalblue-100">
              EHSAN’S
            </span>
            <span className="text-royalblue-300">
              <span className="clash-semibold text-ghostwhite-100">{` `}</span>
              <span className="clash-regular">Socials</span>
            </span>
          </h1>
        </div>
        <h1 className="m-0 flex-1 relative text-inherit leading-[90px] uppercase inline-block max-w-full z-[3] ml-[-652px] font-inherit mq450:text-10xl mq450:leading-[54px] mq750:text-19xl mq750:leading-[72px]">
          <span className="clash-regular">{`Follow `}</span>
          <span className="clash-semibold text-royalblue-100">
            EHSAN’S
          </span>
          <span className="text-royalblue-300">
            <span className="text-ghostwhite-100">{` `}</span>
            <span className="clash-medium ">Socials</span>
          </span>
        </h1>
      </div>
      <SocialLinks propWidth="652px" />
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
