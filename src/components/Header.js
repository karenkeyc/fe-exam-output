import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { userAdded } from "../app/userSlice";
import "../assets/styles/header.scss";
import logo_header from "../assets/images/blog_dark.png";

const Header = () => {
  const [pathstate, setPathstate] = useState({ to: "/login", text: "LOGIN" });
  const isUser = useSelector((state) => state.user.credential);
  const location = useLocation();
  const navigate = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const textchange = document.querySelector(".header__actions--login");
    if (
      location &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      textchange.innerHTML = "CLOSE";
      setPathstate({ to: "/", text: "CLOSE" });
    }
  }, [dispatch, location, location.pathname, navigate, isUser]);

  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <img src={logo_header} alt="Blog logo" />
        </div>
        <div className="header__actions">
          {isUser.isLoggedIn === true ? (
            <button
              className="header__actions--logout"
              onClick={() => {
                dispatch(userAdded({ isLoggedIn: false }));
                navigate.push("/logout");
              }}
            >
              LOGOUT
            </button>
          ) : (
            <Link
              className="header__actions--login"
              to={{
                pathname: pathstate.to,
                state: { background: location },
              }}
            >
              {pathstate.text}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
