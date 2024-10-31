import React, { useState } from "react";
import { Drawer, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ProductCardModel } from "@/models/product/productCard.model";
import ProductSlider from "../product/ProductSlider";
import ProductColor from "../product/ProductColor";
import ProductSize from "../product/ProductSize";
import NumberSpinner from "../NumberSpinner";

const ModalProduct = ({ product }: { product: ProductCardModel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("-");
  const [selectedSize, setSelectedSize] = useState<string>("-");
  const [countProduct, setCountProduct] = useState<number>(1);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const handleCancelDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <button
        className="lg:hidden flex px-2 sm:px-4 py-1 bg-slate-100 rounded-md lg:rounded-xl text-xs lg:text-base"
        onClick={showDrawer}
      >
        <span>
          {product.colors[0].color}, {product.sizes[0].size} 
        </span>
        <span className="pl-2">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>

      <button
        className="lg:flex hidden px-2 sm:px-4 py-1 bg-slate-100 rounded-md lg:rounded-xl text-xs lg:text-base"
        onClick={showModal}
      >
        <span>
          {product.colors[0].color}, {product.sizes[0].size}
        </span>
        <span className="pl-2">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>


      <Modal
        title={
          <div className="text-center font-semibold text-2xl pb-5">
            Cập nhật sản phẩm
          </div>
        }
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"70%"}
        styles={{ body: { maxHeight: "60vh", overflowY: "auto" } }}

      >
        <div className="flex gap-5">
          <div className="w-2/5">
            <ProductSlider product={product} />
          </div>
          <div className="w-3/5 flex flex-col">
            <div className="py-2">
              <div className="line-clamp-1 text-xl font-medium text-[#1c2430] pb-1">
                {product.name}
              </div>
              <div className="flex gap-3">
                <span
                  className={`font-medium text-lg ${product.promotion_price != 0
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

            <ProductColor
              product={product}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />

            <ProductSize
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />

            <div className="py-3">
              <div className="font-medium pb-2">Số lượng:</div>
              <div className="flex gap-4">
                <div className="w-1/4">
                  <NumberSpinner
                    count={countProduct}
                    setCount={setCountProduct}
                  />
                </div>
              </div>
            </div>
            <button className="border text-lg font-semibold my-auto w-full h-12 rounded-xl bg-[#FCAF17] hover:bg-[#fdc75d]">
              Cập nhật
            </button>
          </div>
        </div>
      </Modal>


      <Drawer
        title={
          <div className="text-center font-semibold text-lg md:text-2xl">
            Cập nhật sản phẩm
          </div>
        }
        placement='bottom'
        height='92%'
        onClose={handleCancelDrawer}
        open={isDrawerOpen}
      >
        <div>
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="w-full lg:w-2/5">
              <ProductSlider product={product} />
            </div>
            <div className="w-full lg:w-3/5 flex flex-col">
              <div className="py-2">
                <div className="line-clamp-1 text-lg md:text-xl font-medium text-[#1c2430] pb-1">
                  {product.name}
                </div>
                <div className="flex gap-3">
                  <span
                    className={`font-medium text-base md:text-lg ${product.promotion_price != 0
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
                    <span className="font-medium text-base md:text-lg text-[#9fb0c7] line-through">
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

              <ProductColor
                product={product}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />

              <ProductSize
                product={product}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />

              <div className="py-3">
                <div className="font-medium pb-2">Số lượng:</div>
                <div className="flex gap-4">
                  <div className="w-1/4">
                    <NumberSpinner
                      count={countProduct}
                      setCount={setCountProduct}
                    />
                  </div>
                </div>
              </div>
              <button className="border text-base md:text-lg font-semibold my-auto w-full h-12 rounded-xl bg-[#FCAF17] hover:bg-[#fdc75d]">
                Cập nhật
              </button>
            </div>
          </div>
        </div>

      </Drawer>

    </>
  );
};

export default ModalProduct;
