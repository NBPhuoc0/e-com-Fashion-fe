"use client";
import { ListAddress } from "@/dummy-data/address.data";
import { Address } from "@/models/address/address.model";
import { useEffect, useState } from "react";
import AddressItem from "./AddressItem";
import FormAddress from "./FormAddress";

export default function AddAddressDrawer({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [isOpenFormAddress, setIsOpenFormAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>(
    new Address()
  );

  useEffect(() => {
    setSelectedAddress(ListAddress[0]);

    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      setIsOpenFormAddress(false);
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
        className={`address-drawer__container sm:w-[600px] w-full fixed top-0 right-0 bottom-0 bg-white z-40 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
          isVisible
            ? "translate-y-0 translate-x-0"
            : "sm:translate-x-full sm:translate-y-0 translate-x-0 translate-y-full"
        }`}
      >
        <section className="address-drawer__header p-4 py-2 border-0 border-b border-gray-200">
          <div className="flex items-center gap-5">
            <button
              onClick={onClose}
              className="w-10 h-10 text-center hover:bg-gray-100 transition-all rounded-md"
            >
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
            <span className="text-xl leading-6">Chọn địa chỉ</span>
          </div>
        </section>

        <section className="flex-1 overflow-hidden">
          {!isOpenFormAddress && (
            <div className="flex flex-col">
              {ListAddress.map((item, index) => (
                <div key={index}>
                  <AddressItem
                    address={item}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                  />
                  <div
                    className={`w-full h-[1px] bg-gray-200 ${
                      index == ListAddress.length - 1 ? "hidden" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          )}

          {isOpenFormAddress && (
            <FormAddress setIsOpenForm={setIsOpenFormAddress} />
          )}
        </section>

        {!isOpenFormAddress && (
          <section
            className={`address-drawer__footer p-4 ${
              isOpenFormAddress ? "pb-4" : "pb-0"
            }`}
          >
            <button className={`w-full p-3  bg-primary text-white rounded-lg`}>
              <span>Xác nhận</span>
            </button>

            <button
              onClick={() => setIsOpenFormAddress(!isOpenFormAddress)}
              className="w-full p-3  text-primary bg-white rounded-lg"
            >
              <span>Thêm địa chỉ</span>
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
