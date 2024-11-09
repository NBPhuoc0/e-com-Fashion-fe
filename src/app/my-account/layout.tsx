"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 md:-mt-5 -mt-2">
      <div className="sectionContainer py-10">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="flex flex-col lg:min-w-72 lg:w-72 h-fit w-full bg-white rounded-lg py-2 overflow-hidden">
            <Link
              href={"/my-account"}
              className={`flex items-center gap-3 p-2 px-3 hover:text-orange-400 bg-gradient-to-r hover:from-yellow-50 duration-200 transition-all hover:pl-4 border-0 border-l-2 hover:border-primary ${
                pathname === "/my-account"
                  ? "text-orange-400 from-yellow-50 border-primary"
                  : "border-transparent"
              }`}
            >
              {/* <i className="fa-solid fa-circle-user"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <div className="text-sm">Hồ sơ cá nhân</div>
            </Link>

            <Link
              href={"/my-account/order-tracking"}
              className={`flex items-center gap-3 p-2 px-3 hover:text-orange-400 bg-gradient-to-r hover:from-yellow-50 duration-200 transition-all hover:pl-4 border-0 border-l-2 hover:border-primary ${
                pathname === "/my-account/order-tracking"
                  ? "text-orange-400 from-yellow-50 border-primary"
                  : "border-transparent"
              }`}
            >
              {/* <i className="fa-solid fa-box"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <div className="text-sm">Đơn hàng của tôi</div>
            </Link>

            <Link
              href={"/my-account/address-management"}
              className={`flex items-center gap-3 p-2 px-3 hover:text-orange-400 bg-gradient-to-r hover:from-yellow-50 duration-200 transition-all hover:pl-4 border-0 border-l-2 hover:border-primary ${
                pathname === "/my-account/address-management"
                  ? "text-orange-400 from-yellow-50 border-primary"
                  : "border-transparent"
              }`}
            >
              {/* <i className="fa-solid fa-compass"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <div className="text-sm">Quản lý địa chỉ nhận</div>
            </Link>

            <button className="w-fit flex items-center gap-3 p-2 px-3 hover:text-orange-400 bg-gradient-to-r hover:from-yellow-50 duration-200 transition-all hover:pl-4 border-0 border-l-2 hover:border-primary border-transparent">
              {/* <i className="fa-solid fa-arrow-right-from-bracket"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                />
              </svg>

              <div className="text-sm">Logout</div>
            </button>
          </div>

          <div className="flex-1 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
