import React from "react";
import DynamicSlider from "../../Shared/DynamicSlider/DynamicSlider";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import banner from "../../Assets/product.jpg";

const Product = () => {
  let AllProductsInfo = [
    {
      id: 1,
      tittle: "Woven Labels",
      image: [
        { _id: 1, img: banner },
        { _id: 2, img: banner },
      ],
    },
    {
      id: 2,
      tittle: "Printed Fabric Labels",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 3,
      tittle: "Screen Printed Labels",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 4,
      tittle: "Heat Transfer Labels",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 5,
      tittle: "Offset Printed Tags",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 6,
      tittle: "Paper Packaging",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 7,
      tittle: "Adhesive Labels & Tags",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 8,
      tittle: "Digital Printed Tags",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 9,
      tittle: "Heat Transfer Labels",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 10,
      tittle: "Thermal Barcode Labels",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 11,
      tittle: "RFID / EAS Labels & Tags",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 12,
      tittle: "Rubber / Silicone Patch",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 13,
      tittle: "Seal cord/Plastic clips/Loops",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 14,
      tittle: "Twill Tape",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 15,
      tittle: "Jacquard Elastic",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 16,
      tittle: "Poly Bag",
      image: [{ _id: 1, img: banner }],
    },
    {
      id: 17,
      tittle: "PVC/TPU/EVA Bag",
      image: [{ _id: 1, img: banner }],
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
        <ul className="m-0" id="bannerSmallDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bannerSmallDotliId [@media(min-width:450px)]:w-[14px] w-[11px] bottom-0 [@media(min-width:450px)]:mt-[8px] mt-[15px]">
        <GoDotFill className="cursor-pointer [@media(min-width:450px)]:text-[14px] text-[11px]" />
      </div>
    ),
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <section className="max-w-[1920px] mx-auto GeologicaFont">
      <div className="mt-[100px] ">
        <DynamicSlider slides={AllProductsInfo[0].image} />
      </div>
      <div className=" py-6 [@media(min-width:850px)]:px-12 px-[0px]">
        <div className="[@media(min-width:850px)]:px-[0px] px-[1rem]">
          <h2 className="[@media(min-width:460px)]:text-[22px] text-[18px] font-semibold [@media(min-width:850px)]:pb-[5px] pb-0 text-gray-800">
            Woven Labels
          </h2>

          <p className="[@media(min-width:850px)]:text-[16px] [@media(min-width:600px)]:text-[15px] [@media(min-width:400px)]:text-[14px] text-[13px]">
            AR Labels & Trims Ltd is highly rich to produce woven label
            manufacturing considering best quality, unique design, raw material
            and in time delivering. Our woven label manufacturing machinery are
            modern and high quality to weave the trending quality woven labels
            that enhance the branding and appearance of clothing. have the
            capability to weave intricate designs, logos, and text using
            different colors, fonts, and patterns to create visually appealing
            labels that represent the brand identity of your brand. Our team is
            skilled professionals, including designers and technicians,
            collaborates closely with buyer to understand their specific
            requirements, provide design guidance, and deliver custom woven
            labels that meet buyer’s requirements. we strive to maintain high
            standards of quality control throughout the production process to
            ensure that the label meets buyer’s expectations.
          </p>
        </div>
        <div className="w-full py-6 [@media(min-width:850px)]:px-[0px] px-[1rem]">
          <div className="w-full flex flex-wrap items-center pb-6">
            <h2 className="sm:!text-[30px] [@media(min-width:460px)]:text-[26px] text-[20px] font-semibold text-[#2C3E50]  pr-[10px] ">
              <span className="text-black">Our</span> Products
            </h2>
            <p className="[@media(min-width:595px)]:text-[16px] [@media(min-width:400px)]:text-[14px] text-[13px] [@media(min-width:595px)]:pt-[7px] pt-0 text-left">
              (Delivering Brand Identification Solutions)
            </p>
          </div>
          <div className="border-b border-dashed border-black">
            <div className="w-[70px] h-[3px]  bg-black"></div>
          </div>

          <div className="flex flex-wrap w-[100%] mx-auto justify-center py-[2rem]">
            {AllProductsInfo?.map((key) => {
              return (
                <div
                  key={key?.id}
                  className="[@media(min-width:450px)]:w-[360px] [@media(min-width:370px)]:w-[330px] w-[300px] h-[260px] [@media(min-width:450px)]:mx-[10px] mx-0 my-[10px]  rounded-[10px] overflow-hidden border-[2px] border-[#ececec] bg-[#ffffff] relative"
                >
                  <Link to={`/productsolutions`}>
                    {/* multiple image */}
                    <Slider
                      {...settings}
                      className={`w-[100%] h-[220px]  ${
                        key?.image?.length > 1 ? "flex" : "!hidden"
                      } items-center overflow-hidden mx-auto`}
                    >
                      {key?.image?.map((key2) => {
                        return (
                          <img
                            key={key2?._id}
                            src={key2?.img}
                            className="w-[100%] h-[12rem] object-cover object-center block"
                            alt=""
                          />
                        );
                      })}
                    </Slider>
                    {/* 1 image only */}
                    <img
                      src={banner}
                      alt=""
                      className={`w-[100%] h-[12rem] ${
                        key?.image?.length > 1 ? "hidden" : "block"
                      }`}
                    />
                  </Link>
                  <div className="text-center text-black px-[5px] absolute bottom-[10px] left-0 right-0">
                    <p className="text-red-600 [@media(min-width:450px)]:text-[16px] text-[15px]">
                      {key.tittle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function NextButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] right-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="text-[black] text-[27px]" />
    </div>
  );
}
function PrevButton(props) {
  const { onClick } = props;
  return (
    <div
      className={`bg-[#dcdcdc] w-[20px] h-[50px] absolute top-[45%] left-0 [@media(min-width:450px)]:flex hidden items-center justify-center cursor-pointer z-10`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="text-[black] text-[27px]" />
    </div>
  );
}

export default Product;
