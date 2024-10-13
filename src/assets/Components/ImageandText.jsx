import React from "react";
import astraImage from "/astraImage.png";
const ImageandText = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center mt-[2vw] ">
      <div className="w-[40%] flex flex-col pl-12 ">
        <h1 className=" text-[4vw] text-semibold text-white">Your ideas matters</h1>
        <p className="w-[90%] text-sm m-1 text-[#dadada] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
          dolor sit amet Lorem, ipsum dolor.
        </p>
        <button className="w-[150px] h-[40px] text-black mt-[1rem]  bg-[#ffcd58] text-sm font-semibold rounded-full hover:bg-[#ffcd58c2] transition duration-300 ease-in-out">
          Make a Website
        </button>
      </div>
      <div className="w-[60%] p-[3rem]">
        <img src="astraImage.png" alt="hello" />
      </div>
    </div>
  );
};

export default ImageandText;
