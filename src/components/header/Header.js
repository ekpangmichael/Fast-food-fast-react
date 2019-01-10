import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div id="logo">
            <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/logo.png" />
          </div>
          <nav>
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="users/cart.html">Cart</Link>
              </li>
              <li id="userEmail">
                <Link to="users/sign_in.html" />
              </li>
              <li id="signin">
                <Link to="users/sign_in.html">Signin</Link>
              </li>
              <li id="reg">
                <Link to="/signup">Signup</Link>
              </li>
              <li id="logout">
                <Link to="#">logout</Link>
              </li>
              <li>
                <Link to="./admin/admin_recent_orders.html">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
