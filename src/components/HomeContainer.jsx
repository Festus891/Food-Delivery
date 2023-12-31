import React from "react";
import delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utills/data";

function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className=" py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike delivery
          </p>
          <div className="w-6 h-6  bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className=" text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[4rem] ">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
          explicabo magnam enim incidunt soluta omnis eveniet beatae maiores in
          reiciendis, repudiandae veritatis error dolore, ipsa, architecto
          asperiores doloremque totam.
        </p>
        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to bg-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 "
        >
          Order Now
        </button>
      </div>
      <div className="py-2  flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto h-420 w-full lg:w-auto lg:h-650 "
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center"
              >
                <img src={n.imageSrc} alt="I1" className="w-40 -mt-20 " />
                <p className="text-lg font-semibold text-textColor mt-4">
                  {n.name}
                </p>
                <p className="text-sm text-lighttextGray font-semibold my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor ">
                  <span className="text-xs text-red-600 ">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
