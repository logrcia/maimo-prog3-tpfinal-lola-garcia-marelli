import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-20 px-10 bg-lime-200 flex justify-between items-center text-xl">
      <Link href={"/"}>
        <Image
          src="/assets/logo-crom.svg"
          alt="logo chromatic"
          width={100}
          height={100}
        />
      </Link>
      <div className="flex">
        <Link href={"/boards"} className="mr-6">
          Boards
        </Link>
        <Link href={"/about"} className="mr-6">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;