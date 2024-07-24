/* eslint-disable react/prop-types */
import { GiHamburgerMenu } from "react-icons/gi";

const HamIcon = ({className}) => {
  return (
    <GiHamburgerMenu className={"text-white text-3xl " + className} />
  )
}

export default HamIcon