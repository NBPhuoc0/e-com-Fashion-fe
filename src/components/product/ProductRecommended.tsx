import {
  jacketProductsHome,
  jeansProductsHome,
} from "@/dummy-data/product.data";
import ListProduct from "./ListProduct";
import { useState } from "react";
import Link from "next/link";
import { ProductCategory } from "@/models/product/productCategory.model";

export default function ProductRecommended() {
  const [cateIDSelected, setCateSelected] = useState(1);
  const [isSelectorVisible, setIsSelectorVisible] = useState(false);

  const categorys: ProductCategory[] = [
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

  return (
    <section className="mb-5">
      <div className="category-selector mb-5 flex justify-center">
        <div className="flex items-center gap-4">
          <h2 className="font-normal lg:text-3xl md:text-xl sm:text-lg text-md">
            Gợi ý sản phẩm
          </h2>
          <div
            onClick={() => {
              setIsSelectorVisible(!isSelectorVisible);
            }}
            className="relative cursor-pointer lg:p-3 p-2 px-5 sm:w-48 w-auto border border-gray-300 rounded-xl inline-flex"
          >
            {categorys !== null && (
              <span className="text-center m-auto select-none">
                {categorys.find((item) => item.id === cateIDSelected)?.name}
              </span>
            )}

            <div
              className={`absolute z-10 top-full left-0 right-0 translate-y-2 select__option-wrapper border border-gray-300 rounded-xl overflow-hidden bg-white ${
                isSelectorVisible ? "" : "hidden"
              }`}
            >
              {categorys !== null &&
                categorys.map((item) => {
                  return (
                    <div
                      onClick={() => setCateSelected(item.id)}
                      key={item.id}
                      className={`lg:p-3 p-1 cursor-pointer select-none ${
                        cateIDSelected === item.id
                          ? "bg-blue-100"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {item.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <ListProduct
        listProduct={
          categorys.find((item) => item.id === cateIDSelected)?.listProduct ??
          []
        }
      />

      <Link
        href={"/collection/" + cateIDSelected}
        className="flex justify-center"
      >
        <div
          className={`w-full max-w-96 text-center text-black hover:text-gray-500 font-medium rounded-lg p-2 border border-gray-600 hover:border-gray-500 mt-5 text-centers ${
            (
              categorys.find((item) => item.id === cateIDSelected)
                ?.listProduct ?? []
            ).length > 0
              ? ""
              : "hidden"
          }`}
        >
          Xem thêm
        </div>
      </Link>
    </section>
  );
}
