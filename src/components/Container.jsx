import SocialLinks from "./SocialLinks";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center py-16 px-5 box-border relative gap-16 text-center text-ghostwhite-100 ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] right-0 bottom-0 left-0 max-w-full overflow-hidden object-cover"
        alt=""
        src="/grafittipatternsvg.svg"
      />
      <div className="text-5xl relative w-full max-w-[672px]">
        <div className="absolute inset-0 [filter:blur(150px)] rounded-full bg-ghostwhite-400 opacity-50 z-[1]" />
        <h1 className="m-0 relative w-full leading-tight uppercase flex items-center justify-center z-[2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="clash-regular">Follow </span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0066ff,_#579aff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mx-2">
            EHSAN'S
          </span>
          <span className="clash-regular">Socials</span>
        </h1>
      </div>
      <div className=" flex items-center justify-center">
        <SocialLinks />
        
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;