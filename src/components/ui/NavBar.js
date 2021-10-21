import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { Link, NavLink, useHistory } from "react-router-dom";
import { types } from "../../types/types";

export const Navbar = () => {
  
  const history = useHistory();

  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: types.logout });


    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm p-3 navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Heroes App
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse flex-row-reverse collapse w-100 order-3 dual-collapse2">
        <ul
          style={{ alignItems: "center", justifyContent: "center" }}
          className="navbar-nav ml-auto"
        >
          <li style={{ marginRight: 20 }}>
            <p className="text-info" style={{ margin: 0, color: "royalblue" }}>{name}</p>
          </li>
          <li>
            <button
              className="nav-item nav-link btn btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
