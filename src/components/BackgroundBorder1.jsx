import { useCallback, useState } from "react";
import FooterColumns from "./FooterColumns";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const BackgroundBorder1 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const [activeArrow, setActiveArrow] = useState(null);
  const links = [
    { src: 'link.svg', href: 'https://example.com/1' },
    { src: 'link-1.svg', href: 'https://example.com/2' },
    { src: 'link-2.svg', href: 'https://example.com/3' },
  ];
  const onLinkContainerClick = useCallback(() => {
    setActiveLink('bonuses');
    navigate("/");
  }, [navigate]);

  const onLinkContainerClick2 = useCallback(() => {
    setActiveLink('leaderboard');
    navigate("/leaderboard");
  }, [navigate]);

  
  return (
    <footer
      className={`self-stretch bg-gray-400 box-border flex flex-col items-center justify-start pt-[79px] px-5 pb-[39px] gap-[40px] shrink-0 max-w-full text-left text-sm text-ghostwhite-400  border-[1px] border-solid border-ghostwhite-700 mq450:pt-px mq450:pb-[25px] mq450:box-border mq750:gap-[20px] ${className}`}
    >
      <div className="w-[243px] h-[69px] relative hidden" />
      <div className="w-[284.4px] h-[23.6px] relative hidden" />
      <div className="w-[284.4px] h-[23.6px] relative hidden" />
      <div className="w-[284.4px] h-[23.6px] relative hidden" />
      <div className="w-[1280px] flex flex-col items-end justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <FooterColumns />
          <div className="w-[616.7px] flex flex-col items-start justify-start pt-[37.8px] px-0 pb-0 box-border max-w-full">
            <div className="w-[284.4px] relative">
              <div
                className="absolute top-[-20px] left-[0px] flex flex-row items-center justify-start cursor-pointer"
                onClick={onLinkContainerClick}
              >
                <div className="leading-[22.8px] uppercase inline-block min-w-[67.2px]">
                  Bonuses
                </div>
              </div>
              <div
                className="bottom-[-16.3px] left-[0.3px] flex flex-row items-center justify-start cursor-pointer"
                onClick={onLinkContainerClick2}
              >
                <div className="pt-1 leading-[22.75px] uppercase inline-block min-w-[105px] z-[1]">
                  Leaderboard
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`arrow-container ${activeArrow === index ? 'active' : ''}`}
                onClick={() => setActiveArrow(index)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="self-stretch w-7 relative max-h-full min-h-[217px] transition-transform duration-300 ease-in-out"
                  loading="lazy"
                  alt=""
                  src={link.src}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="self-stretch h-px relative box-border overflow-hidden shrink-0 z-[1] border-t-[1px] border-solid border-ghostwhite-500" />
      </div>
      <div className="w-full max-w-[1280px] mx-auto rounded-xl bg-ghostwhite-700 flex items-center py-4 px-2 text-xs text-ghostwhite-600 overflow-hidden">
      <img
    className="h-[22px] w-[21.7px] flex-shrink-0 mb-2"
    alt="Warning icon"
    src="/svg-8.svg"
  />
  <div className="flex-grow flex justify-center">
    <p className="m-0 text-center uppercase leading-[16px] max-w-[98%]">
      We do not take responsibility for any losses from gambling in casinos
      and betting sites which are linked or promoted on our website(s). As a
      player, you are responsible for your bets.
    </p>
  </div>
</div>
    </footer>
  );
};

BackgroundBorder1.propTypes = {
  className: PropTypes.string,
};

export default BackgroundBorder1;
