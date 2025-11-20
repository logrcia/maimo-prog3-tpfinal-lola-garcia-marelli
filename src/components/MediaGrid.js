'use client'

import { useAppContext } from "@/app/contexts/AppContext"
import PinCard from "@/components/PinCard";

const MediaGrid = () => {
  const { pins } = useAppContext();

  return (
    <div className="  justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 pb-10">
      {pins &&
        pins.length > 0 &&
        pins.map((pin) => <PinCard key={pin._id} pin={pin} />)}
    </div>
  );
};

export default MediaGrid;