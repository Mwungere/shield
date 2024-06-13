"use client";
import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Sectors, SlidesData } from "@/constants";

const Intro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  function handleSlideChange(index) {
    setCurrentSlide(index);
  }
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className=" flex flex-col items-start lg:self-end lg:w-[73%] justify-center p-5 overflow-x-hidden">
        <h1 className=" text-primary text-4xl font-bold mb-5 ">
          Lorem ipsum dolor sit amet <br /> consectetur
        </h1>
        <p className=" text-primary opacity-50 text-sm lg:text-lg mb-2 lg:mb-16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam <br />
          nostrum nemo illum iure. Rem, quisquam quos voluptatum
        </p>
        <div className=" flex space-x-2 overflow-x-scroll whitespace-nowrap  scroll-smooth scrollbar-hide">
          {Sectors.map((sector, index) => (
            <div key={index} className="w-[200px] xl:w-[300px] h-[200px] xl:h-[250px] overflow-hidden rounded">
              <div
                className="w-[100%] h-[100%] bg-white rounded bg-center transition-all ease-in-out duration-300 flex items-end zoom"
                style={{
                  backgroundImage: `url(${sector.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <p className=" font-bold text-white">{sector.sector}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 lg:absolute lg:w-[25%] h-[460px] lg:h-[520px] xl:h-[570px] overflow-x-hidden">
        <div className=" flex-1 h-[300px] lg:h-full ">
          {SlidesData.map(({ title, description, imageUrl }, index) => {
            const divStyle = {
              backgroundImage: `url(${imageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            };

            return (
              <div
                key={index}
                className={` h-full p-5 text-start flex flex-shrink-0 items-start justify-end flex-col bg-center ${
                  currentSlide === index ? "visible" : "hidden"
                }`}
                style={divStyle}
              >
                <h1 className="text-white font-body font-bold text-3xl mb-3">
                  {title}
                </h1>
                <p className="text-white font-body mb-10">{description}</p>
                <div className="absolute left-0 right-0 flex items-end justify-end">
                  {SlidesData.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full mx-1 cursor-pointer ${
                        currentSlide === index
                          ? "bg-white w-5 h-5"
                          : "bg-gray-400 w-5 h-5 bg-opacity-80"
                      }`}
                      onClick={() => handleSlideChange(index)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
