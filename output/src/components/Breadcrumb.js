import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/breadcrumb.scss"

const Breadcrumb = ({title}) => {
  return (
    <nav>
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <Link className="breadcrumb__item-link" to="/">
            HOME
          </Link>
        </li>
        <li className="breadcrumb__item">{title}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
