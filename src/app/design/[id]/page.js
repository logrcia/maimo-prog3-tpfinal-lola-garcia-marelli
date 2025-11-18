import DesignContainer from "@/components/DesignContainer"
import Navbar from "@/components/Navbar"

const Design = async ({params}) => {
  const { id } = await params
  
  return (
    <div>
      <Navbar/>
      <DesignContainer id={id} />
    </div>
  )
}

export default Design