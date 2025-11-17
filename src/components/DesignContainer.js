'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SavePinModal from "@/components/SavePinModal"

const DesignContainer = ({ id }) => {
  const { pin, getOnePin } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getOnePin(id);
  }, []);

  return (
    <div className="flex mx-10 my-10">
      <div className="w-[50%] flex flex-col ">
        <Image
          src={`/assets/${pin.image}`}
          width={500}
          height={500}
          alt={`${pin.title}`}
        />
        <div className="mt-6">
          <h2 className="text-2xl text-neutral-700">{pin.author}</h2>
          <h1 className="text-4xl font-bold">{pin.title}</h1>
        </div>
      </div>
      <div className=" flex flex-col w-[50%]">
        <button 
            onClick={() => setShowModal(true)}
            className="text-xl p-5 bg-amber-200 rounded-4xl hover:bg-amber-300 transition"
          >
          Añadir a tablero
        </button>
        <h3 className="text-3xl font-bold mt-4 p-5">{pin.visualStyle}</h3>
        <div className="bg-neutral-100 my-4 p-5 rounded-2xl">
          <h2 className="text-xl">Color Palette</h2>
          <div className="flex">
            {pin.colorPalette?.map((col, i) => (
              <div className="flex flex-col items-center my-2" key={i}>
                <div
                  className="w-40 h-40 rounded-full mr-6"
                  style={{ backgroundColor: col }}
                ></div>
                <p className="text-xl font-bold">{col}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 my-4 p-5 rounded-2xl">
          <h2 className="text-xl">Fonts</h2>
          <div className="text-xl font-bold">
            {pin.fonts?.map((fon, i) => (
              <p key={i} className="p-2 my-2 w-fit border-2 rounded-4xl">
                {fon}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 my-4 p-5 rounded-2xl">
          <h2 className="text-xl">Software</h2>
          <div className="text-xl font-bold">
            {pin.software?.map((sof, i) => (
              <p key={i} className="p-2 my-2 w-fit border-2 rounded-4xl">
                {sof}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl">Reviews</h2>
        </div>
      </div>
      {showModal && (
        <SavePinModal 
          pinId={id} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
};

export default DesignContainer;