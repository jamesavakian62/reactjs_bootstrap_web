import React from "react";
import Card from "./Card";
import Data from "./Apidata";

const Home = () => {
  return (
    <>
      {/* =====Carousel Section start here===== */}
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./one.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./two.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./three.png" className="d-block w-100" alt="..." />
              <div className="carousel-item">
                <img src="./four.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Our Packages Section */}

          <h1 className="text-center text-info my-3">Our Packages</h1>

          <div className="container">
            <div className="row">
              {Data.map((values) => {
                return (
                  <>
                    <Card title={values.title} images={values.image} />
                  </>
                );
              })}
            </div>
          </div>

          <div className="text-container">
            <h1> Make Memories of a Lifetime </h1>

            <p>
              Brilliant sun, silky sand, stunning surf are the major elements
              families seek out when planning the ultimate kid-friendly beach
              vacation — the there’s one more to add: epic amounts of
              kid-focused fun.
            </p>
            <p>
              These seven resorts deliver all these ingredients (and more!),
              promising an unforgettable family vacation. The Ritz-Carlton,
              Naples, Florida
            </p>
            <p>
              Spend family time on the gentle waters of the Gulf of Mexico at
              The Ritz Carlton, Naples. Resort guests between the ages of 5 and
              12 learn about Florida’s unique ecosystems during hands-on morning
              and afternoon sessions led by a naturalist.
            </p>
            <p>
              The property recently revamped its Nature’s Wonders exhibit area,
              designed especially for kids, where 11 aquariums house sharks,
              eels, turtles and more.
            </p>
            <p>
              Depending on the day, half- and full-day sessions at Nature’s
              Wonders might include learning about the eating habits of the
              resident fish, crabs and turtles or heading down to the resort’s
              beach to dig for clams or drag a net through the intertidal zone.
            </p>
            <p>
              Session availability depends on the season, so be sure to ask in
              advance about the program when booking your stay.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
