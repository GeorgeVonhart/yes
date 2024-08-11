import Body from "../components/Body";
import Container from "../components/Container";
import BackgroundBorder from "../components/BackgroundBorder";

const Bonuses = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Body />
      <section className="self-stretch bg-gray-400 box-border flex flex-col items-start justify-start pt-0 px-0 pb-px max-w-full border-t-[1px] border-solid border-ghostwhite-700">
        <Container />
        <BackgroundBorder />
      </section>
    </div>
  );
};

export default Bonuses;
