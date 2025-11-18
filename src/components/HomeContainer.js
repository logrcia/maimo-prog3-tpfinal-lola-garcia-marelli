
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
    <div className="mx-10">
      <section className="flex justify-between my-6">
        <button onClick={() => categoryClick("All")} className={`${selectedCategory === "All" ? "border rounded-2xl border-neutral-800" : "hover:bg-gray-300 rounded-2xl"}`}>All</button>
        {categories.map((cat, i) => (
          <div key={cat._id}>
            <button onClick={() => categoryClick(cat)} className={`${selectedCategory == `${cat.name}` ? "border rounded-2xl border-neutral-800" : "hover:bg-gray-300 rounded-2xl"}`}>{cat.name}</button>
          </div>
        ))}
      </section>
      <MediaGrid />
    </div>
  );
};

export default HomeContainer;
