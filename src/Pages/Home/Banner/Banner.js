import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import banner1 from "../../../Assets/banner/banner-1.jpg"
import banner2 from "../../../Assets/banner/banner-2.jpg"
import banner3 from "../../../Assets/banner/banner-3.jpg"
import banner4 from "../../../Assets/banner/banner-4.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";

// Install modules
const Banner = () =>
{

  const bannerData = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
  ];
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{ bottom: "0px" }}>
        <ul className="m-0" id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerDotliId [@media(min-width:650px)]:w-[17px] w-[12px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:650px)]:text-[17px] text-[12px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div className=" max-w-[1920px] mx-auto w-full h-[100%] justify-center relative mt-[6.5rem]">
      {/* <DynamicSlider slides={sliderData} /> */}
      <div className="relative flex items-center text-[#fff]">
        <Slider {...settings} className="w-[100%] xl:h-[610px]  [@media(min-width:650px)]:flex hidden items-center overflow-hidden mx-auto">
          {bannerData.map((key) =>
          {
            return (
              <img
                key={key.id}
                src={key.image}
                className="w-[100%] block"
                alt=""
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;

function NextButton (props)
{
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[40%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className=" text-[27px]" />
    </div>
  );
}
function PrevButton (props)
{
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] [@media(min-width:1000px)]:w-[30px] w-[20px] [@media(min-width:1000px)]:h-[80px] h-[50px] absolute top-[40%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10 text-[black] hover:text-primary transition-[0.3s]`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className=" text-[27px]" />
    </div>
  );
}

