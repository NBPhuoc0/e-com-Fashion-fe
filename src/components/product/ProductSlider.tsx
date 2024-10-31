"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductSlider.css";
import { ProductCardModel } from "@/models/product/productCard.model";
import { Col, Row } from "antd";

const ProductSlider = ({ product }: { product: ProductCardModel }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const [nav3, setNav3] = useState<Slider | null>(null);
  const [nav4, setNav4] = useState<Slider | null>(null);

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  const sliderRef3 = useRef<Slider | null>(null);
  const sliderRef4 = useRef<Slider | null>(null);

  useEffect(() => {
    if (
      sliderRef1.current &&
      sliderRef2.current &&
      sliderRef3.current &&
      sliderRef4.current
    ) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
      setNav3(sliderRef3.current);
      setNav4(sliderRef4.current);
    }
  }, []);

  return (
    <>
      <div id="slider1" className="slider-container lg:block hidden">
        <div className="grid lg:grid-cols-[56px_1fr] grid-cols-[1fr] gap-1">
          <div className="">
            <Slider
              asNavFor={nav1 ?? undefined}
              ref={sliderRef2}
              slidesToShow={6}
              vertical={true}
              arrows={false}
              focusOnSelect={true}
            >
              {product.images.map((item) => (
                <div
                  key={item.id}
                  className="lg:w-14 w-20 lg:h-20 h-28 overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.url}
                    alt="photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="max-w-full overflow-hidden">
            <Slider
              asNavFor={nav2 ?? undefined}
              ref={sliderRef1}
              arrows={false}
            >
              {product.images.map((item) => (
                <div
                  key={item.id}
                  className="lg:aspect-[8/10] min-h-[550px] outline-none"
                >
                  <img
                    src={item.url}
                    alt="photo"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div id="slider2" className="slider-container lg:hidden block">
        <Slider asNavFor={nav4 ?? undefined} ref={sliderRef3} arrows={false}>
          {product.images.map((item) => (
            <div
              key={item.id}
              className="md:aspect-[8/10] aspect-[10/10] overflow-hidden"
            >
              <img src={item.url} alt="photo" />
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={nav3 ?? undefined}
          ref={sliderRef4}
          slidesToShow={6}
          slidesToScroll={1}
          focusOnSelect={true}
          arrows={false}
          className="-ml-1  sm:!block !hidden"
        >
          {product.images.map((item) => (
            <div
              key={item.id}
              className="aspect-[8/10] overflow-hidden cursor-pointer p-1"
            >
              <img
                src={item.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
