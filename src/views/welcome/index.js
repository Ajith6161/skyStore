import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import "../../index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../../components/Footers/index.js";
import ReactCarousel from "../ReactCarosal/ReactCarousel";

class Welcome extends Component {
  state = {
    text: [],
    movies: [],
    images: []
  };
  render() {
    const { movies, text } = this.state;
    return (
      <div className="margin-top-align">
        <Navbar />
        <ReactCarousel />
        <Footer />
      </div>
    );
  }
}
export default Welcome;
