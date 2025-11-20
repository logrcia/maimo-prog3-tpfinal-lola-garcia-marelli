'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import { useEffect, useState } from "react"
import Image from "next/image"
import SavePinModal from "@/components/SavePinModal"
import FormConatiner from "@/components/FormConatiner"

const DesignContainer = ({ id }) => {
  const { pin, getOnePin } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getOnePin(id);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 md:px-10 lg:px-20 py-6 md:py-10">
      <div className="w-full items-center lg:w-1/2 flex flex-col">
        <div className="w-fit bg-neutral-100 p-5 rounded-3xl shadow-md">
          
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
      </div>
      <div className="w-full lg:w-1/2 flex flex-col">
        <button
          onClick={() => setShowModal(true)}
          className="text-lg md:text-xl p-4 md:p-5 text-white bg-pink-600 rounded-2xl hover:bg-pink-400 transition w-full"
        >
          Añadir a tablero
        </button>
        <h3 className="text-2xl md:text-3xl font-bold mt-4 md:mt-6 p-3 md:p-5">{pin.visualStyle}</h3>
        <div className="bg-neutral-100 my-4 p-4 md:p-5 rounded-2xl shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-3">Color Palette</h2>
          <div className="flex justify-center">
            {pin.colorPalette?.map((col, i) => (
              <div className="flex flex-col items-center my-2" key={i}>
                <div
                  className="mr-6 w-16 h-16 sm:w-20 sm:h-20 md:w-30 md:h-30 rounded-full shadow-md"
                  style={{ backgroundColor: col }}
                ></div>
                <p className="sm:text-mg md:text-xl">{col}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 my-4 p-5 rounded-2xl shadow-md">
          <h2 className="text-xl">Fonts</h2>
          <div className="flex">
            {pin.fonts?.map((fon, i) => (
              <p key={i} className="p-2 my-2 mr-2 w-fit border rounded-4xl">
                {fon}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 my-4 p-5 rounded-2xl shadow-md">
          <h2 className="text-xl">Software</h2>
          <div className="flex">
            {pin.software?.map((sof, i) => (
              <p key={i} className="p-2 my-2 mr-2 w-fit border rounded-4xl">
                {sof}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-neutral-100 my-4 p-5 rounded-2xl shadow-md">
          <h3 className="text-xl">Comments</h3>
          {pin?.comments?.map((r, i) => (
            <div key={i} className="comment">
              <p>
                <b>{r.user}</b>: {r.comment}
              </p>
            </div>
          ))}
          <div>
            {pin?._id && (
              <FormConatiner
                pinId={pin._id}
                onSubmitSuccess={() => getOnePin(pin._id)}
              />
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <SavePinModal pinId={id} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default DesignContainer;