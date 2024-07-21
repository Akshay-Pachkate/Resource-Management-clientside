/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom"
import Button from "./Button"
// import { getCookie } from "../utilities/getCSRF"
import { useContext, useEffect, useState} from "react"
import { UserContext } from "../context/userContext";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const title = "Resource Management Portal"
  const [reqLinkStatus, setReqLinkStatus] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const {user, isUserInfoReady} = useContext(UserContext)
  const [login, setLogin] = useState(false);
  const { resName } = useParams();


  
  useEffect(() => {

    if(user){
      setLogin(true);
    }
    
    if(isUserInfoReady && user && user.Role === 0){
      setReqLinkStatus(true);
    }
    
    if(isUserInfoReady && user && user.is_admin){
      setIsAdmin(true);
    }
    
    console.log(user);
    
  }, [login, isUserInfoReady, user]);
  
  // if (!isUserInfoReady) {
  //   return <Spinner />;
  // }
  

  return (
    <>
    <header className="bg-primary h-16  lg:h-[73px] -mx-4 md:-mx-20 px-4 md:px-20 flex justify-center items-center sticky top-0 z-20 rounded-b-xl">
        <nav className="flex items-center justify-between w-full">
            
            <Link to={'/'}>
                <img
                    className="h-16" 
                    src="/logo/pict-logo.png" 
                    alt="logo of pict" />
            </Link>

            <div className="-mx-[10px] md:block">
                <h1 className="text-2xl decoration-1 underline underline-offset-4 font-semibold text-white max-md:hidden">{title}</h1>
                <h1 className="text-2xl decoration-1 underline underline-offset-2 font-semibold text-white max-sm:static sm:hidden">{resName}</h1>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <div className="max-sm:block hidden hover:cursor-pointer" >
                  <RxHamburgerMenu className="text-white text-4xl border-[2px] border-white  p-1 rounded-md" />
                </div>
                <Button to="/" className="max-sm:hidden  hover:shadow-lg hover:text-primary hover:bg-white" name="Home"/>
                <Button to="/admin/add" className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white" + (isAdmin ? "" : " hidden ")} name="Add"/>
                <Button to="/admin/view" className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white" + (isAdmin ? "" : " hidden ")} name="View"/>
                <Button to={login ? "/requests" : "/login"} className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white " + (reqLinkStatus && " hidden ")} name="Requests" />
                <Button to={login ? "/profile" : "/login"} className={"max-sm:hidden hover:shadow-lg hover:text-primary hover:bg-white "} name="Profile" />
                <Button to={login ? "/" : "/login"} name="Login"  className={"max-sm:hidden hover:shadow-lg hover:bg-white hover:text-primary hover:underline hover:outline-none " + (!login ? "" : "hidden ")}/>
            </div>
            
        </nav>
    </header>

    </>
  )
}

export default Navbar