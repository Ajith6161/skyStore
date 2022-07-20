import React from "react";
import { IMAGE_URL } from "../../constants/Config";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getCookie } from "../../lib/helper";
const Movies = ({ movies, userSubDetail, movieName }) => {
  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 7
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2
  //   }
  // };

  // const{movieName} = this.props;
  let filteredMovie;
  if (movies) {
    filteredMovie = movies.filter(each =>
      each.name.toLowerCase().includes(movieName.toLowerCase())
    );
  }

  //  console.log('filetermovie', filteredMovie)
  return (
    <div className="container-fluid">
      <div className="title">
        <h5 className="latest">Latest Movies</h5>
        {/* <Carousel responsive={responsive}> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    movieName: state.movieName
  };
}

export default connect(mapStateToProps, null)(Movies);