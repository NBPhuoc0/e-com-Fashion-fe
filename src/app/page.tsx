"use client";

import BannerSlider from "@/components/banner-slider/BannerSlider";
import PostList from "@/components/post/PostList";
import ListProduct from "@/components/product/ListProduct";
import { Col, Row, Tabs } from "antd";
import { useEffect, useState } from "react";

import "../styles/Home.custom.css";
import {
  jacketProductsHome,
  jeansProductsHome,
} from "@/dummy-data/product.data";
import Link from "next/link";
import ProductRecommended from "@/components/product/ProductRecommended";

export default function Home() {
  const banners: string[] = [
    "/assets/images/banner_1.webp",
    "/assets/images/banner_2.png",
    "/assets/images/banner_3.png",
    "/assets/images/banner_4.webp",
  ];

  const banner_collections: string[] = [
    "/assets/images/banner_collection_1.webp",
    "/assets/images/banner_collection_2.webp",
    "/assets/images/banner_collection_3.webp",
    "/assets/images/banner_collection_4.webp",
  ];

  const categorys = [
    {
      id: 1,
      name: "Áo Gió",
      listProduct: jacketProductsHome,
    },
    {
      id: 2,
      name: "Jeans Flex",
      listProduct: jeansProductsHome,
    },
    {
      id: 3,
      name: "Áo Polo",
      listProduct: [],
    },
    {
      id: 4,
      name: "Quần Âu",
      listProduct: [],
    },
    {
      id: 5,
      name: "Sơ Mi",
      listProduct: [],
    },
  ];

  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsCentered(true);
      } else {
        setIsCentered(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <div className="sectionContainer">
        <BannerSlider banners={banners} />
        <div className="mt-6 tabsHome">
          <h2 className="text-2xl md:text-3xl text-center py-2">
            Sản phẩm ưa chuộng
          </h2>
          <Tabs
            defaultActiveKey="1"
            centered={isCentered}
            items={categorys.map((category, i) => {
              const id = String(i + 1);
              return {
                label: category.name,
                key: id,
                children: (
                  <>
                    <div className="flex flex-col items-center">
                      <ListProduct listProduct={category.listProduct} />
                      {category.listProduct.length > 0 && (
                        <Link
                          href={"/collection/" + category.id}
                          className="text-black hover:text-gray-500 font-medium rounded-lg p-2 w-96 border border-gray-600 hover:border-gray-500 mt-5 text-center"
                        >
                          {" "}
                          Xem thêm{" "}
                        </Link>
                      )}
                    </div>
                  </>
                ),
              };
            })}
          />
        </div>

        <div className="w-full my-5">
          <img
            loading="lazy"
            src="/assets/images/banner_ads.webp"
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>

        <ProductRecommended />

        <Row gutter={16}>
          {banner_collections.map((img, index) => {
            return (
              <Col span={12} key={index}>
                <div className="w-full mb-4">
                  <img
                    loading="lazy"
                    src={img}
                    alt="collection banner"
                    className="w-full h-full"
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="w-full bg-black text-white font-bold text-4xl text-center p-5">
        <span>#FStore tự hào thương hiệu Việt</span>
      </div>

      <div className="my-5 sectionContainer">
        <PostList />
      </div>
    </main>
  );
}
