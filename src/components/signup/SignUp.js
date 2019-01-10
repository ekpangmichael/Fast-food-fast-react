import React, { Fragment } from "react";

const SignUp = () => {
  return (
    <Fragment>
      <section className="food-items">
        <div className="container">
          <div id="signup">
            <h3 className="header-bg">Sign Up</h3>
            <form className="register" id="register" method="post" action="#">
              <div>
                <label>Fullname</label>
                <input type="text" name="Fullname" id="name" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div>
                <label>password</label>
                <input type="password" name="password" id="password" required />
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="cpassword"
                  required
                />
              </div>
              <div>
                <label>Address</label>
                <input type="text" name="address" id="address" required />
              </div>
              <strong>
                <p id="msg" />
              </strong>
              <p>
                <strong />
                <input
                  className="button signup-btn-size"
                  type="submit"
                  defaultValue="Submit"
                  id="btn"
                />
              </p>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SignUp;
