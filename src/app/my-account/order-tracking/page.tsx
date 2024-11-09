"use client";
import OrderCard from "@/components/order/OrderCard";
import { OrderStatus } from "@/utils/enum";
import { useEffect, useRef, useState } from "react";

export default function OrderTracking() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const OrderType: { title: string; type: OrderStatus }[] = [
    {
      title: "Tất cả",
      type: OrderStatus.ALL,
    },
    {
      title: "Đang xử lý",
      type: OrderStatus.PROCESSING,
    },
    {
      title: "Đang giao",
      type: OrderStatus.DELIVERING,
    },
    {
      title: "Hoàn tất",
      type: OrderStatus.COMPLETED,
    },
    {
      title: "Đã hủy",
      type: OrderStatus.CANCELLED,
    },
    {
      title: "Trả hàng",
      type: OrderStatus.RETURN,
    },
  ];

  const handleTabs = () => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setLineStyle({ left: offsetLeft, width: offsetWidth });
    }
  };

  const fetchOrders = (type: OrderStatus): void => {
    console.log(type);
  };

  const handleResize = (): void => {
    handleTabs();
  };

  useEffect(() => {
    fetchOrders(OrderType[activeTab].type);
    handleTabs();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  return (
    <div>
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-start">Đơn hàng của tôi</h2>

        <div className="bg-white px-4 w-1/2 flex items-center rounded-3xl">
          <input
            type="text"
            placeholder="Tìm theo tên sản phẩm"
            className="border-none outline-none focus:ring-0 flex-1 placeholder:text-gray-400 placeholder:text-sm"
          />
          <button>
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </button>
        </div>
      </section>

      <section>
        <div className="order-tracking__tabs relative overflow-x-auto scrollbar-none flex items-center justify-around text-gray-400 bg-white cursor-pointer text-center rounded-t-lg">
          {OrderType.map((item, index) => (
            <div
              key={index}
              className={`tab-button w-full py-3 min-w-36 transition-all duration-300 hover:text-orange-400 border-0 border-b-[2px] border-transparent hover:border-orange-400 ${
                activeTab === index ? "text-orange-400" : ""
              }`}
              onClick={() => {
                setActiveTab(index);
              }}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
            >
              {item.title}
            </div>
          ))}
          <div
            className="line absolute bottom-0 bg-orange-400 h-[2px] transition-all duration-300"
            style={{ left: lineStyle.left, width: lineStyle.width }}
          ></div>
        </div>

        <div className="mt-2">
          {activeTab == 0 &&
            [1, 2, 3].map((item, index) => <OrderCard key={index} />)}

          {activeTab !== 0 && (
            <div className="flex flex-col gap-2 items-center p-5">
              <img src="/assets/images/empty_state.png" alt="" />
              <h6 className="font-medium">Bạn chưa có đơn hàng nào</h6>
              <span className="text-sm">
                Cùng khám phá hàng ngàn sản phẩm tại FPT Shop nhé!
              </span>
              <button className="text-white mt-2 bg-primary p-2 px-4 rounded-lg">
                Khám phá ngay
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
