import heroImage from "../../public/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="border flex items-center px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Layout: Image first, then text */}
        <div className="flex flex-col md:hidden items-center gap-8">
          {/* Mobile Image - Small and Centered */}
          <div className="w-48 h-48 rounded-lg overflow-hidden border-2 border-black">
            <img
              src={heroImage}
              alt="Francis Kershaw"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Text Content */}
          <div className="space-y-4 border">
            <p className="border font-medium tracking-wide">Hey! My name is</p>
            <h1 className="border text-5xl font-bold">Francis</h1>
            <p className="border text-lg leading-relaxed max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              quibusdam fugit delectus pariatur consequuntur modi est animi
              doloribus? Animi aliquid debitis saepe.
            </p>
          </div>
        </div>

        {/* Desktop Layout: Text left, Image right */}
        <div className="border hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
          {/* Desktop Text Content */}
          <div className="space-y-6 border">
            <p className="border text-base font-medium tracking-wide">
              Hey! My name is
            </p>
            <h1 className="border text-7xl lg:text-8xl font-bold leading-tight">
              Francis
            </h1>
            <p className="border text-xl lg:text-2xl leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              quibusdam fugit delectus pariatur consequuntur modi est animi
              doloribus? Animi aliquid debitis saepe.
            </p>
          </div>

          {/* Desktop Image - Takes up half the screen */}
          <div className="relative h-[400px] lg:h-[600px] border">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Francis Kershaw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
