import Image from "next/image"
import Link from "next/link"
const PinCard = ({pin}) => {
  return (
    <div>
      <Link href={`/design/${pin._id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition ease-in hover:scale-105  hover:shadow-xl">
        <div className=" w-full h-64 sm:h-72 md:h-80 relative overflow-hidden">
        <Image
          src={`/assets/${pin.image}`}
          width={500}
          height={300}
          alt={`${pin.title}`}
        />
        </div>
        </div>
      </Link>
    </div>
  );
}

export default PinCard