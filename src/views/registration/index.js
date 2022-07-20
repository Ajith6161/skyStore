import React from "react";

// Components
import Form from "../../components/Form";

// Helper
import { setCookie, getCookie } from "../../lib/helper";
import Email from "../../components/Email";

import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// import Navbar from "../../components/Navbar";
import Text from "../../components/Text";
import { API_URL } from "../../constants/Config";
// import Footer from "../../components/Footers/index.js";
import axios from "axios";
import history from "../../history";
import Password from "../../components/Password";
import { faSave } from "@fortawesome/free-solid-svg-icons";

export function _userRegister(data, redirect = false) {
  console.log(data);
  let FreeData = {
    Name: data.name,
    status: 1,
    mail_id: data.email
  };
  axios
    .post(API_URL + "/users/register", data)
    .then(response => {
      let successMessage;
      if (response && response.data) {
        successMessage = response.data.message;
      }
      if (response.data.message === "users already exists") {
        toast.error("Email already exists", {
          position: toast.POSITION.TOP_LEFT
        });
      } else {
        FreeData.User_id = response.data.id;

        //Free
        axios
          .post(API_URL + "/free/subscribe", FreeData)
          .then(response => {
            console.log(response, "free Response");
          })
          .catch(error => {
            if (error && error.response && error.response.data) {
              return toast.error(error.response.data);
            }
          });
        //Free
        toast.success("A verification link has been sent to your email", {
          position: toast.POSITION.TOP_CENTER
        });
        history.push("login");
      }
      return { successMessage } || {};
    })
    .catch(error => {
      if (error && error.response && error.response.data) {
        return toast.error(error.response.data);
      }
    });
}

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div className="logo-section">
        <div className="logo-center">
          <img src={""} alt={"logo"} />
        </div>
        <div>
          <div className="card rounded m-auto signup-section">
            <h1>Sign-Up</h1>
            <div className={["basic-login-form", ""].join(" ")}>
              <Form
                onSubmit={values => {
                  values.email = values.email ? values.email : null;
                  values.password = values.password ? values.password : null;

                  _userRegister(values);
                }}
              >
                <div className={["field-wrapper"].join("")}>
                  <label for="mwud_name" class="m-form-label">
                    First Name
                  </label>
                  <Text
                    name="name"
                    placeholder="First name"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join("")}>
                  <label for="mwud_name" class="m-form-label">
                    Last Name
                  </label>
                  <Text
                    name="lname"
                    placeholder="Last name"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper align-bottom"].join("")}>
                  <label for="mwud_email" class="m-form-label">
                    Email
                  </label>
                  <Email
                    name="email"
                    placeholder="Email Address"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>

                <div className={["field-wrapper"].join("")}>
                  <label for="mwud_phone" class="m-form-label">
                    Phone Number
                  </label>
                  <Text
                    name="phone"
                    placeholder="Phone Number"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>

                <div className={["field-wrapper align-bottom"].join(" ")}>
                  <label for="mwud_password" class="m-form-label">
                    Password
                  </label>
                  <Password
                    name="password"
                    className="field"
                    placeholder="Password"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <label for="mwud_password" class="m-form-label">
                    Confirm Password
                  </label>
                  <Password
                    name="cpassword"
                    className="field"
                    placeholder="confirm Password"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-login w-100">
                      Create your sky Store account
                    </button>
                  </div>
                </div>
              </Form>
            </div>

            <div className="row">
              <div className="col-md-12 conditions-txt">
                By continuing, you agree to sky Store{" "}
                <a href="/">Conditions of Use</a> and{" "}
                <a href="/">Privacy Notice.</a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="auth-footer-inner"></div>
                <label className="keep-signin-txt">
                  Already have an account? <a href="/login">Sign-In</a>
                </label>
              </div>
            </div>
          </div>

          <div className="auth-footer">
            <div className="auth-footer-inner"></div>
            <div className="mov-size-mini">
              <span class="auth-footer-seperator"></span>
              <a href="/">Conditions of Use</a>
              <span class="auth-footer-seperator"></span>
              <a href="/">Privacy Notice</a>
              <span class="auth-footer-seperator"></span>
              <a href="/">Help</a>
              <span class="auth-footer-seperator"></span>
            </div>

            <div className="mov-spacing-none">
              <span className="mov-size-mini mov-color-secondary">
                &copy; 2020-2021 sky Store. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
