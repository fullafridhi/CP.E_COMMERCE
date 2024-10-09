import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/UserSlice";
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  return (
    <div className="navbar">
      <div className="nav-links">
        {isAuth ? (
          <>
            <Link to="/home">Home</Link>
            <button className="logout-button" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
