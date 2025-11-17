const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 w-full px-4 py-8 md:flex-row-reverse md:items-center md:justify-center md:gap-12 md:px-8 md:py-16 lg:gap-16 lg:px-16 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
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
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-3xl md:text-5xl">Francis Kershaw.</h1>
          <h2 className="text-2xl md:text-3xl opacity-80">
            I'm here to help you build your next project.
          </h2>
        </div>

        <p className="md:text-lg md:max-w-xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam
          fugit delectus pariatur consequuntur modi est animi doloribus? Animi
          aliquid debitis saepe.
        </p>

        <button className="border bg-primary text-primary-foreground px-4 py-2 md:px-8 md:py-4 rounded-md text-lg">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
