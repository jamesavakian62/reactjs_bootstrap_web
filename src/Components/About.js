import React from "react";
import Card from "./Card";
import Data from "./Apidata";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row my-4 d-flex align-items-center">
          <div className="col-xs-12 col-md-6">
            <h1 className="title-text">Great Hotels</h1>
            <p>
              Our hotels are home to many guests. They are restful resorts that
              host different flavors of great living. The hotels are a center to
              pleasure and relaxation. Hangout with your friends and family by
              the pool. Enjoy the great views of the or our sourroundings. Enjoy
              life in our hotels.
              <p></p>
              Our locations are the ingredients of fun and relaxation for many
              decades. Travelers and locals alike flove to stay are our resorts
              all year round. Many of the resorts have restaurants and live
              performers for evening entertainment. Live music is special in our
              resorts and our guests stay often--they rave about the performers
              at our locations.
              <p></p>
              Our hotelts are respected and lauded for their hospitality. Our
              guests are always welcome and are treated with respect. It are our
              guests who are the most important to us and made our resort hotels
              stand our from the rest. Come visit our hotels and enjoy the great
              views of the or our sourroundings. Enjoy life in our hotels.
            </p>
          </div>

          <div className="col-xs-12 col-md-6">
            <img src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=540&h=327&dpr=1" />
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}

      <h2 className="text-center title-text ">Meet Our Team</h2>

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
      <div className="text-title">
        <h3> Putting "Grand” in Grand Cayman </h3>
        <div className="text-container">
          <p>
            The Grand Cayman Seven Mile Beach Resort & Spa brings
            family-friendly luxury to Seven Mile Beach, one of the world’s
            loveliest stretches of white-coral sand.
          </p>
          <p>
            From every lanai, beach balcony and cabana here, you’ll see
            soul-stirring views of water that shifts from indigo to cobalt to
            aquamarine. Grand Cayman itself is at the top of an underwater
            mountain range, and the coral-peppered reef at Seven Mile Beach is a
            snorkeler’s dream.
          </p>
          <p>
            The crescent -shaped shore is strewn with casual beach bars and
            restaurants, and the lilt of steel-drum calypso is the evening
            soundtrack. This is the island’s playground, so Palm Beach is
            bustling from afternoon onward, but in the mornings you’ll have
            peace and quiet for a stroll on the sand or a dip in the warm
            Caribbean Sea.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
