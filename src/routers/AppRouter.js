import React, { useContext } from "react";
import { BrowserRouter , Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

import { DashboardRouter } from "./DashboardRouter";
import { LoginScreen } from "../components/login/LoginScreen";


export const AppRouter = () => {

  const { user: { logged } } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <div className="min-vh-100" style={{ color: 'white', backgroundColor: '#292d32' }}>
        <Switch>
          <PublicRoute  exact isAuth={logged} path="/login" component={LoginScreen} />
          <PrivateRoute isAuth={logged} path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
