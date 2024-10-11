import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

function NavBar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  return (
    <div className="sticky top-0 h-[60px] w-full bg-[#00031F] flex justify-between z-[9999]">
      <div className="flex">
        {/* Logo */}
        <NavLink to="/">
          <img src="/public/navbar/logo.jpeg" alt="Logo" />
        </NavLink>

        {/* Model */}
        <span className="my-auto mx-8">
          <NavLink to="/model">
            <img src="/public/navbar/model.svg" alt="Model" />
          </NavLink>
        </span>

        {/* Company */}
        <span className="my-auto mx-8">
          <NavLink to="/company">
            <img src="/public/navbar/company.svg" alt="Company" />
          </NavLink>
        </span>

        {/* Careers */}
        <span className="my-auto mx-8">
          <NavLink to="/careers">
            <img src="/public/navbar/careers.svg" alt="Careers" />
          </NavLink>
        </span>
      </div>

      <div className="flex">
        {/* Contact Us */}
        <span className="my-auto mx-8">
          <NavLink to="/contact">
            <img src="/public/navbar/contactus.svg" alt="Contact Us" />
          </NavLink>
        </span>

        {/* Store */}
        <span className="my-auto mx-8">
          <NavLink to="/properties">
            <img src="/public/navbar/store.svg" alt="Store" />
          </NavLink>
        </span>

        {/* Search */}
        <span className="my-auto mx-8">
          <img src="/public/navbar/search.png" alt="Search" />
        </span>

        {/* Login */}

        {!isAuthenticated ? (
          <button
            className="my-auto mr-8 focus:outline-none"
            onClick={loginWithRedirect}
          >
            <img
              src="/public/navbar/Login.png"
              alt="Login"
              className="w-8 h-8"
            />
          </button>
        ) : (
          <ProfileMenu user={user} logout={logout} />
        )}
      </div>
    </div>
  );
}

export default NavBar;
