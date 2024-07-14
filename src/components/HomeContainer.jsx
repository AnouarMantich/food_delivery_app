import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery{" "}
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery man"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Rhe Fastest Delivery In{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          aspernatur, quibusdam libero ipsam eos magnam adipisci nam nemo ipsum
          earum, dicta sed cupiditate minus quod quasi laudantium odio error
          maxime?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero background"
          className="ml-auto h-480 w-full lg:w-auto lg:h-650"
        />
        <div className=" h-full md:max-w-[600px] w-full absolute md:left-20 top-0 flex-0 flex items-center justify-center  lg:gap-4 gap-2 flex-wrap ">
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="md:w-190 w-[45%] md:p-4 p-2 py-[10%] bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  alt="I1"
                  className="md:w-40 w-[70%] lg:-mt-20  -mt-20"
                />
                <p className="md:text-xl text-[1rem] font-semibold text-textColor mt-4">
                  {item.name}
                </p>
                <p className="md:text-sm text-[.75rem] text-lighttextGray font-semibold my-3">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-sm text-red-600">$</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
