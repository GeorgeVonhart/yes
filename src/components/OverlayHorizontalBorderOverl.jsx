import { useCallback } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const OverlayHorizontalBorderOverl = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkContainerClick2 = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  return (
    <header
      className={`self-stretch [backdrop-filter:blur(24px)] bg-gray-700 box-border flex flex-row items-start justify-center pt-2 px-0 pb-[7px] min-h-[78px] top-[0] z-[99] sticky max-w-full text-left text-base text-white  border-b-[1px] border-solid border-ghostwhite-700 ${className}`}
    >
      <div className="w-[1280px] flex flex-row items-end justify-start pt-[3.5px] px-6 pb-[7.5px] box-border max-w-[1280px] mq1275:max-w-full">
        <div
          className="flex flex-row items-start justify-start cursor-pointer"
          onClick={onLinkContainerClick}
        >
          <img
            className="h-[50px] w-40 relative"
            loading="lazy"
            alt=""
            src="/svg1.svg"
          />
        </div>
        <div className="w-[904px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border min-w-[435.16px]">
            <div className="flex flex-row items-start justify-start py-0 px-0 relative gap-[16px]">
              <div
                className="flex flex-col items-start justify-start opacity-[0.5] cursor-pointer"
                onClick={onLinkContainerClick1}
              >
                <div className="flex flex-col items-start justify-start">
                  <a className="[text-decoration:none] relative leading-[22px] uppercase  text-[inherit] inline-block min-w-[77px]">
                    Bonuses
                  </a>
                </div>
              </div>
              <div
                className="flex flex-col items-start justify-start cursor-pointer text-base-5 text-ghostwhite-100"
                onClick={onLinkContainerClick2}
              >
                <div className="flex flex-col items-start justify-start">
                  <a className="[text-decoration:none] relative leading-[22px] uppercase  text-[inherit] inline-block min-w-[77px]">
                    Leaderboard
                  </a>
                </div>
              </div>
              <div className="h-3.5 !m-[0] absolute bottom-[-32px] left-[285px] flex flex-col items-start justify-start">
                <div className="w-5 h-3.5 relative flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain absolute left-[-74px] top-[1px] [transform:scale(8.355)]"
                    loading="lazy"
                    alt=""
                    src="/svg-11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

OverlayHorizontalBorderOverl.propTypes = {
  className: PropTypes.string,
};

export default OverlayHorizontalBorderOverl;
