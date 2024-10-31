"use client";

import BreadcrumbC from "@/components/Breadcrumb";
import ProductSlider from "@/components/product/ProductSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faShield,
  faStar,
  faStopwatch,
  faTags,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import CopyCodeButton from "@/components/CopyCodeButton";
import { useState } from "react";
import NumberSpinner from "@/components/NumberSpinner";

import { jacketProducts, product } from "@/dummy-data/product.data";
import RecentProduct from "@/components/product/RecentProducts";
import ProductColor from "@/components/product/ProductColor";
import ProductSize from "@/components/product/ProductSize";
import PaymentMethod from "@/components/cart/PaymentMethod";
import { Col, Row } from "antd";
export default function ProductDetails({ params }: { params: { id: string } }) {
  const breadcrumbItems = [
    { title: "Trang chủ", link: "/" },
    { title: "Nam", link: "/nam" },
    { title: "Áo khoác nam", link: "/nam/ao-khoac" },
    { title: "Áo gió nam", link: "/nam/ao-gio" },
    { title: "Áo Khoác Gió Nam Thông Minh Trượt Nước" },
  ];

  const [selectedSize, setSelectedSize] = useState<string>("-");
  const [selectedColor, setSelectedColor] = useState<string>("-");
  const [countProduct, setCountProduct] = useState<number>(1);

  return (
    <div>
      <div className="sectionContainer">
        <BreadcrumbC items={breadcrumbItems} />
        <div className="grid md:grid-cols-24 grid-cols-12 lg:gap-10 gap-5 md:overflow-auto overflow-hidden">
          <div className="lg:col-span-1 lg:block hidden"></div>
          <div className="lg:col-span-11 md:col-span-12 col-span-12">
            <div className="sticky top-[80px]">
              <ProductSlider product={product} />
            </div>
          </div>
          <div className="lg:col-span-11 md:col-span-12 col-span-12">
            {/* info product */}

            <div className="py-2">
              <h2 className="text-lg xl:text-2xl font-medium">{product.name}</h2>

              <div className="py-2 flex items-center gap-1">
                <div className="mr-2">{params.id}</div>

                <div className="flex items-center h-4 w-4 text-amber-300">
                  <FontAwesomeIcon icon={faStar} />
                </div>

                <div className="font-semibold text-xs xl:text-sm">4.8</div>

                <div className="text-gray-400 text-xs xl:text-sm">(120)</div>

                <div className="border-l-2 h-4"></div>

                <div className="flex gap-1 text-xs xl:text-sm">
                  <div className="font-thin">Đã bán</div>

                  <div className="font-semibold">3328</div>
                </div>
              </div>
            </div>

            <div className="font-semibold text-[#1c2430] text-lg xl:text-2xl">
              {product.min_variant_price.toLocaleString()} đ
            </div>

            {/* info discount */}
            <div className="py-2 flex items-center">
              <div className="w-1/3 text-xs xl:text-sm">Giảm 69K cho đơn hàng từ 499K</div>

              <div className="w-2/3 flex items-center">
                <span className="py-1 px-4 border rounded-md border-gray-300 border-dashed text-xs text-red-600 my-0.5 mx-1.5 bg-zinc-100">
                  69KT10
                </span>

                <CopyCodeButton code={"69KT10"} />
              </div>
            </div>

            {/* Color */}
            <ProductColor
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />

            {/* Size */}
            <ProductSize
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            {/* Count */}
            <div className="py-3">
              <div className="font-medium pb-2">Số lượng:</div>

              <div className="flex sm:gap-4 gap-2 pb-4">
                <div className="sm:w-1/4 w-2/5">
                  <NumberSpinner
                    count={countProduct}
                    setCount={setCountProduct}
                  />
                </div>

                <button className="sm:w-3/4 w-3/5 sm:p-2 p-3 border border-zinc-400 rounded-lg text-md font-medium hover:bg-gray-100">
                  Thêm vào giỏ hàng
                </button>
              </div>

              <button className="border text-lg font-medium w-full h-12 rounded-lg hover:scale-[.99] bg-amber-400 transition-all duration-200 shadow-2xl">
                Mua hàng
              </button>
            </div>

            <PaymentMethod />

            <div className="pt-3 text-sm">
              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3 text-gray-500">
                  <FontAwesomeIcon className="h-5 w-5" icon={faTruckFast} />
                </div>

                <div className="text-[#394960] font-semibold pr-1">
                  Miễn phí vận chuyển:
                </div>

                <div className="text-[#394960]"> Đơn hàng từ 498k</div>
              </div>

              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3 text-gray-500">
                  <FontAwesomeIcon className="h-5 w-5" icon={faStopwatch} />
                </div>

                <div className="text-[#394960] font-semibold pr-1">
                  Giao hàng:
                </div>

                <span className="text-[#394960]">
                  Từ 3 - 5 ngày trên cả nước
                </span>
              </div>

              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3 text-gray-500">
                  <FontAwesomeIcon
                    className="h-5 w-5"
                    icon={faArrowRightArrowLeft}
                  />
                </div>

                <div className="text-[#394960] font-semibold pr-1">
                  Miễn phí đổi trả:
                </div>

                <span className="text-[#394960]">
                  Tại 267+ cửa hàng trong 15 ngày
                </span>
              </div>

              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3 text-gray-500">
                  <FontAwesomeIcon className="h-5 w-5" icon={faTags} />
                </div>

                <span className="text-[#394960]">
                  Sử dụng mã giảm giá ở bước thanh toán
                </span>
              </div>

              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3 text-gray-500">
                  <FontAwesomeIcon className="h-5 w-5" icon={faShield} />
                </div>

                <span className="text-[#394960]">
                  Thông tin bảo mật và mã hoá
                </span>
              </div>
            </div>

            <ul className="py-3 text-sm">
              <li className="list-inside list-disc">
                Áo gió thông minh làm từ chất liệu vải gió, được cải tiến và
                nâng cấp với khả năng trượt nước. Đặc biệt có thể lộn ngược và
                gấp gọn thành 1 chiếc túi dễ dàng mang đi mọi nơi. Thiết kế gấu
                áo có chun rút, chun tay tránh gió lùa hiệu quả.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 lg:block hidden"></div>
        </div>
        <div className="py-6 lg:py-10">
          <RecentProduct listProduct={jacketProducts} />
        </div>
      </div>
    </div>
  );
}
