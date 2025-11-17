import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="border flex flex-col h-[calc(100vh-var(--navbar-height))] w-full">
      <div className="flex flex-col items-center gap-4 w-full py-4 flex-1 justify-center sm:gap-8 sm:py-8 md:flex-row-reverse md:items-center md:justify-center md:gap-12 md:px-8 md:py-16 lg:gap-16 lg:px-32">
        {/* Image */}
        <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg overflow-hidden  md:w-2/5 md:h-[500px] lg:h-[600px] md:shrink-0">
          <img
            src="/hero.jpeg"
            alt="Francis Kershaw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-2 sm:space-y-4 md:space-y-6 md:w-3/5 md:shrink-0">
          <p className="tracking-wide text-sm sm:text-base lg:text-lg">
            Hey! My name is
          </p>
          <div className="space-y-1 sm:space-y-2 md:space-y-3 font-semibold">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Francis Kershaw.
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-80">
              Blah di blah bla blargh blah blah blarghar.
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg md:max-w-xl leading-relaxed">
            Lo rem dolor sit amet consectetur adipisicing elit. Harum non
            eligendi, delectus illo reprehenderit sunt impedit consectetur et.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <button className="border bg-primary py-2 px-8 sm:py-3 sm:px-6 md:py-3 sm:text-lg">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* scroll for more */}
      <div className="w-full flex items-center justify-center pb-4 sm:pb-6 animate-bounce">
        <span className="flex items-center gap-2 text-sm sm:text-base">
          Scroll for more
          <FaArrowDown className="" />
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
