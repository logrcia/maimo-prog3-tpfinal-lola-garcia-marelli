
const Hero = () => {
  return (
    <div
      className="mt-16 relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url(/assets/hero-image.png)",
      }}
    >
      <div className="flex h-full flex-col justify-center items-center bg-neutral-900/25 md:px-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 max-w-7xl w-full items-center md:items-start">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-lime-200 text-center md:text-left">
            <h2>Inspiration Starts Here</h2>
          </div>
          <div className="max-w-[600px] text-base sm:text-lg md:text-xl lg:text-2xl flex items-center text-center md:text-left">
            Discover projects from designers around the world, with their color palettes, fonts, and technical details just one click away. Get inspired, share, and create your own visual universe on Chromatic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero