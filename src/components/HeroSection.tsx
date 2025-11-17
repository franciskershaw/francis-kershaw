import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-8 w-full py-8 md:flex-row-reverse md:items-center md:justify-center md:gap-12 md:px-8 md:py-16 lg:gap-16 lg:px-32">
        {/* Image */}
        <div className="w-48 h-48 rounded-lg overflow-hidden  md:w-2/5 md:h-[500px] lg:h-[600px] md:shrink-0">
          <img
            src="/hero.jpeg"
            alt="Francis Kershaw"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4 md:space-y-6 md:w-3/5 md:shrink-0">
          <p className="tracking-wide md:text-base">Hey! My name is</p>
          <div className="space-y-2 md:space-y-3 font-semibold">
            <h1 className="text-3xl md:text-5xl">Francis Kershaw.</h1>
            <h2 className="text-2xl md:text-3xl opacity-80">
              Blah di blah bla blargh blah blah blarghar.
            </h2>
          </div>

          <p className="md:text-lg md:max-w-xl leading-relaxed">
            Lo rem dolor sit amet consectetur adipisicing elit. Harum non
            eligendi, delectus illo reprehenderit sunt impedit consectetur et.
            Laboriosam tempora ullam, corporis temporibus laborum vitae ipsum
            labore et deleniti quas.
          </p>

          <div className="flex items-center gap-4">
            <button className="border bg-primary text-primary-foreground py-3 px-6 md:py-3 rounded-sm text-lg">
              Get in touch
            </button>
          </div>
        </div>

        {/* scroll for more */}
      </section>
      <div className="w-full flex items-center justify-center animate-bounce">
        <span className="flex items-center gap-2">
          Scroll for more
          <FaArrowDown className="" />
        </span>
      </div>
    </>
  );
};

export default HeroSection;
