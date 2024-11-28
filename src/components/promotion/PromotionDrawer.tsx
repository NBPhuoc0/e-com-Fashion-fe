"use client";
import { useEffect, useState } from "react";
import PromotionCard from "./PromotionCard";
import "./PromotionDrawer.css";
export default function PromotionDrawer({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [isEnterCode, setIsEnterCode] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      setIsEnterCode(false);
    };
  }, [isVisible]);

  return (
    <div>
      <div
        onClick={onClose}
        className={`
          ${
            isVisible
              ? "fixed top-0 h-full w-full z-30 cursor-pointer backdrop-blur-[6px] bg-[hsla(0,0%,100%,.808)] opacity-100 sm:block hidden"
              : "opacity-0"
          }`}
      ></div>
      <div
        className={`promotion-drawer__container sm:w-[600px] w-full fixed top-0 right-0 bottom-0 bg-white z-40 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
          isVisible
            ? "translate-y-0 translate-x-0"
            : "sm:translate-x-full sm:translate-y-0 translate-x-0 translate-y-full"
        }`}
      >
        <div className="promotion-drawer__header p-4 py-2 border-0 border-b border-gray-200">
          <div className="flex items-center gap-5">
            <button
              onClick={onClose}
              className="w-10 h-10 text-center hover:bg-gray-100 transition-all rounded-md"
            >
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
            <span className="text-xl leading-6">Khuyến mãi và ưu đãi</span>
          </div>
        </div>

        {isEnterCode && (
          <>
            <div className="flex-1 h-full px-4 py-3">
              <div
                onClick={() => setIsEnterCode(false)}
                className="text-sm text-blue-700 cursor-pointer"
              >
                <i className="inline mr-2 fa-solid fa-chevron-left"></i>
                <div className="inline text-sm">Trở về</div>
              </div>

              <form action="" className="mt-4">
                <div className="flex max-w-full flex-col gap-3 py-2">
                  <div className="text-sm">
                    <label>
                      Mã giảm giá<span className="text-red-500"> *</span>
                    </label>
                    <div className="mt-2">
                      <input
                        className="w-full border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 focus:border-gray-400 focus:ring-0"
                        placeholder="Nhập mã giảm giá"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="p-4 bg-white">
              <button className="w-full p-3 flex-1 bg-red-600 text-white rounded-lg">
                <span>Xác nhận</span>
              </button>
            </div>
          </>
        )}

        {!isEnterCode && (
          <div className="promotion-drawer__content bg-gray-100 flex-1 overflow-y-auto">
            <div className="px-4 py-3 grid gap-5">
              <div className="grid gap-2">
                <span className="font-medium text-sm">Mã giảm giá</span>
                <div className="flex gap-2 items-center p-2 px-3 bg-white rounded-md cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 -rotate-45"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                    />
                  </svg>

                  <span
                    onClick={() => setIsEnterCode(true)}
                    className="flex-1 font-normal text-sm"
                  >
                    Nhập mã giảm giá tại đây nhé
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid gap-2">
                <span className="font-medium text-sm">Khuyến mãi</span>
                <div className="grid gap-2">
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  ].map((item, index) => {
                    return <PromotionCard key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {!isEnterCode && (
          <div className="promotion-drawer__footer">
            <div className="flex flex-col justify-end">
              <div className="flex h-11 justify-between border-b px-4 py-3">
                <span className="flex items-center text-sm">
                  Đã chọn 0 khuyến mãi và ưu đãi
                </span>
              </div>
              <div className="flex h-[70px] gap-2 px-4 py-3">
                <div className="h-[46px] w-1/2">
                  <span className="text-xl text-red-600">1.533.000&nbsp;₫</span>
                  <div className="flex h-[18px] gap-0.5">
                    <span className="text-xs">Tiết kiệm</span>
                    <span className="text-xs text-red-600">334.000&nbsp;₫</span>
                  </div>
                </div>
                <button className="w-[145px] flex-1 bg-red-600 text-white rounded-lg">
                  <span>Xác nhận</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
