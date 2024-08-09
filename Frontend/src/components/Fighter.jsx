import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fight from "./Fight";

function Fighter() {
  const filterData = list.filter((data) => data.category === "ff");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl md:mx-auto my-16 md:my-32 md:px-24 m-5">
        <div>
          <h1 className="font-bold text-3xl pb-1">Our Fighters</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            voluptatibus dolorum cum a, animi corporis repellat tenetur aliquid
            autem nihil, quod quibusdam magni ipsa architecto quae. Nemo sunt
            aliquid reprehenderit.
          </p>
        </div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Fight item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Fighter;
