"use client";
import Link from "next/link";
import { CollectionItems } from "@/dummy-data/collection.data";
import MegaMenu from "../mega-menu/MegaMenu";
import { Badge } from "antd";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

export default function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <header className="w-full md:mb-5 mb-2 sticky top-0 left-0 right-0 border-b border-gray-100 bg-white z-30">
      <nav className="sectionContainer header__nav flex justify-between items-center py-3">
        <div className="header__nav--item left flex items-center gap-10">
          <div className="flex items-center gap-5">
            <div
              onClick={() => {
                setIsSidebarVisible(!isSidebarVisible);
              }}
              className="button-sidebar-menu xl-1320:hidden flex flex-col gap-1 cursor-pointer"
            >
              <div className="w-6 h-[2px] bg-gray-800"></div>
              <div className="w-6 h-[2px] bg-gray-800"></div>
              <div className="w-6 h-[2px] bg-gray-800"></div>
            </div>

            <Link href={"/"} className="md:inline hidden">
              <span className="text-[#2a2a86] font-bold text-3xl">F</span>
              <span className="text-[#fcaf17] font-bold text-3xl">Store</span>
            </Link>
          </div>

          <div className="nav__collection xl-1320:flex hidden items-center gap-5 text-base leading-[21px]">
            {CollectionItems.map((item, index) => {
              return (
                <Link key={index} href={"#"} className="group">
                  {item.category}
                  {item.product && <MegaMenu product={item.product} />}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="header__nav--item middle md:hidden">
          <Link href={"/"}>
            <span className="text-[#2a2a86] font-bold text-3xl">F</span>
            <span className="text-[#fcaf17] font-bold text-3xl">Store</span>
          </Link>
        </div>

        <div className="header__nav--item right flex items-center md:gap-5 gap-3">
          <button className="md:hidden flex items-center justify-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <div className="md:flex hidden search-box items-center p-0 px-5 border border-gray-300 rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              className="border-none outline-none focus:ring-0 bg-gray-100 md:max-w-56 max-w-32"
              placeholder="search"
            />
          </div>
          <Link href={"/cart"}>
            <button className="cart hover:text-[#fcaf17] transition-all duration-200">
              <Badge count={5}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </Badge>
            </button>
          </Link>

          <Link
            href={"/auth/signin"}
            className="md:inline hidden auth border-gray-300 border p-1 px-5 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 rounded-full"
          >
            Đăng nhập
          </Link>
        </div>
      </nav>

      <Sidebar
        isVisible={isSidebarVisible}
        closeSidebar={setIsSidebarVisible}
      />
    </header>
  );
}
