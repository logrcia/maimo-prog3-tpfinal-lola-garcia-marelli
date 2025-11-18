'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CreateBoardModal from "@/components/CreateBoardModal";

const BoardsContainer = () => {
  const { boards, getAllBoards, deletePinFromBoard } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllBoards();
  }, []);

  const handleRemovePin = async (boardId, pinId) => {
    await deletePinFromBoard(boardId, pinId);
  };

  return (
    <div className="bg-pink-200">
      <section>
        <div className="p-10 flex justify-between items-center">
          <h1 className="text-4xl">Boards</h1>
          <button
            onClick={() => setShowModal(true)}
            className=" bg-pink-600  text-white px-8 py-4 rounded-lg text-xl hover:bg-pink-500 transition flex items-center justify-center gap-2"
          >
            Create Board
          </button>
        </div>
        {boards.map((board) => (
          <div
            key={board._id}
            className="p-10 m-10 rounded-xl shadow-2xl bg-white/95 backdrop-blur-sm "
          >
            <h2 className="text-3xl font-bold mb-2">{board.name}</h2>
            <p className="text-lg text-neutral-500 mb-6">
              saved {board.pins.length} pins
            </p>
            <div className="flex flex-row overflow-x-auto gap-6">
              {board.pins.map((pin, index) => (
                <div key={index} className="relative group"> 
                  <button
                    onClick={() => handleRemovePin(board._id, pin._id)}
                    className="absolute top-3 right-3 p-2 w-10 h-10 rounded-4xl text-white group-hover:opacity-100 transition hover:bg-pink-600   z-10 shadow-lg"
                  >
                   X
                  </button>
                <Link href={`/design/${pin._id}`} className="mr-10">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition ease-in hover:scale-105  hover:shadow-xl">
                    <div className=" relative overflow-hidden w-[400px] h-[300px]">
                      <Image
                        src={`/assets/${pin.image}`}
                        width={500}
                        height={200}
                        alt={`${pin.title}`}
                      />
                    </div>
                  </div>
                  <p className="text-lg mt-2 text-neutral-800 font-bold">
                    {pin.title}
                  </p>
                </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      {showModal && (
        <CreateBoardModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BoardsContainer