import React from "react";
import banner from "/army_img.avif";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>
      <div className="max-w-full container mx-auto my-12 md:my-16 md:px-20 px-5 flex  flex-col md:flex-row">
        <div className=" md:mr-7 md:mt-8 mt-2  md:w-1/2">
          <img src={banner} className="rounded-2xl " alt="" />
        </div>
        <div className="w-fuk md:w-1/2 mt-7 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold ">
              Remembering Those Who Let us -{" "}
              <span className=" text-lime-500"> FREE TO LIVE </span>
            </h1>
            <p className="text-xl ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias itaque cum corporis. Tempora, iure reprehenderit dolores
              neque aliquam laboriosam eius. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Repellat, est.
            </p>
          </div>
          <Link
            to="./signup"
            className={`btn mt-6 glass hover:bg-gray-800 hover:text-white    text-gray-700 dark:text-lime-300 text-xl font-fredoka`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
