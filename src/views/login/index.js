import React from "react";

// Components
import Form from "../../components/Form";

// Helper
import { getCookie, setCookie, clearCookie } from "../../lib/helper";

import { toast } from "react-toastify";
// import Navbar from "../../components/Navbar";
import { API_URL } from "../../constants/Config";
// import Footer from "../../components/Footers/index.js";
import axios from "axios";
import history from "../../history";
import Email from "../../components/Email";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Password from "../../components/Password";
// const histories = useHistory();

export function _userRegister(data, redirect = false) {
  console.log(data);

  axios
    .post(API_URL + "/users/login", data)
    .then(response => {
      let successMessage;

      if (response && response.data) {
        successMessage = response.data.message;
        if (response.data.message === "User does not exist") {
          toast.error("User does not exist :(", {
            position: toast.POSITION.TOP_RIGHT
          });

          history.push("/login");
        } else if (response.data.message === "Wrong password") {
          toast.error("Wrong password :(", {
            position: toast.POSITION.TOP_RIGHT
          });

          history.push("/login");
        } else {
          // toast.success("You are Loggedin successfully ☺☺☺",
          //  {
          //   position: toast.POSITION.TOP_RIGHT
          // });
          //Get Free
          const USER_ID = response.data.user.id;
          axios
            .get(API_URL + "/free/getOne/" + USER_ID)
            .then(response => {
              console.log(response.data, "free response");
              if (
                response &&
                response.data &&
                response.data.User_id == USER_ID
              ) {
                setCookie("free_user", true);
              } else {
                setCookie("free_user", false);
              }
            })
            .catch(error => {
              if (error && error.response && error.response.data) {
                return console.log(error.response.data);
              }
            });
          //Free
          setCookie("session_token", response.data.token);
          setCookie("userId", response.data.user.id);
          setCookie("accessKey", response.data.user.access_key);
          setCookie("competitior", response.data.user.isCompetitor);
          if (getCookie("moviename").length > 0) {
            history.push(
              `/OTT/${getCookie("categoryname")}/${getCookie(
                "languageName"
              )}/${getCookie("moviename")}/${getCookie("login_id")}/${getCookie(
                "category"
              )}`
            );
            clearCookie("moviename");
          } else {
            history.push("/home");
          }
        }

        return { successMessage } || {};
      }
    })
    .catch(error => {
      if (error && error.response && error.response.data) {
        return toast.error(error.response.data);
      }
    });
  axios.post(API_URL + "/competetion_register/login", data).then(response => {
    console.log(response, "responsee");
    if (response) {
      setCookie("usersId", response.data.id);
    } else {
      console.log("wrong pass");
      setCookie("usersId", 0);
    }
  });
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      message: ""
      //  login: this.props.location.state.login
    };
  }

  componentDidMount() {
    // window.location.reload();
    window.addEventListener("resize", this._updateDimensions);
    // console.log(history.location.state,"props");
    // console.log(this.props.location.state.login,"login");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateDimensions);
  }

  render() {
    return (
      <div className="logo-section">
        <div className="logo-center">
          <img src={""} alt={"logo"} />
        </div>
        {/* <Navbar /> */}
        <div>
          <div className="card rounded m-auto">
            <h1>Login</h1>
            <div className={["basic-login-form", ""].join(" ")}>
              <Form
                onSubmit={values => {
                  values.email = values.email ? values.email : null;
                  values.password = values.password ? values.password : null;

                  _userRegister(values);
                }}
              >
                <div className={["field-wrapper"].join("")}>
                  <label for="mwud_email" className="m-form-label">
                    Email or mobile phone number
                  </label>
                  <Email
                    name="email"
                    placeholder="Email Address"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <div className="m-password-field">
                    <label for="mwud_password" className="m-form-label">
                      Password
                    </label>
                    <a href="/forgot">Forgot your password?</a>
                  </div>
                  <Password
                    name="password"
                    placeholder="Password"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-login w-100">
                      Submit
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
                <label className="keep-signin-txt">
                  <input type="checkbox" /> Keep me signed in.
                </label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 new-to-txt">
                <h5>New to sky Store?</h5>
              </div>
            </div>
            <a href="/registration">
              <button type="submit" className="btn w-100 create-new-btn">
                Create your sky Store account
              </button>
            </a>
          </div>

          {/* Footer */}
          <div className="auth-footer">
            <div className="auth-footer-inner"></div>
            <div className="mov-size-mini">
              <span className="auth-footer-seperator"></span>
              <a href="/">Conditions of Use</a>
              <span className="auth-footer-seperator"></span>
              <a href="/">Privacy Notice</a>
              <span className="auth-footer-seperator"></span>
              <a href="/">Help</a>
              <span className="auth-footer-seperator"></span>
            </div>

            <div className="mov-spacing-none">
              <span className="mov-size-mini mov-color-secondary">
                &copy; 2020-2021 sky Store. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Login;
