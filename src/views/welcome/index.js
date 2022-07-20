import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { API_URL, IMAGE_URL } from "../../constants/Config";
import Movie from "../movie/index.js";
import history from "../../history";
import Footer from "../../components/Footers/index.js";

class Welcome extends Component {
  state = {
    text: [],
    movies: [],
    images: []
  };
  componentDidMount() {
    let value = [];
    let para = [];
    value.push(
      "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_421D96C4-78A9-400D-B60E-2016EBC531B4_2022-5-23-T10-45-9.jpg?s=1440x580&t=bgmesh"
    );
    value.push(
      "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_2EEAEC5C-5F8F-4FC3-9825-A302FD366B05_2022-6-15-T10-51-14.jpg?s=1440x580&t=bgmesh"
    );
    value.push(
      "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_46773696-89F9-4D21-A926-152068A84296_2022-7-18-T13-18-17.jpg?s=1440x580&t=bgmesh"
    );
    para.push("Nulla vitae elit libero, a pharetra augue mollis interdum");
    para.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    para.push(
      " Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    );
    this.setState({ text: para });
    this.setState({ movies: value });
  }
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    const { movies, text } = this.state;
    return (
      <div className="margin-top-align">
        <Navbar />
        <div className="container-fluid home-banner-section">
          <div className="slides">
            <Carousel>
              {movies.map((movie, index) => (
                <div>
                  <img
                    className="d-block w-100 carosel-image"
                    src={movie}
                    alt="bannerImage"
                  />
                  <p>{text[index]}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Welcome;
