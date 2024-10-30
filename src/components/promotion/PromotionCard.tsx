import { useState } from "react";

export default function PromotionCard() {
  const [isChecked, setChecked] = useState(false);
  const [isChecking, setChecking] = useState(false);
  const handleCheckbox = () => {
    if (!isChecking) {
      setChecking(true);
      setTimeout(() => {
        setChecking(false);
        setChecked(!isChecked);
      }, 300);
    }
  };

  return (
    <div onClick={() => handleCheckbox()} className="flex cursor-pointer">
      <div className="flex-1 p-2 bg-white rounded-lg rounded-tr-none rounded-br-none flex gap-2">
        <div className="h-11 w-11 min-w-11 rounded-full bg-[#fee2e2] flex">
          <img
            src="assets/images/icon-discount.svg"
            alt=""
            className="m-auto"
          />
        </div>

        <div>
          <span className="line-clamp-1 text-xs leading-5 font-medium">
            Giảm ngay 200,000đ áp dụng đến 31/10 (Không kèm CTKM thu hộ)
          </span>
          <span className="line-clamp-1 text-[10px] leading-5 text-gray-400">
            Áp dụng cho Súng massage cầm tay Kachi MK-340 (không IMEI)
          </span>
        </div>
      </div>

      <div className="relative w-12 h-full my-auto flex bg-white rounded-tr-lg rounded-br-lg border-0 border-l border-dashed border-gray-200">
        {isChecked ? (
          <i
            className={`fa-solid fa-circle-check m-auto text-red-600 text-2xl transition-all duration-300 ${
              isChecking ? "rotate-[360deg]" : ""
            }`}
          ></i>
        ) : (
          <button className="w-6 h-6 bg-red-200 flex items-center  justify-center m-auto rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={`size-5 text-red-700 duration-300 transition-all ${
                isChecking ? "rotate-180" : ""
              }`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        )}

        <div className="absolute left-[-6px] top-[-6px] h-2.5 w-2.5 rounded-full bg-gray-100"></div>
        <div className="absolute left-[-6px] bottom-[-6px] h-2.5 w-2.5 rounded-full bg-gray-100"></div>

        <div className="absolute right-[-3px] top-2 grid">
          <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-gray-100"></div>
          <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-gray-100"></div>
          <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-gray-100"></div>
          <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-gray-100"></div>
          <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-gray-100"></div>
          <div className="mb-[1px] h-1.5 w-1.5 rounded-full bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
