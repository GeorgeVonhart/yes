import { useCallback } from "react";
import FooterColumns from "./FooterColumns";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BackgroundBorder = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onLinkContainerClick2 = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  return (
    <footer
      className={`self-stretch bg-gray-400 box-border flex flex-col items-center justify-start pt-[79px] px-5 pb-[39px] gap-[40px] max-w-full text-left text-base text-ghostwhite-600 border-[1px] border-solid border-ghostwhite-700 mq450:pt-[51px] mq450:pb-[25px] mq450:box-border mq900:gap-[20px] ${className}`}
    >
      <div className="w-[243px] h-[69px] relative hidden" />
      <div className="w-[284.4px] h-[23.6px] relative hidden" />
      <div className="w-[284.4px] h-[23.6px] relative hidden" />
      <div className="w-[1280px] flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <FooterColumns />
          <div className="w-[616.7px] flex flex-col items-start justify-start pt-[37.9px] px-0 pb-0 box-border max-w-full text-sm text-ghostwhite-400 ">
            <div className="w-[284.4px] h-[40.1px] relative">
              <div
                className="absolute top-[0px] left-[0px] w-[284.4px] h-[23.6px] flex flex-row items-start justify-start cursor-pointer"
                onClick={onLinkContainerClick}
              >
                <div className="absolute !m-[0] top-[-20px] left-[0px] leading-[22.8px] uppercase  inline-block min-w-[67.2px]">
                  Bonuses
                </div>
              </div>
              <div
                className="absolute top-[0px] left-[0px] w-[284.4px] h-[23.6px] flex flex-row items-start justify-start cursor-pointer"
                onClick={onLinkContainerClick2}
              >
              <div className="absolute top-[17.1px] left-[0.3px] leading-[23px] uppercase  flex items-center w-[105px] h-[23px] min-w-[105px]">
                Leaderboard
              </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="self-stretch w-7 relative max-h-full min-h-[217px]"
              loading="lazy"
              alt=""
              src="/link.svg"
            />
            <img
              className="self-stretch w-7 relative max-h-full min-h-[217px]"
              loading="lazy"
              alt=""
              src="/link-1.svg"
            />
            <img
              className="self-stretch w-7 relative max-h-full min-h-[217px]"
              loading="lazy"
              alt=""
              src="/link-2.svg"
            />
          </div>
        </div>
        <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-ghostwhite-500" />
      </div>
      <div className="w-[1280px] rounded-xl bg-ghostwhite-700 flex flex-row items-start justify-start py-4 px-5 box-border max-w-full text-center text-xs ">
        <div className="ml-[-83.9px] w-[1428px] relative leading-[18px] uppercase  flex items-center shrink-0 max-w-[116%]">
          <span className="w-full">
            <p className="clash-medium m-0">
              We do not take responsibility for any losses from gambling in
              casinos and betting sites which are linked or promoted on our
              website(s). As a player, you are responsible for
            </p>
            <p className="m-0">your bets.</p>
          </span>
        </div>
        <img
          className="h-[22px] w-[21.7px] relative ml-[-1344.1px]"
          loading="lazy"
          alt=""
          src="/svg-8.svg"
        />
      </div>
    </footer>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
};

export default BackgroundBorder;
