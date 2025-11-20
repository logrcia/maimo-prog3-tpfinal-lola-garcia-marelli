import DesignContainer from "@/components/DesignContainer"
import Navbar from "@/components/Navbar"

const Design = async ({params}) => {
  const { id } = await params
  
  return (
    <div className="bg-linear-to-br from-pink-100 to-pink-200 mt-16">
      <Navbar/>
      <DesignContainer id={id} />
    </div>
  )
}

export default Design