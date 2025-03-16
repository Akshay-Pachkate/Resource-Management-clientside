import { FaLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";


const ResourceCard = ({name, location, capacity, imageUrl}) => {
  return (
    // <Link to={`/resource/${name}`} className=' bg-white grid items-center  aspect-square border rounded-xl hover:bg-secondary hover:text-white transition-colors duration-250' >
    //           <h1 className='text-2xl text-center h-fit' >{name}</h1>
    // </Link>
    <div className="rounded-lg overflow-hidden bg-gray-100"> 
        <div className="relative">
            <img src={imageUrl} alt={name} className="h-44  w-full object-cover  " />
            <h1 className='absolute top-2 z-10 text-2xl font-medium  text-white w-full text-center '> {name}</h1>

            <div className='flex gap-4 justify-between items-center absolute w-full px-2 z-10 text-gray-50 bottom-2 ' >
 
                <div className={"gap-2 justify-center items-center " + (!location ? "hidden" : "")}>
                    <div className="flex gap-2 justify-center items-center text-base">
                        <span> <FaLocationDot/> </span>
                    </div>
                    <h2 className="text-xl font-medium text-center" >{location}</h2>
                </div>
                
                <div className={"gap-2 justify-center items-center " + (!capacity ? "hidden" : "")}>
                    <div className="flex gap-2 justify-center items-center text-base">
                        <span className="text-xl"> <MdGroups/> </span>
                    </div>
                    <h2 className="text-xl font-medium text-center" >{capacity}</h2>
                </div>

            </div>
        </div>
        <div className='flex flex-col gap-4 justify-between p-4' >   
                <Link to={`/resource/${name}`} className="px-4 py-2 text-center hover:bg-[#007BDD] bg-primary text-white rounded-lg text-lg " >Book</Link>
        </div>
    </div>
  )
}

export default ResourceCard
