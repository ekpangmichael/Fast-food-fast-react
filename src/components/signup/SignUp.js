import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/authActions/signup';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    cpassword: '',
    address: '',
    errorFound: false
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { password, cpassword } = this.state;
    if (password !== cpassword) {
      return toast.error('Password did not match');
    }
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      cpassword: this.state.cpassword,
      address: this.state.address
    };

    this.props.signUpUser(userData);
  };

  render() {
    return (
      <Fragment>
        <section className="food-items">
          <div className="container">
            <div id="signup">
              <h3 className="header-bg">Sign Up</h3>
              <form
                className="register"
                id="register"
                method="post"
                onSubmit={this.onSubmit}
              >
                <div>
                  <label>Fullname</label>
                  <input
                    type="text"
                    name="Fullname"
                    id="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                    minLength="2"
                    maxLength="20"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                    minLength="2"
                    maxLength="50"
                  />
                </div>
                <div>
                  <label>password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                    minLength="2"
                    maxLength="50"
                  />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="cpassword"
                    value={this.state.cpassword}
                    onChange={this.onChange}
                    required
                    minLength="2"
                    maxLength="50"
                  />
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={this.state.address}
                    onChange={this.onChange}
                    required
                    minLength="2"
                    maxLength="100"
                  />
                </div>
                {!this.props.isLoading ? (
                  <div>
                    <div className={this.props.class}>
                      {this.props.response}
                    </div>
                    <input
                      className="button signup-btn-size"
                      type="submit"
                      defaultValue="Submit"
                      id="btn"
                    />
                  </div>
                ) : (
                  <center>
                    <ClipLoader
                      sizeUnit="px"
                      size={30}
                      color={'#e8491d'}
                      loading={this.props.isLoading}
                    />
                  </center>
                )}
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
export const mapStateToProps = (state) => ({
  ...state.signup
});
export default connect(
  mapStateToProps,
  { signUpUser }
)(SignUp);
