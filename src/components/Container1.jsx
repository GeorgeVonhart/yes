import { useCallback, useState } from "react";
import PropTypes from "prop-types";

const Container1 = ({ className = "", variant = "default" }) => {
  const onLinkClick = useCallback(() => {
    if (variant === "discord") {
      // Add Discord link or action here
    } else {
      window.open("https://csgoroll.com/r/juicy");
    }
  }, [variant]);
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout
    setIsHovered(true);
  }, [timeoutId]);

  const handleMouseLeave = useCallback(() => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 1000); // 1-second delay before hiding
    setTimeoutId(id);
  }, []);

  return (
    <div
      className={`flex-1 rounded-xl bg-gradient-to-b from-[#161a27] to-[#1d2838] box-border flex flex-col items-center justify-start pt-8 px-6 pb-6 relative gap-8 min-w-[300px] max-w-[600px] mx-auto text-center text-base-8 text-ghostwhite-300 border-2 border-solid border-transparent ${className}`}
    >
      {/* Top Decorative Elements */}
      <div className="w-full h-32 absolute top-[-60px] left-0 overflow-hidden shrink-0" />
      <div className="w-full h-[474.1px] relative rounded-xl bg-gradient-to-b from-[#161a27] to-[#1d2838] box-border hidden max-w-full border-2 border-solid border-[#8e929d]" />

      {/* Header */}
      <div className="flex items-center justify-center gap-4 w-full max-w-[600px] mx-auto">
        <div className="w-24 flex flex-col items-center justify-start pt-3 px-0 pb-0 box-border">
          <div className="w-full h-px relative box-border overflow-hidden shrink-0 border-t border-solid border-ghostwhite-500" />
        </div>
        <img
          className="h-6 w-6 relative object-cover min-h-[24px]"
          loading="lazy"
          alt=""
          src="/svg-2@2x.png"
        />
        <div className="clash-medium leading-6 uppercase text-center">
          DICEBLOX.COM
        </div>
        <img
          className="h-6 w-6 relative object-cover min-h-[24px]"
          loading="lazy"
          alt=""
          src="/svg-2@2x.png"
        />
        <div className="w-24 flex flex-col items-center justify-start pt-3 px-0 pb-0 box-border">
          <div className="w-full h-px relative box-border overflow-hidden shrink-0 border-t border-solid border-ghostwhite-500" />
        </div>
      </div>

      {/* Main Content */}
      <img
        className=" w-[124px] h-[196.5px] absolute bottom-3/4 left-1/2 transform -translate-x-1/2 overflow-hidden shrink-0 object-contain z-2 mb-5"
        loading="lazy"
        alt=""
        src="/rolliconwebp@2x.png"
      />
      <div className="self-stretch flex flex-col items-center justify-start max-w-full text-center text-9xl text-ghostwhite-600">
        {/* Container for Bonus Sections */}
        <div className="flex flex-col items-center w-full max-w-[600px] mx-auto gap-8 sm:gap-12 md:gap-16">
          {/* Main Bonus */}
          <div className="w-full max-w-[600px] rounded-3xs bg-gradient-to-b from-[#17171f] to-[#171d29] flex flex-col items-center justify-start pt-4 px-4 pb-4 text-ghostwhite-100 border-b border-solid border-cornflowerblue-100">
            <div className="flex flex-col items-center justify-center py-0 px-5 opacity-50 w-full">
              <div className="clash-regular text-center leading-4 uppercase flex items-center justify-center">
                Main Bonus
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-0 px-5 w-full">
              <div className="text-2xl clash-medium text-center leading-7 uppercase flex items-center justify-center">
                1 Free BATTLE
              </div>

            </div>

          </div>

          {/* Extra Bonus */}
          <div className="w-full max-w-[600px] rounded-3xs bg-gray-400 overflow-hidden flex flex-col items-center justify-start pt-4 px-4 pb-3.5 border-b border-solid border-darkgray">
            <div className="flex flex-col items-center justify-start py-0 px-5 w-full">
              <div className="clash-regular text-center leading-4 uppercase flex items-center justify-center">
                Extra
              </div>
            </div>
            <div className="flex flex-col items-center justify-start pt-0 px-5 text-sm text-ghostwhite-100 w-full">
              <div className="clash-regular text-center leading-6 uppercase">
                +5% BONUS FOR EVERY DEPOSIT
              </div>
            </div>
          </div>
        </div>

        {/* Claim Bonus Button */}
        <div className="mt-8 w-full max-w-[600px] mx-auto">
          <button
            className="relative cursor-pointer p-0 bg-transparent flex items-center justify-center w-full sm:w-auto"
            onClick={onLinkClick}
          >
            <div className="button-outline button-gradient relative w-full">
              <div className="clash-medium text-mid leading-5 uppercase text-white text-center inline-block min-w-[120px]">
                Claim Bonus
              </div>
              <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                  content: '""',
                  padding: '2px',
                  background: 'linear-gradient(to bottom, cyan, transparent)',
                  borderRadius: 'inherit',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                }}
              ></div>
            </div>
          </button>
        </div>

        {/* How to Claim Bonus Section */}
        <div className="self-stretch flex flex-col items-center justify-start pt-6 px-4 text-center text-sm">
      <div
        className="flex flex-col items-center justify-center gap-1 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center justify-center transition-colors duration-300 ease-in-out">
          <img
            className="h-6 w-6 relative object-cover min-h-[24px] transition-transform duration-300 ease-in-out"
            loading="lazy"
            alt=""
            src="/svg-3@2x.png"
          />
          <div className="z-[10] clash-regular text-center leading-6 uppercase ml-2">
            How to claim bonus
          </div>
        </div>
        {/* Discord Image - Controlled by hover state */}
        <div
          className={`absolute bottom-[-20px] transform translate-x-[-5.5px] translate-y-[70%] inline-block transition-opacity duration-500 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a className="h-max" href="https://discord.gg/Uu9xaaCWpj">
            <img
              className="max-w-full h-auto"
              loading="lazy"
              alt="Discord logo"
              src="/Discord.png"
            />
          </a>
        </div>
      </div>
    
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Container1;
