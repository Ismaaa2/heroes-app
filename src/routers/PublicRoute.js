import { Redirect, Route } from "react-router";

export const PublicRoute = ({ isAuth, component: Component, ...rest}) => {
  return (
    <Route
      component={(props) => {
        return (!isAuth) ? (<Component {...props} /> ) : (<Redirect to="/" />);
      }}
    />  
  );
};
