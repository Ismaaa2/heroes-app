import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    <Route
      component={(props) => {
        return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
