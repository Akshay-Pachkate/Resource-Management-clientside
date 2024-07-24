import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" -mx-4 md:-mx-20 bg-primary rounded-t-xl h-60 mt-28 relative flex justify-center ">
        <div className="bg-secondary w-[72%] h-full md:h-[90%] max-sm:w-[95%] rounded-xl border absolute -top-20 flex-col flex md:flex-row justify-around md:items-center p-4">
            <div className="text-[#B6B6B6] text-3xl max-sm:text-xl sm:max-md:text-2xl text-center flex flex-col items-center gap-2">
                <IoCall />
                <h4 className="text-[#B6B6B6]">1234567890</h4>
            </div>
            <div className="border md:h-full"></div>
            <div className="text-[#B6B6B6] text-3xl max-sm:text-xl sm:max-md:text-2xl text-center flex flex-col items-center gap-2">
                <FaLocationDot/>
                <h4 className="text-[#B6B6B6]">A3-305</h4>
            </div>
            <div className="border md:h-full"></div>
            <div className="text-[#B6B6B6] text-3xl max-sm:text-xl sm:max-md:text-2xl text-center flex flex-col items-center gap-2">
                <MdEmail/>
                <h4 className="text-[#B6B6B6]">johndoe@gmail.com</h4>
            </div>
        </div>
        
        <div className="-mx-[10px] absolute bottom-10">
            <h1 className="text-md decoration-1 font-semibold text-white ">&copy; 2024 PICT.EDU. All Rights Reserved</h1>
            <div className="-mx-6 border-t-white border mt-1"></div>
        </div>

    </div>
  )
}

export default Footer