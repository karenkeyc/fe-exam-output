import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userAdded } from "../app/userSlice";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import "../assets/styles/loginregister.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const islogged = useSelector((state) => state.user.credential.isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAdded({ email: email, password: password, isLoggedIn: true }));
    setEmail("");
    setPassword("");
    console.log(islogged);
    if (islogged) {
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="login-register">
          <form className="form__container--register" onSubmit={handleSubmit}>
            <h1 className="form__header-title">REGISTER</h1>
            <div className="form__group--register">
              <label className="form__label">Email</label>
              <input
                className="form__input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group--register">
              <label className="form__label">Password</label>
              <input
                className="form__input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__group--register">
              <label className="form__label">Password</label>
              <input
                className="form__input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__group--register">
              <button
                className="form__button-login"
                type="submit"
                onClick={handleSubmit}
              >
                REGISTER
              </button>
            </div>
            <div className="form__group--register">
              <span className="form__group-info--register">
                Already have an account?
                <Link className="form__group-link" to="/login">
                  {" "}
                  LOGIN HERE
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
      <NewsList />
      <Footer />
    </>
  );
};

export default Register;
