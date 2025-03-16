/* eslint-disable react/prop-types */
import { Link, useLocation, useParams } from "react-router-dom"
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
  const {pathname} = useLocation();

  console.log(pathname == '/');

  const toggleNav = () =>{
    setIsOpen(prev => !prev);
  }


  return (
    <>
    <header className="bg-primary h-16  lg:h-[73px] flex-wrap -mx-4 md:-mx-20 px-4 md:px-20 flex justify-center items-center sticky top-0 z-50 rounded-b-xl">
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

            <div className="flex items-center gap-4 ">
                <div className="max-sm:block hidden hover:cursor-pointer" onClick={toggleNav} >
                  {isOpen ? <XIcon className={'w-10'} /> : <HamIcon className={'w-10'} />}
                </div>
                <Button to="/" className={"max-sm:hidden   " + (pathname === '/' ? ' border-b-2 ' : '') }   name="Home"/>
                <Button to="/admin/add" className={"max-sm:hidden  " + (user && user.is_admin ? "" : " hidden ") + (pathname === '/admin/add' ? ' border-b-2 ' : '')} name="Add"/>
                <Button to="/admin/view" className={"max-sm:hidden  " + (user && user.is_admin ? "" : " hidden ") + (pathname === '/admin/view' ? ' border-b-2 ' : '')} name="View"/>
                <Button to={user ? "/requests" : "/login"} className={"max-sm:hidden   " + (user && user.Role < 2 && " hidden ") + (pathname === '/requests' ? ' border-b-2 ' : '')} name="Requests" />
                <Button to={user ? "/profile" : "/login"} className={"max-sm:hidden   " + (pathname === '/profile' ? ' border-b-2 ' : '')} name="Profile" />
                <Button to={user ? "/" : "/login"} name="Login"  className={"max-sm:hidden  hover:underline hover:outline-none " + (!user ? "" : "hidden ") + (pathname === '/login' ? ' border-b-2 ' : '')}/>
            </div>
        </nav>

        {isOpen && <div className="flex flex-col z-50 bg-primary  w-full rounded-b-lg sm:hidden">
            <Link onClick={toggleNav} to="/" className="text-white z-50 hover:bg-[#006eff] text-center text-lg font-semibold border-t w-full p-2">
              <span className={(pathname === '/' ? ' border-b-2 ' : '')} >Home</span>
              </Link>

            <Link onClick={toggleNav} to="/admin/add" className={"text-white z-50 hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 " + (user && user.is_admin ? "" : " hidden ")}>
              <span className={(pathname === '/admin/add' ? ' border-b-2 ' : '')} >Add</span>
            </Link>

            <Link onClick={toggleNav} to="/admin/view" className={"text-white z-50 hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 " + (user && user.is_admin ? "" : " hidden ")}>
              <span className={(pathname === '/admin/view' ? ' border-b-2 ' : '')} >View</span>
            </Link>

            <Link onClick={toggleNav} to={user ? "/requests" : "/login"} className={"text-white z-50 hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 " + (user && user.Role < 2 && " hidden ")}>
              <span className={(pathname === '/requests' ? ' border-b-2 ' : '')} >Requests</span>
            </Link>

            <Link onClick={toggleNav} to={user ? "/profile" : "/login"} className="text-white z-50 hover:bg-[#006eff] text-center text-lg font-semibold border-t p-2 ">
              <span className={(pathname === '/profile' ? ' border-b-2 ' : '')} >Profile</span>
            </Link>
            
            <Link onClick={toggleNav} to={user ? "/" : "/login"} className={"text-white z-50 hover:bg-[#006eff]  text-center text-lg font-semibold border-y p-2 " + (!user ? "" : "hidden ")}>
              <span className={(pathname === '/login' ? ' border-b-2 ' : '')} >Login</span>
            </Link>
        </div>}

    </header>

    </>
  )
}

export default Navbar