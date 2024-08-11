import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container1 from "./Container1";
import PropTypes from "prop-types";

const Body = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate('/'); // Navigate to home (bonuses)
  }, [navigate]);

  const onLinkContainerClick1 = useCallback(() => {
    navigate('/leaderboard'); // Navigate to leaderboard
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start min-w-[320px] min-h-[1200px] max-w-full text-left text-base-8 text-ghostwhite-300  ${className}`}
    >
      <header className="self-stretch [backdrop-filter:blur(24px)] bg-gray-700 box-border flex flex-row items-start justify-center pt-2 px-0 pb-[7px] min-h-[78px] top-[0] z-[99] sticky max-w-full text-left text-base text-ghostwhite-100  border-b-[1px] border-solid border-ghostwhite-700">
        <div className="w-[1280px] flex flex-row items-end justify-start pt-[3.5px] px-6 pb-[7.5px] box-border max-w-[1280px] mq1625:max-w-full">
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={onLinkContainerClick}
          >
            <img
              className="h-[50px] w-40 relative"
              loading="lazy"
              alt=""
              src="/svg.svg"
            />
          </div>
          <div className="w-[904px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border min-w-[435.16px]">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0 relative gap-[16px]">
                <div
                  className="h-[22px] w-12 opacity-[0.5] cursor-pointer"
                  onClick={onLinkContainerClick}
                />
                <div
                  className="flex flex-col items-start justify-start cursor-pointer"
                  onClick={onLinkContainerClick}
                >
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[22px] uppercase  text-[inherit] inline-block min-w-[77px]">
                      Bonuses
                    </a>
                  </div>
                </div>
                <div
                  className="flex flex-col items-start justify-start opacity-[0.5] cursor-pointer"
                  onClick={onLinkContainerClick1}
                >
                  <div className="flex flex-col items-start justify-start">
                    <a className="[text-decoration:none] relative leading-[22px] uppercase  text-[inherit] inline-block min-w-[118px]">
                      Leaderboard
                    </a>
                  </div>
                </div>
                <div className="!m-[0] absolute bottom-[-32px] left-[93.5px] flex flex-col items-start justify-start">
                  <img
                    className="w-5 h-3.5 relative"
                    loading="lazy"
                    alt=""
                    src="/svg-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[39px] w-[168px] hidden" />
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="h-[1163px] flex flex-row items-start justify-start pt-14 px-0 pb-0 box-border max-w-[1280px] mq900:pt-[23px] mq900:box-border mq1275:pt-9 mq1275:box-border mq1625:h-auto mq1625:max-w-full">
          <div className="w-[1280px] flex flex-col items-start justify-start pt-[191px] px-[515px] pb-[308.8px] box-border gap-[298.9px] max-w-full mq450:gap-[37px] mq450:pl-5 mq450:pr-5 mq450:box-border mq900:gap-[75px] mq900:pt-[81px] mq900:px-32 mq900:pb-[131px] mq900:box-border mq1275:gap-[149px] mq1275:pt-[124px] mq1275:px-[257px] mq1275:pb-[201px] mq1275:box-border">
            <div className="ml-[-544px] w-[1338px] flex flex-row flex-wrap items-start justify-start gap-[42px] max-w-[536%] shrink-0 mq900:gap-[21px]">
              <Container1 />
              <Container1 />
              <Container1 />
            </div>
            <div className="whitespace-nowrap flex flex-col items-start justify-start gap-[9.7px] text-12xl-7 text-ghostwhite-100">
              <div className="relative leading-[53px] uppercase  z-[1] mq450:text-lgi mq450:leading-[32px] mq900:text-6xl mq900:leading-[42px]">
                <span className = " whitespace-nowrapclash-medium">{`More `}</span>
                <span className="whitespace-nowrap clash-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0075ff,_#79b7ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Bonuses
                </span>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[66px] pl-[65px] text-center text-base text-ghostwhite-600  mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="clash-regular relative leading-[22px] uppercase inline-block min-w-[119px] whitespace-nowrap z-[1]">
                  Coming Soon...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;
