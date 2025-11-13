
import MediaGrid from "@/components/MediaGrid";
const HomeContainer = () => {
  return (
    <div className="mx-10">
      <section className="flex justify-between my-4">
        <p className="p-4 bg-amber-300">Minimalista</p>
        <p className="p-4 bg-amber-300">Retro</p>
        <p className="p-4 bg-amber-300">Futurista</p>
        <p className="p-4 bg-amber-300">Handmade</p>
        <p className="p-4 bg-amber-300">3D</p>
        <p className="p-4 bg-amber-300">Maximalista</p>
        <p className="p-4 bg-amber-300">Flat Design</p>
        <p className="p-4 bg-amber-300">Collage</p>
        <p className="p-4 bg-amber-300">Grunge</p>
        <p className="p-4 bg-amber-300">Pop</p>
        <p className="p-4 bg-amber-300">Editorial</p>
      </section>
      <MediaGrid/>
    </div>
  );
};

export default HomeContainer;
