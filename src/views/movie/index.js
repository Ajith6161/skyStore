import React, { useEffect, useState } from "react";

const Movies = ({ title, movies, movieName, select, sliceValue }) => {
  const [limit, setlimit] = useState(42);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (sliceValue) {
      setlimit(sliceValue);
    }
  }, [sliceValue]);
  let filteredMovie;
  if (movies && movieName) {
    filteredMovie =
      movies &&
      movies.filter(each =>
        each.name.toLowerCase().includes(movieName.toLowerCase())
      );
  }
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const movieselection = evt => {
    select(evt.id);
  };
  const ShowMore = () => {
    setloading(true);
    if (sliceValue) {
      setloading(false);
    } else if (limit < movies.length) {
      setTimeout(() => {
        setlimit(limit + 42);
        setloading(false);
      }, 1000);
    } else {
      setloading(false);
    }
  };

  return (
    <div className="movies container-fluid">
      <div className="title">
        <h3 className="latest" style={{ marginLeft: "5%", marginBottom: "2%" }}>
          {title}
        </h3>
      </div>
      <div className="row" style={{ marginLeft: "5%", marginRight: "5%" }}>
        {filteredMovie &&
          filteredMovie.slice(0, limit).map((value, index) => {
            return (
              <>
                <div
                  class="col-lg-2 col-md-3 col-sm-3 col-6"
                  style={{ cursor: "grab", cursor: "-webkit-grab" }}
                  onClick={() => movieselection(value)}
                >
                  <img src={value.image.medium} alt="card" width="100%" />
                  <p className="hidepara">{value.name}</p>
                </div>
              </>
            );
          })}
        {console.log(limit, "limit")}
        {!filteredMovie &&
          movies.slice(0, limit).map((value, index) => {
            return (
              <>
                <div
                  class="col-lg-2 col-md-3 col-sm-3 col-6"
                  style={{ cursor: "grab", cursor: "-webkit-grab" }}
                  onClick={() => movieselection(value)}
                >
                  <img src={value.image.medium} alt="card" width="100%" />
                  <p>{value.name}</p>
                </div>
              </>
            );
          })}
      </div>
      {!sliceValue && (
        <div
          class="text-center relative-container btn-row-container b1-top-cta-space b2-top-cta-space"
          style={{ marginTop: "3%" }}
        >
          <button
            onClick={() => ShowMore()}
            className="Showmore btn--medium b3-btn--small show-more-button active "
            data-tracking="true"
            type="button"
            style={{
              backgroundColor: loading ? "#030F1F" : "#2873C5",
              color: "white",
              marginLeft: "15%",
              border: "none"
            }}
          >
            {loading ? (
              <div className="spin">
                {" "}
                <div class="spinner-border text-light" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
            ) : (
              <span class="text">Show more</span>
            )}
          </button>
          <button class="back-to-top-link" onClick={() => topFunction()}>
            <a>
              <i class="fas fa-arrow-circle-up"></i> Back to top
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
