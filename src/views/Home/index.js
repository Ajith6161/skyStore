import React from "react";
import { connect } from "react-redux";
import Movie from "../movie";
import Footer from "../../components/Footers/index.js";
import Navbar from "../../components/Navbar";
import { IMAGE_URL } from "../../constants/Config";
import history from "../../history";
import Carousel from "react-multi-carousel";
import { getHomePageData } from "../../actions";
import LoadingComponent from "../../components/Loader";
import { getCookie } from "../../lib/helper";
import { Helmet } from "react-helmet";
class Home extends React.Component {
  render() {
    const { movies, shows, isLoading } = this.props.state;

    if (isLoading) {
      return <LoadingComponent />;
    }
    // const responsive = {
    //   desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 1,
    //     slidesToSlide: 1 // optional, default to 1.
    //   },
    //   tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 1,
    //     slidesToSlide: 2 // optional, default to 1.
    //   },
    //   mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 1,
    //     slidesToSlide: 1 // optional, default to 1.
    //   }
    // };
    return (
      <div className="main-conatiner">
        <Navbar />
        <div className="container-fluid home-banner-section">
          <div className="containers">
            {/* <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .7"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
            </Carousel> */}
          </div>
        </div>
        {movies.length && (
          <div className="my-3">
            <Movie {...this.props.state} />
          </div>
        )}
        <br />
        <hr className="hrline" />
        <br />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, { getHomePageData })(Home);
