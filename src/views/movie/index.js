import React, { useEffect } from "react";
import { IMAGE_URL } from "../../constants/Config";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
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
  // if (movies) {
  //   filteredMovie = movies.filter(each =>
  //     each.name.toLowerCase().includes(movieName.toLowerCase())
  //   );
  // }

  //  console.log('filetermovie', filteredMovie)
  return (
    <div className="container-fluid">
      <div className="title">
        <h3 className="latest">Latest Movies & TV</h3>
      </div>
      <div className="row">
        {movies.map((value, index) => {
          return (
            <div class="col-md-2 ">
              <img src={value.image.medium} alt="card" width="90%" />
              <p>{value.name}</p>
            </div>
          );
        })}

      </div>

    </div>
  );
};


export default Movies;
