import React from "react";
import SizeGuide from "../sizeguide/SizeGuide";

export default function ProductSize({
  product,
  selectedSize,
  setSelectedSize,
}: {
  product: { sizes: { size_id: number; size: string }[] };
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}) {
  return (
    <>
      <div className="py-2">
        <div className="flex justify-between">
          <div className="font-medium pb-2">
            Kích thước:
            <span> {selectedSize}</span>
          </div>
          <SizeGuide />
        </div>
        <div className="flex gap-2">
          {product.sizes.map((item) => (
            <div
              key={item.size_id}
              className={`${
                selectedSize === item.size ? "bg-slate-900 text-gray-50" : ""
              } flex justify-center items-center rounded-lg h-8 w-8 md:h-10 md:w-10 border hover:border-slate-900 cursor-pointer`}
              onClick={() => setSelectedSize(item.size)}
            >
              {item.size}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
