import React from "react";
import Card from "./Card";
import Data from "./Apidata";

const Services = () => {
  return (
    <>
      <div className="container">
        <div>
          <img src="./bar.png" alt="bar" className="bar" />
        </div>

        <div className="text-container">
          <h3> This Bar is a Haven for Gin Lovers </h3>

          <p>By Jade Snow</p>
          <p>
            Sipping an ice-cold gin and tonic while lounging poolside in our
            Hawaii hotel is a refreshing scenario. It is made even more
            delightful to a slew of locally distilled gins cropping up across
            the islands. While Hawaiian-made gins may be a relatively
            contemporary phenomena, the evolution dates back more than a
            century.
          </p>
          <p>
            As the story goes, the drink was created unexpectedly. To make the
            compound quinine a more palatable experience, British soldiers and
            officers during their occupation of the Indian subcontinent, would
            combine their daily quinine dose with water and sugar. They made a
            concoction that became known as “Indian Tonic Water.”
          </p>
          <p>
            The Tonic Water was then made into a drink that was touted as a
            “gin". In the early 1800s, the first gins were made. It was made
            into a commercial production was in the early 1900s. People in the
            United States, Europe, and the United Kingdom were the first to use
            the drink.
          </p>
          <p>
            Today, our guests enjoy the island gin. It is distilled and creates
            a true art form. It makes are guest happy and relaxed. the gin is a
            heady, aromatic cocktail that elevate the standard to a whole new
            level. With that in mind, come vist our hotel and local bar when in
            Hawaii to embrace the sprit of greatness.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-center title-text ">Our Services</h2>

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
      </div>
    </>
  );
};

export default Services;
