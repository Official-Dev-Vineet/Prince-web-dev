import { Link } from "react-router-dom"
import "./Logo.css"
import logo from "/logo.jpg"
const Logo = () => {
  return (
    <Link to={"/"} className="logoImg">
        <img src={logo} alt="MERN Developer || Official Dev Vineet" />
    </Link>
  )
}

export default Logo