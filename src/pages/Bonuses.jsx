import Body from "../components/Body";
import Container from "../components/Container";
import BackgroundBorder from "../components/BackgroundBorder";

const Bonuses = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-500 overflow-hidden">
      <div className="flex-grow w-full">
        <Body />
      </div>
      <section className="w-full bg-gray-400 border-t border-ghostwhite-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Container />
        </div>
      </section>
      <BackgroundBorder className="mt-auto w-full" />
    </div>
  );
};

export default Bonuses;