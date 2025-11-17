
"use client";
import MediaGrid from "@/components/MediaGrid";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/contexts/AppContext";
const HomeContainer = () => {
  const { getCategories, categories } = useAppContext();
  const [ selectedCategory, setSelectedCategory ] = useState("All")


  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="mx-10">
      <section className="flex justify-between my-6">
        <button>All</button>
        {categories.map((cat, i) => (
          <div key={i}>
            <button>{cat.name}</button>
          </div>
        ))}
      </section>
      <MediaGrid />
    </div>
  );
};

export default HomeContainer;
