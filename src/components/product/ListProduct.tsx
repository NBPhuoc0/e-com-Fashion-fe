import { Tabs } from "antd";
import React from "react";
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

const ListProduct = ({ listProduct }: { listProduct: Categorys[] }) => {
  return (
    <div className="mx-auto">
      {listProduct.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {listProduct.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      ) : (
        <span className="font-light">-- Chưa có sản phẩm --</span>
      )}
    </div>
  );
};

export default ListProduct;
