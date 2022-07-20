import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div className="row text-center d-flex justify-content-center  mb-3">
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">About sky Store</a>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Terms of use</a>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Privacy</a>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Contactus</a>
          </h6>
        </div>
      </div>
      <div className="row text-center d-flex justify-content-center">
        <img src={""} href="" alt="youtube" />
        <img src={""} alt="twitter" />
        <img src={""} alt="face" />
        <img src={""} alt="insta" />
      </div>
      <div className="row text-center d-flex justify-content-center">
        <div className="p-2 col-md-6 mb-3">
          <img src={""} alt="app" />
          <img src={""} alt="play" />
        </div>
      </div>
      <div className="row text-center d-flex justify-content-center privacy">
        <h6>Copyright@2020-2021-sky Store.All Rights Reserved</h6>
      </div>
    </div>
  );
}
