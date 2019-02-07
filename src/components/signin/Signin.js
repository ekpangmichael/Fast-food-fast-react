import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/authActions/signin';
import { ClipLoader } from 'react-spinners';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.signinUser(userData, this.props.history);
  };

  render() {
    return (
      <Fragment>
        <section className="food-items">
          <div className="container">
            <div id="signup">
              <h3 className="header-bg">Signin</h3>
              <form
                className="register"
                id="register"
                method="post"
                onSubmit={this.onSubmit}
              >
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    minLength="2"
                    maxLength="60"
                    required
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
                    minLength="2"
                    maxLength="100"
                    required
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
                      defaultValue="Login"
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
  ...state.signin
});
export default connect(
  mapStateToProps,
  { signinUser }
)(SignIn);
