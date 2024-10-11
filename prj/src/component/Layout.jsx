import React, { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import NavBar from "./NavBar";
const Layout = () => {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    isAuthenticated && mutate();
  }, [isAuthenticated]);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Layout;
