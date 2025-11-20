import Image from "next/image";

const AboutContainer = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <div className="bg-pink-300 rounded-3xl p-12 shadow-2xl max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

          <div className="shrink-0">
            <div className="w-80 h-96 bg-gray-400 rounded-2xl  shadow-lg">
           
              <Image
                src="/assets/ilusyo.jpg" 
                alt="Lola García Marelli"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>


          <div className="flex flex-col">
            <h1 className="text-5xl font-boldmb-2">
              Lola García Marelli
            </h1>
            <p className="text-2xl  mb-8">
              Buenos Aires, Argentina
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Multimedia Designer
            </h2>

            <p className="text-lg text-justify">
              I'm a multimedia designer and artist. Currently in my third year
              at Universidad Maimónides, I love researching visual trends, saving
              inspiration, and experimenting with new ideas in my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;