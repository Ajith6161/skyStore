import React, { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Movies = ({ title,movies, movieName, select }) => {
  const [limit, setlimit] = useState(42);
  const [loading, setloading] = useState(false);

  let filteredMovie;
  if (movies && movieName) {
    console.log(movies[0] && movies[0].name, "movies");
    filteredMovie = movies && movies.filter(each =>
      each.name.toLowerCase().includes(movieName.toLowerCase())
    );
  }
  // const renderTooltip = props => {
  //   console.log(props, "props")
  //   return (
  //     <Tooltip  {...props}>Tooltip for the register button</Tooltip>
  //   )
  // };
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const movieselection = (evt) => {
    select(evt.id)
  }
  const ShowMore = () => {
    setloading(true);
    if (limit < movies.length) {
      setTimeout(() => {
        setlimit(limit + 42);
        setloading(false);
      }, 1000);
    }
    else {
      setloading(false);
    }
  }
  //  console.log('filetermovie', filteredMovie)
  return (
    <div className="container-fluid">
      <div className="title">
        <h3 className="latest" style={{ marginLeft: "5%", marginBottom: "2%" }}>{title}</h3>
      </div>
      <div className="row" style={{ marginLeft: "5%", marginRight: "5%" }}>
        {filteredMovie && filteredMovie.slice(0, limit).map((value, index) => {
          return (
            <>
              {/* <OverlayTrigger placement="right" overlay={renderTooltip}> */}
              <div class="col-md-2 col-sm-3 col-6" onClick={() => movieselection(value)}>
                <img src={value.image.medium} alt="card" width="100%" />
                <p>{value.name}</p>
              </div>
              {/* </OverlayTrigger> */}
            </>
          );
        })}
        {!filteredMovie && movies.slice(0, limit).map((value, index) => {
          return (
            <>
              {/* <OverlayTrigger placement="right" overlay={renderTooltip}> */}
              <div class="col-md-2 col-sm-3 col-6" onClick={() => movieselection(value)}>
                <img src={value.image.medium} alt="card" width="100%" />
                <p>{value.name}</p>
              </div>
              {/* </OverlayTrigger> */}
            </>
          );
        })}
      </div>
      <div class="text-center relative-container btn-row-container b1-top-cta-space b2-top-cta-space" style={{ marginTop: "3%" }}>
        <button onClick={() => ShowMore()} className="btn btn--medium b3-btn--small show-more-button active col-12 col-sm-12"  data-tracking="true" type="button" style={{ backgroundColor: loading ? "#030F1F" : "#2873C5", color: "white", marginLeft: "15%", width: "13%", border: "none" }}>
          {loading ? <div className="spin" > <div class="spinner-border text-light" role="status">
            <span class="sr-only"></span>
          </div>
          </div> : <span class="text">Show more</span>}
        </button>
        <button class="back-to-top-link" onClick={() => topFunction()}><a><i class="fas fa-arrow-circle-up"></i> Back to top</a></button></div>
    </div>
  );
};


export default Movies;
