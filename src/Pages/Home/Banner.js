import React from "react";
import bannerImg from "../../Assets/images/bucketgirl.png";

const Banner = () => {
  return (
    <section className="bg-accent pt-4 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center">
        <div className="flex items-center">
          <div className="text-center lg:text-left py-20">
            <h6 className="text-xl">Best Quality</h6>
            <h1 className="text-5xl lg:text-6xl font-bold mb-5">
              Professional Cleaning Service
            </h1>
            <p className="text-lg mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quae praesentium molestias veniam non autem, minima nostrum
              officiis qui eos.
            </p>
            <div className="btn btn-primary">GET STARTED</div>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
