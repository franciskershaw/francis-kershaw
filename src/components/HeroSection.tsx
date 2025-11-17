import heroImage from "../../public/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center border border-red-500 w-full">
      <div className="w-48 h-48 rounded-lg overflow-hidden border border-green-500">
        <img
          src={heroImage}
          alt="Francis Kershaw"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Text Content */}
      <div className="border border-yellow-500">
        <p className="border border-purple-500 font-medium tracking-wide">
          Hey! My name is
        </p>
        <h1 className="border border-blue-500 text-5xl font-bold">Francis</h1>
        <p className="border border-green-500 text-lg leading-relaxed max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam
          fugit delectus pariatur consequuntur modi est animi doloribus? Animi
          aliquid debitis saepe.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
