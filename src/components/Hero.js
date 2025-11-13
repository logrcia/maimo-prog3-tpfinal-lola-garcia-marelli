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
        <div className="flex ">
          <div className="text-8xl font-black text-lime-200">
            <h2>Entrá</h2>
            <h2>Explorá</h2>
            <h2>Creá</h2>
          </div>
          <div className="max-w-[600px] ml-20 text-2xl flex items-center">
            Descubrí proyectos de diseñadores de todo el mundo, con sus paletas,
            tipografías y detalles técnicos al alcance de un click. Inspirate,
            compartí y creá tu propio universo visual en Chromatic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero