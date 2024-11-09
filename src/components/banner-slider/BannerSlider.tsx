import "./BannerSlider.css";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} rounded-full !hidden md:!flex justify-center items-center w-10 h-10 !right-8 !top-[40%] before:!text-5xl before:!text-[rgba(0,0,0,0.1)] before:!leading-[48px]`}
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
      className={`${className} rounded-full !hidden md:!flex justify-center items-center w-10 h-10 before:!text-[rgba(0,0,0,0.1)] !left-8 !top-[40%] before:!text-5xl before:!leading-[48px] z-10`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function BannerSlider({ banners }: { banners: string[] }) {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    dotsClass: "home-banner-slider-dots slick-dots",
  };
  return (
    <Slider {...settings}>
      {banners.map((item, index) => (
        <div key={index}>
          <img
            src={item}
            alt="Banner picture"
            loading="lazy"
            className="object-cover"
          />
        </div>
      ))}
    </Slider>
  );
}
