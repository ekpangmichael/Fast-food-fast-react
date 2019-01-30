import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/authActions/signup';
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

    this.props.signUpUser(userData);
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
                    required
                  />
                </div>

                {!this.props.isLoading ? (
                  <input
                    className="button signup-btn-size"
                    type="submit"
                    defaultValue="Submit"
                    id="btn"
                  />
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
const mapStateToProps = (state) => ({
  ...state.signup
});
export default connect(
  mapStateToProps,
  { signUpUser }
)(SignIn);