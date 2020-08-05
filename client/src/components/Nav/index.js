//materialize
import React from "react";
import { Link } from "react-router-dom";
import "./assets/style.scss";

// eslint-disable-next-line no-unused-expressions
<nav>
  <div className="container navbar nav-wrapper">
    <div className="navbar-header ">
      <Link className="brand logo" to={"/"}>
        CodePro
      </Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <Link className="nav-link right hide-on-med-and-down" to="">
            Sign out
          </Link>
        </li>
        <li>
          <Link className="nav-link right hide-on-med-and-down" to="/cart">
            {" "}
            <i className="fas fa-shopping-bag pr-3"></i>My cart{" "}
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>;
