import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutApi } from "../store/auth/auth.action";
import {useDispatch,useSelector} from "react-redux"

const Navbar = () => {
  const dispatch=useDispatch()
  const {isAuth}=useSelector((state)=>state.auth)
  
  const handleLoginClick = () => {
  dispatch(logoutApi())
  };
  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
