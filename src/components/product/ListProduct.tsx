import React from "react";
import ProductCard from "./ProductCard";
import { ProductCardModel } from "@/models/product/productCard.model";

const ListProduct = ({ listProduct }: { listProduct: ProductCardModel[] }) => {
  return (
    <div>
      {listProduct.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {listProduct.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <span className="font-light">-- Chưa có sản phẩm --</span>
      )}
    </div>
  );
};

export default ListProduct;
