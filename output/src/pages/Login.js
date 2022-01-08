import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userAdded } from "../app/userSlice";
import "../assets/styles/loginregister.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useHistory();
  const islogged = useSelector((state) => state.user.credential.isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAdded({ email: email, password: password, isLoggedIn: true }));
    setEmail("");
    setPassword("");
    console.log(islogged);
    if (islogged) {
      navigate.push("/");
    }
  };

  return (
    <>
      <section>
        <div className="login-register">
          <form className="form__container" onSubmit={handleSubmit}>
            <h1 className="form__header-title">LOGIN</h1>
            <div className="form__group">
              <label className="form__label">Email</label>
              <input
                className="form__input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group">
              <label className="form__label">Password</label>
              <input
                className="form__input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__group">
              <button
                className="form__button-login"
                type="submit"
                onClick={handleSubmit}
              >
                LOGIN
              </button>
            </div>
            <div className="form__group">
              <span className="form__group-info">
                No account yet?
                <Link className="form__group-link" to="/register">
                  {" "}
                  REGISTER HERE
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
