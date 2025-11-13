import Link from "next/link"

const Navbar = () => {
  return (
    <div className="h-20 px-10 bg-neutral-300 flex justify-between items-center text-xl">
        <Link href={"/"}>Logo</Link>
        <div className="flex">
            <div className="mr-6">Tableros</div>
            <Link href={"/about"} className="mr-6">About</Link>
            <div>Perfil</div>
        </div>
    </div>
  )
}

export default Navbar