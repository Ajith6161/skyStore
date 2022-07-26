import React from "react";
import './register.css';
import register from "../../assets/img/sky.png"

const SignUp = () => {
  return (
    <>
      <div id="pageContentWrapper">
        <div id="header">
          <div id="logo"><img src={register} height="70px" style={{ float: "left", marginLeft: "45%" }} alt="sky-logo" /></div>
        </div>
        <div className="container">
          <div className="panel panel-default">
          <div className="panelHeader">
            <h1 className="page-header-two">Create a Sky iD</h1>
            <div id="nav">
              <span id="preamble">Already have a Sky iD?</span>
              <ul>
                <li>
                  <a id="signinLink" href="/signin/skystore/7b613a2768747470733a2f2f7777772e736b7973746f72652e636f6d2f7369676e696e2f736b7969643f72657475726e55726c3d68747470732533412532462532467777772e736b7973746f72652e636f6d25324625334661696425334430393136363263372d633566332d343365662d616664302d643935373338393132346239272c623a2768747470733a2f2f7777772e736b7973746f72652e636f6d2f3f6169643d30393136363263372d633566332d343365662d616664302d643935373338393132346239272c773a27636f6d70616374277d" data-description="Sign in" data-tracking-label="sign-in">
                    Sign in
                  </a>
                </li>
                <li>
                  <a id="helpLink" href="http://help.sky.com/articles/create-a-sky-id" data-description="Help" data-tracking-label="help" target="_blank">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
            <div className="panel-body">A Basic Panel</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
