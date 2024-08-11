import { useCallback } from "react";
import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  const onLinkClick = useCallback(() => {
    window.open("https://csgoroll.com/r/juicy");
  }, []);

  return (
    <div
      className={`flex-1 rounded-xl [background:linear-gradient(180deg,_#161a27,_#1d2838)] box-border flex flex-col items-start justify-start pt-[85px] px-[30px] pb-[29px] relative gap-[24px] min-w-[313px] max-w-full z-[1] text-left text-base-8 text-ghostwhite-300  border-[2px] border-solid border-gray-100 mq900:pt-[55px] mq900:pb-5 mq900:box-border ${className}`}
    >
      <div className="w-[406.7px] h-[122px] absolute !m-[0] top-[-112px] left-[0px] overflow-hidden shrink-0" />
      <div className="w-[417.7px] h-[474.1px] relative rounded-xl [background:linear-gradient(180deg,_#161a27,_#1d2838)] box-border hidden max-w-full z-[1] border-[2px] border-solid border-gray-100" />
      <div className="flex flex-row items-start justify-start gap-[8px] mq900:flex-wrap">
        <div className="w-[93px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border">
          <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 z-[2] border-t-[1px] border-solid border-ghostwhite-500" />
        </div>
        <img
          className="h-6 w-6 relative object-cover min-h-[24px] z-[2]"
          loading="lazy"
          alt=""
          src="/svg-2@2x.png"
        />
        <div className="clash-medium relative leading-[22px] uppercase  inline-block min-w-[120px] z-[2]">
          DICEBLOX.COM
        </div>
        <div className="w-[93px] flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border">
          <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 z-[2] border-t-[1px] border-solid border-ghostwhite-500" />
        </div>
      </div>
      <img
        className="w-[174px] h-[177px] absolute !m-[0] top-[-94px] left-[116px] overflow-hidden shrink-0 object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/rolliconwebp@2x.png"
      />
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-xs text-ghostwhite-600 ">
        <div className="self-stretch rounded-3xs [background:linear-gradient(180deg,_#17171f,_#171d29)] flex flex-col items-start justify-start pt-4 px-4 pb-[15px] shrink-0 z-[2] text-ghostwhite-100 border-b-[1px] border-solid border-cornflowerblue-100">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 opacity-[0.5]">
            <div className="clash-regular w-[88px] relative leading-[18px] uppercase flex items-center justify-center shrink-0">
              Main Bonus
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-lgi-7 ">
            <div className="clash-medium w-[151.9px] relative leading-[28px] uppercase  flex items-center justify-center shrink-0">
              1 Free BATTLE
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-5 px-0 pb-7 shrink-0 z-[2] text-xs-8">
          <div className="self-stretch rounded-3xs bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-4 px-4 pb-3.5 border-b-[1px] border-solid border-darkgray">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5">
              <div className="clash-regular w-[50.2px] relative leading-[18px] uppercase flex items-center justify-center">
                Extra
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[43px] pb-[0.9px] z-[1] mt-[-0.9px] text-sm text-ghostwhite-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="clash-regular self-stretch relative leading-[23px] uppercase">
                +5% BONUS FOR EVERY DEPOSIT
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start shrink-0 max-w-full z-[2]"
          onClick={onLinkClick}
        >
          <div className="flex-1 shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] rounded-3xs [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.66),_rgba(255,_255,_255,_0)),_#0085ff] box-border flex flex-row items-start justify-start py-[15px] pr-[113px] pl-[115px] whitespace-nowrap max-w-full border-[1px] border-solid border-white mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="clash-semibold flex-1 relative text-mid leading-[21px] uppercase   text-white text-center inline-block min-w-[123.8px]">
              Claim Bonus
            </div>
          </div>
        </button>
        <div className="self-stretch flex flex-col items-start justify-start pt-[27.1px] px-0 pb-0 shrink-0 z-[2] text-left text-sm">
          <div className="self-stretch flex flex-row items-end justify-center py-0 px-5 gap-[6px]">
            <img
              className="h-6 w-6 relative object-cover min-h-[24px]"
              loading="lazy"
              alt=""
              src="/svg-3@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-px">
              <div className="clash-regular relative leading-[22.75px] uppercase">
                How to claim bonus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
