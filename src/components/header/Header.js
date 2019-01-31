import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    body: ''
  };

  logout = () => {
    localStorage.removeItem('fastFoodToken');
  };
  render() {
    this.token = localStorage.getItem('fastFoodToken');
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
                {this.token ? (
                  <li id="logout">
                    <Link to="#" onClick={this.logout}>
                      logout
                    </Link>
                  </li>
                ) : (
                  <Fragment>
                    <li id="signin">
                      <Link to="/signin">Signin</Link>
                    </li>
                    <li id="reg">
                      <Link to="/signup">Signup</Link>
                    </li>
                  </Fragment>
                )}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
