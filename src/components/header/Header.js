import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Header extends Component {
  logout = () => {
    localStorage.removeItem('fastFoodToken');
    this.setState({
      token: ''
    });
  };
  render() {
    const token = localStorage.getItem('fastFoodToken') || '';
    return (
      <div>
        <header>
          <div className="container">
            <div id="logo">
              <Link to="/">
                <img src="https://res.cloudinary.com/weezyval/image/upload/v1535674062/fastfood/logo.png" />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart ({this.props.totalItem})</Link>
                </li>
                <li id="userEmail">
                  <Link to="users/sign_in.html" />
                </li>
                {token ? (
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
export const mapStateToProps = (state) => ({
  ...state.cart
});
export default connect(
  mapStateToProps,
  null
)(Header);
