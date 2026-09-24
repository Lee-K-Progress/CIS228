import Logo from "../assets/logo.png"
import "./header.css";

export const Header = () => {
  return (
    <div>Header
        <img className="logo" src={Logo} alt="Logo" />
    </div>
  )
}
