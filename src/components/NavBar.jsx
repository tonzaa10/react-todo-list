import reactLogo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  const activeLink = ({ isActive }) => 
     isActive ? "bg-blue-700 bg-opcity-60 rounded px-3 py-2" : "hover:bg-blue-700 hover:bg-opcity-20 rounded px-3 py-2"
  

  return (
    <>
      <header>
        <div className="flex mr-auto gap-2 font-semibold text-2xl">
          <Link to="/">
            <img src={reactLogo} alt="React" />
          </Link>
          <p className="">React : Todo list</p>
        </div>
        <ul className="hidden md:flex gap-x-6">
          <li>
            <NavLink to="/" className={activeLink}>Home</NavLink>
          </li>
          <li>
            <NavLink className={activeLink} to="/about">About</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default NavBar;
