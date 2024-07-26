/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Button = ({name, to="", className=""}) => {
  return (
    <Link to={to} className={"text-md  text-white text-center  font-semibold  px-4 py-2 cursor-pointer " + className + "  hover:border-b-[1px]"} >
        {name}
    </Link>
  )
}

export default Button