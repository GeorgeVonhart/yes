import { useCallback, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container1 from "./Container1";
import PropTypes from "prop-types";
import DiscordContainer from './DiscordContainer';

const Body = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('bonuses');
  const [svgPosition, setSvgPosition] = useState('25.5px');
  const [isFlexRow, setIsFlexRow] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    // Set active link based on current route
    if (location.pathname === "/") {
      setActiveLink('bonuses');
      setSvgPosition('25.5px');
      setIsFlexRow(false);
    } else if (location.pathname === "/leaderboard") {
      setActiveLink('leaderboard');
      setSvgPosition('255.5px');
      setIsFlexRow(true);
    }
  }, [location]);

  const handleLinkClick = useCallback((link) => {
    setActiveLink(link);
    setSvgPosition(link === 'bonuses' ? '25.5px' : '255.5px');
    setIsFlexRow(link === 'leaderboard');
    navigate(link === 'bonuses' ? '/' : '/leaderboard');
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start min-w-[320px] min-h-[1200px] max-w-full text-left text-base-8 text-ghostwhite-300 ${className}`}
    >
      <header className={`self-stretch [backdrop-filter:blur(24px)] bg-gray-700 box-border flex ${isFlexRow ? 'flex-row' : 'flex-col'} items-start justify-center pt-2 px-0 pb-[7px] min-h-[78px] top-[0] z-[99] sticky max-w-full text-left text-base text-ghostwhite-100 border-b-[1px] border-solid border-ghostwhite-700`}>
        <div className={`w-[1280px] flex ${isFlexRow ? 'flex-row' : 'flex-col'} items-end justify-start pt-[3.5px] px-6 pb-[7.5px] box-border max-w-[1280px] mq1275:max-w-full`}>
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={() => handleLinkClick('bonuses')}
          >
            <svg width="160" height="51" viewBox="0 0 160 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG content */}
            </svg>
          </div>
          <div
            className="flex flex-row items-start justify-start cursor-pointer"
            onClick={() => handleLinkClick('leaderboard')}
          >
            {/* Additional content for leaderboard if needed */}
          </div>
        </div>
      </header>
      <Container1 />
      <DiscordContainer />
    </section>
  );
};

Body.propTypes = {
  className: PropTypes.string,
};

export default Body;
