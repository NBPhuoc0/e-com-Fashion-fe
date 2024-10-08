"use client"

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ProductSlider.css'

interface ImageItem {
    id: number;
    url: string;
}

interface Product {
    id: number;
    name: string;
    min_variant_price: number;
    images: ImageItem[]
    title: string;
}

const ProductSlider = ({ product }: { product: Product }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    const [nav3, setNav3] = useState<Slider | null>(null);
    const [nav4, setNav4] = useState<Slider | null>(null);

    const sliderRef1 = useRef<Slider | null>(null);
    const sliderRef2 = useRef<Slider | null>(null);
    const sliderRef3 = useRef<Slider | null>(null);
    const sliderRef4 = useRef<Slider | null>(null);

    useEffect(() => {
        if (sliderRef1.current && sliderRef2.current && sliderRef3.current && sliderRef4.current) {
            setNav1(sliderRef1.current);
            setNav2(sliderRef2.current);
            setNav3(sliderRef3.current);
            setNav4(sliderRef4.current);
        }
    }, []);

    return (
        <>
            <div id="slider1" className="slider-container grid grid-cols-10 gap-3">
                <div className="col-span-1">
                    <Slider
                        asNavFor={nav1 ?? undefined}
                        ref={sliderRef2}
                        slidesToShow={7} // Hiển thị tối đa 7 item
                        slidesToScroll={1}
                        swipeToSlide={false} // Vô hiệu hóa swipe
                        focusOnSelect={true}
                        vertical={true} // Hiển thị dọc
                        arrows={false}
                    >
                        {product.images.map((item, index) => (
                            <div
                                key={index}
                                className="h-16"
                            >
                                <img className="h-16" src={item.url} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="col-span-9">
                    <Slider
                        asNavFor={nav2 ?? undefined}
                        ref={sliderRef1}
                        arrows={false}
                    >
                        {product.images.map((item) => (
                            <div>
                                <img src={item.url} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div id="slider2" className="slider-container">
                <Slider
                    asNavFor={nav4 ?? undefined}
                    ref={sliderRef3}
                    arrows={false}
                >
                    {product.images.map((item) => (
                        <div className="h-[50vh] overflow-hidden px-2">
                            <img src={item.url} alt="" />
                        </div>
                    ))}
                </Slider>
                <Slider
                    asNavFor={nav3 ?? undefined}
                    ref={sliderRef4}
                    slidesToShow={7} // Hiển thị tối đa 7 item
                    slidesToScroll={1}
                    focusOnSelect={true}
                >
                    {product.images.map((item, index) => (
                        <div
                            key={index}
                            className="px-2"
                        >
                            <img src={item.url} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        </>


    );
};

export default ProductSlider;
