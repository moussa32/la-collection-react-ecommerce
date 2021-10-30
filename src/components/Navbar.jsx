import { NavLink } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector(state => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          LA COLLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <AiOutlineLogin className="me-1" />
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <HiOutlineUserAdd className="me-1" />
              Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <BsCart2 className="me-1" />
              Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
