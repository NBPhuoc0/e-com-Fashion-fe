"use client";

import { ProductCardModel } from "@/models/product/productCard.model";
import { Checkbox } from "antd";
import React, { useState } from "react";
import NumberSpinner from "../NumberSpinner";
import ModalProduct from "./ModalProduct";

export default function CartItem({ product }: { product: ProductCardModel }) {
  const [countProduct, setCountProduct] = useState<number>(1);
  return (
    <div className="p-4 bg-white">
      <div className="flex gap-4 py-3">
        <Checkbox />
        <div className="flex w-full gap-6">
          <img
            className="w-16 xl:w-28"
            loading="lazy"
            src={product.images[0].url}
            alt=""
          />
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2">
              <div className="text-xs lg:text-base line-clamp-1 font-medium text-[#1c2430]">
                {product.name}
              </div>
              <div className="flex text-xs lg:text-base gap-3">
                <span
                  className={`font-medium ${
                    product.promotion_price != 0
                      ? "text-[#e14337]"
                      : "text-[#1c2430]"
                  }`}
                >
                  {(
                    product.min_variant_price - product.promotion_price
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
                {product.promotion_price != 0 && (
                  <span className="font-medium text-[#9fb0c7] line-through">
                    <span className="">
                      {product.min_variant_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="flex mt-auto justify-between items-center">
              <div>
                <ModalProduct product={product} />
              </div>
              <div className="w-1/3 sm:w-1/6">
                <NumberSpinner
                  count={countProduct}
                  setCount={setCountProduct}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
