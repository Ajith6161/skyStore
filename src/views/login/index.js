import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

import logo from "../../assets/img/movie.png"

const SignIn = () => {
  return (
    <div className="signin-container">
      <div id="signin-box" className="sign-in-box">
        <div className="signin-panel">
          <div className="panel">
            <div className="panel-header">
              <Link to="/">
                <div className="signin-logo">
                  <img src={logo} alt="" />
                </div>
              </Link>
            </div>
            <div className="sub-panel">
              <div className="mobile">
                <p className="link">
                  New to Sky iD? <Link to="/signup">Sign up</Link>{" "}
                </p>
              </div>
              <h3 className="signin-title">Sign in</h3>

              <div className="signin-form">
                <form noValidate="novalidate">
                  <div className="formFieldsWrapper">
                    <div className="label">
                      <label htmlFor="username">Email or Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        defaultValue=""
                        autoCapitalize="off"
                        autoComplete="on"
                      />
                    </div>
                    <div className="label">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        defaultValue=""
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        aria-required="true"
                        minLength="8"
                        maxLength="32"
                        aria-invalid="false"
                        placeholder=""
                      />
                    </div>

                    <p className="link">
                      Forgotten{" "}
                      <Link
                        id="forgottenUsername"
                        data-description="Forgot Username"
                        to="/"
                      >
                        username
                      </Link>{" "}
                      or{" "}
                      <Link
                        id="forgottenPassword"
                        data-description="Forgot Password"
                        data-tracking-label="forgot-password"
                        to="/"
                      >
                        password
                      </Link>
                      ?
                    </p>

                    <div className="label flex-checkbox">
                      <input
                        className="custom"
                        type="checkbox"
                        id="remember"
                        name="remember"
                        aria-required="true"
                        data-tracking="true"
                        data-tracking-label="remember-username-checked"
                        data-analytics-name="remember-username"
                      />
                      <span>Remember my username</span>
                    </div>
                    <div>
                      <p className="link">
                        <Link
                          id="privacyPolicyLink"
                          to="/"
                          data-description="Privacy Statement"
                          data-tracking-label="privacy-statement"
                          target="_blank"
                        >
                          Privacy &amp; Cookies Notice
                        </Link>
                      </p>
                    </div>
                    <div className="buttonRow">
                      <button
                        id="signinButton"
                        className="sky-btn"
                        type="submit"
                        title="Sign in"
                        data-tracking-label="sign-in-submit"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="new-to-sky">
              <div className="desktop-view">
                <h3 className="signin-title">New To Sky iD?</h3>
                <p>
                  You'll need a Sky iD before you can access some of our
                  services.
                </p>
                <p>
                  If you have signed up for another Sky online service you
                  already have one.
                </p>
              </div>

              <div className="signup-btn-section link">
                <p>
                  More about <Link to="/">Sky ID</Link>
                </p>
                <Link to="/signup">
                  <button className="signup-btn sky-btn-dark">Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-signin"></div>
    </div>
  );
};

export default SignIn;
