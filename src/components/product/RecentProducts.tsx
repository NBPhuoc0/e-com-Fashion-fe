import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

interface ImageItem {
    id: number;
    url: string;
}

interface Categorys {
    id: number;
    name: string;
    min_variant_price: number;
    images: ImageItem[];
    title: string;
}

// Tạo mũi tên tùy chỉnh sử dụng Tailwind CSS
function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} rounded-full flex justify-center items-center w-10 h-10`}
            style={{
                ...style, display: "block", background: "#a4a4a4", right: 0, top: '40%',
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} rounded-xl`}
            style={{ ...style, display: "block", background: "#a4a4a4", left: 0, zIndex: 100, top: '40%' }}
            onClick={onClick}
        />
    );
}

const RecentProduct = ({ listProduct }: { listProduct: Categorys[] }) => {
    const settings: Settings = {
        dots: true,
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
        ],
    };

    return (
        <div>
            <h2 className="text-lg lg:text-3xl font-semibold pb-2 lg:pb-8">Đã xem gần đây</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {listProduct.map((item) => (
                        <div className="p-2" key={item.id}>
                            <ProductCard product={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RecentProduct;
