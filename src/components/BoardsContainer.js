'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const BoardsContainer = () => {
  const { boards, getAllBoards } = useAppContext();

  useEffect(() => {
    getAllBoards();
  }, []);

  return (
    <div>
      <section>
        <h1 className="m-10 text-4xl">Boards</h1>
        {boards.map((board)=> (
          <div key={board._id} className="p-10 bg-neutral-200 m-10 rounded-4xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-2">{board.name}</h2>
            <p className="text-lg text-neutral-500 mb-6">saved {board.pins.length} pins</p>
            <div className="flex overflow-x-auto">
            {board.pins.map((pin, index) => (
              <Link key={index} href={`/design/${pin._id}`} className="mr-10">
                <Image 
                src={`/assets/${pin.image}`}
                width={200}
                height={200}
                alt={pin.title}
                />
                <p className="text-lg mt-2 text-neutral-800 font-bold">{pin.title}</p>
              </Link>
            ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
};

export default BoardsContainer