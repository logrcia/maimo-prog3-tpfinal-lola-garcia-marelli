'use client'
import Image from "next/image"
import Link from "next/link"
import { useAppContext } from "@/app/contexts/AppContext"
import PinCard from "@/components/PinCard";

const MediaGrid = () => {
  const { pins } = useAppContext();

  return (
    <div className="grid grid-cols-4 gap-6 justify-center">
      {pins &&
        pins.length > 0 &&
        pins.map((pin) => <PinCard key={pin._id} pin={pin} />)}
    </div>
  );
};

export default MediaGrid;