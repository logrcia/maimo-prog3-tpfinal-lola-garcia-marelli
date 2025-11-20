
'use client';
import MediaGrid from "@/components/MediaGrid";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/contexts/AppContext";
const HomeContainer = () => {
  const { getCategories, categories, getAllPins, getPinsByCategory } = useAppContext();
  const [ selectedCategory, setSelectedCategory ] = useState("All")

  const categoryClick = (category) => {
    console.log("Categoría clickeada:", category);
    setSelectedCategory(category);
    if(category === "All"){
      setSelectedCategory("All");
      getAllPins();
    }else{
      setSelectedCategory(category._id);
      getPinsByCategory(category._id);
    }
  }

  useEffect(() => {
    getCategories();
    getAllPins();
  }, []);

  return (
    <div className="mx-10 px-4 md:px-10">
      <section className="flex w-full justify-between gap-3 overflow-x-auto py-6 scrollbar-hide ">
        <button onClick={() => categoryClick("All")} className={`${selectedCategory === "All" ? "border rounded-2xl border-neutral-800 p-2" : "hover:bg-pink-200 p-2 rounded-2xl"}`}>All</button>
        {categories.map((cat, i) => (
          <div key={cat._id}>
            <button onClick={() => categoryClick(cat)} className={`${selectedCategory === `${cat._id}` ? "border rounded-2xl border-neutral-800 p-2" : "hover:bg-pink-200 p-2 rounded-2xl"}`}>{cat.name}</button>
          </div>
        ))}
      </section>
      <MediaGrid />
    </div>
  );
};

export default HomeContainer;
