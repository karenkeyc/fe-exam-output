import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import Login from "./Login";
import Register from "./Register";
import NewPost from "./NewPost";
import Single from "./Single";
import SingleEdit from "./SingleEdit";

const Home = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          children={
            <>
              <Header />
              <Carousel />
              <NewsList />
            </>
          }
        />
        <Route
          path="/logout"
          children={
            <>
              <Header />
              <Carousel />
              <NewsList />
            </>
          }
        />
        <Route
          path="/login"
          children={
            <>
              <Header />
              <Login />
              <NewsList />
            </>
          }
        />
        <Route
          path="/register"
          children={
            <>
              <Header />
              <Register />
              <NewsList />
            </>
          }
        />
        <Route
          path="/create-new-post"
          children={
            <>
              <Header /> <NewPost />
            </>
          }
        />
        <Route
          path="/single-post-view"
          children={
            <>
              <Header /> <Single />
            </>
          }
        />
        <Route
          path="/single-edit-view"
          children={
            <>
              <Header /> <SingleEdit />
            </>
          }
        />
      </Switch>
      <Footer />
    </>
  );
};

export default Home;
