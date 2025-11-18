import Image from "next/image"
const Hero = () => {
  return (
    <div
      className="relative h-[500] bg-cover bg-no-repeat text-white"
      style={{
        backgroundImage: "url(/assets/hero-image.png)",
      }}
    >
      <div className="flex h-full flex-col justify-center items-center bg-neutral-900/25">
        <div className="flex mx-60">
          <div className="text-8xl font-black text-lime-200">
            <h2>Inspiration Starts Here</h2>
          </div>
          <div className="max-w-[600px] ml-20 text-2xl flex items-center">
            Discover projects from designers around the world, with their color palettes, fonts, and technical details just one click away. Get inspired, share, and create your own visual universe on Chromatic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero