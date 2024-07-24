/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"
import Button from "./Button"
import { useContext, useState} from "react"
import { UserContext } from "../context/userContext";
import HamIcon from "./HamIcon";
import XIcon from "./XIcon";



const Navbar = () => {
  const title = "Resource Management Portal"
  const {user} = useContext(UserContext);
  const { resName } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () =>{
    setIsOpen(prev => !prev);
  }

  

  return (
    <>
    <header className="bg-primary h-16  lg:h-[73px] -mx-4 md:-mx-20 flex-wrap px-4 md:px-20 flex justify-center items-center sticky top-0 z-20 rounded-b-xl">
        <nav className="flex items-center justify-between w-full">
            
            <Link to={'/'}>
                <img
                    className="h-16" 
                    src="/logo/pict-logo.png" 
                    alt="logo of pict" />
            </Link>

            <div className="-mx-[10px] md:block">
                <h1 className="text-2xl decoration-1 underline underline-offset-4 font-semibold text-white max-lg:hidden">{title}</h1>
                <h1 className="text-2xl decoration-1 underline underline-offset-2 font-semibold text-white max-sm:static sm:hidden">{resName}</h1>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <div className="max-sm:block hidden hover:cursor-pointer" onClick={toggleNav} >
                  {isOpen ? <XIcon/> : <HamIcon/>}
                </div>
                <Button to="/" className="max-sm:hidden  hover:shadow-lg hover:text-primary hover:bg-white" name="Home"/>
                <Button to="/admin/add" className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white" + (user && user.is_admin ? "" : " hidden ")} name="Add"/>
                <Button to="/admin/view" className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white" + (user && user.is_admin ? "" : " hidden ")} name="View"/>
                <Button to={user ? "/requests" : "/login"} className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white " + (user && user.Role < 2 && " hidden ")} name="Requests" />
                <Button to={user ? "/profile" : "/login"} className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white "} name="Profile" />
                <Button to={user ? "/" : "/login"} name="Login"  className={"max-sm:hidden hover:shadow-lg hover:bg-white hover:text-primary hover:underline hover:outline-none " + (!user ? "" : "hidden ")}/>
            </div>
        </nav>

        {isOpen && <div className="flex flex-col  bg-primary  w-full sm:hidden">
            <Link to="/" className="text-white hover:bg-[#006eff] text-center text-lg font-semibold border-t w-full p-2">Home</Link>
            <Link to="/admin/add" className={"text-white hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 " + (user && user.is_admin ? "" : " hidden ")}>Add</Link>
            <Link to="/admin/view" className={"text-white hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 " + (user && user.is_admin ? "" : " hidden ")}>View</Link>
            <Link to={user ? "/requests" : "/login"} className={"text-white hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 " + (user && user.Role < 2 && " hidden ")}>Requests</Link>
            <Link to={user ? "/profile" : "/login"} className="text-white hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 ">Profile</Link>
            <Link to={user ? "/" : "/login"} className={"text-white hover:bg-[#006eff] text-center text-lg font-semibold border-y p-2 " + (!user ? "" : "hidden ")}>Login</Link>
        </div>}

    </header>

    </>
  )
}

export default Navbar