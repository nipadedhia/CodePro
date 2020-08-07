import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/style.scss";
import { AuthContext } from "../../Auth";
import { CartContext } from "../../CartContex";

import app from "../../firebase";

function Nav({ sticky }) {
  const { currentUser } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);

  return (
    <nav className="navbar nav-wrapper">
      <div className="container">
        <div className="navbar-header ">
          <Link className="brand logo" to={"/"}>
            CodePro
          </Link>
        </div>

        <ul className="right hide-on-med-and-down">
          {!currentUser ? (
            <Link className="nav-link right hide-on-med-and-down" to="/signup">
              Sign in
            </Link>
          ) : (
            <Link
              className="nav-link right hide-on-med-and-down"
              to=""
              onClick={() => app.auth().signOut()}>
              Sign out
            </Link>
          )}

          <li>
            <Link className="nav-link right hide-on-med-and-down" to="/cart">
              {" "}
              <i className="fas fa-shopping-bag pr-3"></i>My cart{" "}
              <span className="cart-size">( {cart.length} )</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
