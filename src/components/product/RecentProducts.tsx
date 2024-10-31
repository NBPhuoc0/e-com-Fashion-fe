import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { ProductCardModel } from "@/models/product/productCard.model";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} rounded-full flex justify-center items-center w-10 h-10 !right-8 !top-[40%] before:!text-5xl before:!text-[rgba(0,0,0,0.3)] before:!leading-[48px]`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} rounded-full flex justify-center items-center w-10 h-10 before:!text-[rgba(0,0,0,0.3)] !left-1 !top-[40%] before:!text-5xl before:!leading-[48px] z-10`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const RecentProduct = ({
  listProduct,
}: {
  listProduct: ProductCardModel[];
}) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    ],
  };

  return (
    <div>
      <h2 className="text-lg lg:text-3xl font-semibold pb-2 lg:pb-8">
        Đã xem gần đây
      </h2>
      <div className="slider-container -mx-1">
        <Slider {...settings}>
          {listProduct.map((item) => (
            <div className="px-1" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentProduct;
