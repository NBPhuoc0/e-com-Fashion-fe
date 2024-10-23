"use Client";
import { CollectionItems } from "@/dummy-data/collection.data";
import { Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({
  isVisible,
  closeSidebar,
}: {
  isVisible: boolean;
  closeSidebar: any;
}) {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    if (openCategory === id) {
      setOpenCategory(null);
    } else {
      setOpenCategory(id);
    }
  };

  return (
    <div className={`absolute top-0 left-0 ${isVisible ? "" : "hidden"}`}>
      <Drawer
        placement="left"
        open={isVisible}
        closable={false}
        onClose={() => {
          closeSidebar(false);
        }}
      >
        <div className="flex flex-col">
          <section className="drawer__header flex justify-end">
            <button
              onClick={() => {
                closeSidebar(false);
              }}
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </section>

          <section className="drawer__body">
            <div className="flex flex-col text-base">
              {CollectionItems.map((item, index) => {
                return (
                  <div key={item.id}>
                    <Link
                      href={"#"}
                      className="flex items-center justify-between text-black hover:text-black py-3"
                    >
                      <div className="font-medium">{item.category}</div>
                      {item.product && (
                        <button onClick={() => toggleCategory(item.id)}>
                          <i
                            className={`fa-solid fa-angle-down transition-all duration-300 ${
                              openCategory === item.id ? "rotate-180" : ""
                            }`}
                          ></i>
                        </button>
                      )}
                    </Link>
                    {openCategory === item.id && (
                      <div className={`flex flex-col`}>
                        {item.product &&
                          item.product.map((prod, prodIndex) => {
                            return (
                              <Link
                                href={"#"}
                                key={prodIndex}
                                className="text-black hover:text-black pl-3 py-1"
                              >
                                {prod.title}
                              </Link>
                            );
                          })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="line w-full h-[1px] bg-gray-300 my-5 md:hidden"></div>

            <div className="md:hidden">
              <Link
                onClick={() => closeSidebar(false)}
                href={"/auth/signin"}
                className="text-black hover:text-black text-base flex items-center gap-5"
              >
                <i className="fa-regular fa-circle-user text-2xl text-gray-500"></i>
                <div>Đăng nhập</div>
              </Link>
            </div>
          </section>
        </div>
      </Drawer>
    </div>
  );
}
