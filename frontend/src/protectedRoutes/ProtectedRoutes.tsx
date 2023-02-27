import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

export function ProtectedRoutes({children}:any){
  const { user }:any = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user ? children : null}</>;
};

export default ProtectedRoutes;
