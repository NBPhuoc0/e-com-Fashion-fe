"use client";
import PromotionDrawer from "@/components/promotion/PromotionDrawer";
import { DeliveryMethod, PaymentMethod } from "@/utils/enum";
import { Radio, RadioChangeEvent } from "antd";
import { useState } from "react";

export default function Checkout() {
  const [deliveryMethod, setDeliveryMethod] = useState(DeliveryMethod.AT_HOME);
  const [paymentMethodSelected, setPaymentMethod] = useState(PaymentMethod.COD);
  const [isVisiblePaymentSelector, setVisiblePaymentSelector] = useState(false);
  const [isVisiblePromotion, setIsVisiblePromotion] = useState(false);

  const price: number = 168000;
  const paymentMethod = [
    {
      image: "/assets/images/dollar-bill.png",
      type: PaymentMethod.COD,
      title: "Thanh toán khi nhận hàng",
    },
    {
      image: "https://s3-sgn09.fptcloud.com/ict-payment-icon/payment/vnpay.png",
      type: PaymentMethod.VNPAY,
      title: "Thanh toán quan VNPay",
    },
  ];

  const closePromotionDrawer = () => {
    setIsVisiblePromotion(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setDeliveryMethod(e.target.value);
  };

  return (
    <section className="bg-[#f3f4f6] -mt-5 py-5">
      <div className="sectionContainer">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <section className="p-4 bg-white rounded-xl">
              <h3 className="font-semibold text-base mb-5">
                Sản phẩm trong đơn hàng (3)
              </h3>

              <div className="list-of-products">
                {[1, 2, 3].map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="product-item flex justify-between">
                        <div className="flex gap-5">
                          <div className="min-w-32 w-32 p-2 border border-gray-200 rounded-lg">
                            <img
                              src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-thu-dong-nu-ATN7026-XCV%20(1).jpg"
                              alt="product"
                              className="w-full h-auto object-cover rounded-xl"
                            />
                          </div>

                          <div className="flex flex-col justify-between">
                            <div>
                              <h3 className="mb-2 line-clamp-1 font-medium">
                                Áo Thu Đông Nữ Giữ Nhiệt Cổ 3cm
                              </h3>
                              <span className="block w-fit p-1 px-2 rounded mb-1 bg-gray-100 text-xs font-light">
                                Số lượng: 1
                              </span>
                              <span className="block w-fit p-1 px-2 rounded mb-1 bg-gray-100 text-xs font-light">
                                Màu: Xanh
                              </span>
                              <span className="block w-fit p-1 px-2 rounded bg-gray-100 text-xs font-light">
                                Size: M
                              </span>
                            </div>

                            <div className="sm:hidden block">
                              <span className="text-red-500 font-semibold">
                                {price.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="sm:block hidden">
                          <span className="text-red-500 font-semibold">
                            {price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`line w-full h-[1px] bg-gray-200 my-5 ${
                          index == 2 ? "hidden" : ""
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="p-4 bg-white rounded-xl">
              <h3 className="font-semibold text-base mb-5">Người nhận hàng</h3>
              <div className="mt-5 flex justify-between p-4 rounded-lg border">
                <div>
                  <span className="block text-sm font-semibold !line-clamp-1">
                    Trinh Hoang Phuc
                  </span>
                  <span className="block text-sm">0987654321</span>
                </div>

                <button className="text-blue-700 min-w-16">Thay đổi</button>
              </div>
            </section>

            <section className="p-4 bg-white rounded-xl">
              <h3 className="font-semibold text-base mb-5">
                Hình thức nhận hàng
              </h3>
              <Radio.Group onChange={onChange} value={deliveryMethod}>
                <Radio value={DeliveryMethod.AT_HOME}>Giao hàng tận nơi</Radio>
                <Radio value={DeliveryMethod.AT_STORE}>Nhận tại cửa hàng</Radio>
              </Radio.Group>

              {deliveryMethod == DeliveryMethod.AT_HOME && (
                <div className="mt-5 flex justify-between p-4 rounded-lg border">
                  <div>
                    <span className="block text-sm font-semibold text-gray-600">
                      Giao tới
                    </span>
                    <span className="block text-sm font-semibold !line-clamp-1">
                      Xã Bình Chánh, Huyện Châu Phú, Tỉnh An Giang
                    </span>
                    <span className="block text-xs !line-clamp-1">
                      Đường Nam Cây Dương, số nhà 222, tổ 9, ấp Bình Lợi
                    </span>
                  </div>

                  <button className="text-blue-700 h-fit min-w-16">
                    Thay đổi
                  </button>
                </div>
              )}
            </section>

            <section className="p-4 bg-white rounded-xl">
              <h3 className="font-semibold text-base mb-5">
                Phương thức thanh toán
              </h3>

              <div className="relative">
                <div
                  onClick={() =>
                    setVisiblePaymentSelector(!isVisiblePaymentSelector)
                  }
                  className="flex items-center gap-5 hover:bg-gray-100 border border-gray-200 transition-all duration-300 rounded-lg p-5 text-sm cursor-pointer"
                >
                  <img
                    src={
                      paymentMethod.find(
                        (item) => item.type == paymentMethodSelected
                      )?.image
                    }
                    className="w-10 h-10"
                  />
                  <div>
                    {
                      paymentMethod.find(
                        (item) => item.type == paymentMethodSelected
                      )?.title
                    }
                  </div>
                </div>

                {isVisiblePaymentSelector && (
                  <>
                    <div
                      onClick={() => setVisiblePaymentSelector(false)}
                      className="fixed top-0 left-0 right-0 bottom-0 bg-transparent z-50"
                    ></div>
                    <div className="payment-method__selector cursor-pointer bg-white rounded-bl-lg rounded-br-lg overflow-hidden absolute translate-y-1 top-full left-0 right-0 z-[60]">
                      {paymentMethod.map((method) => {
                        return (
                          <div
                            onClick={() => {
                              setPaymentMethod(method.type);
                              setVisiblePaymentSelector(false);
                            }}
                            key={method.type}
                            className="flex items-center hover:bg-gray-100 transition-all duration-300 p-4 gap-5"
                          >
                            <img src={method.image} className="w-10 h-10" />
                            <div>{method.title}</div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>

          <div className="lg:w-96 w-full bg-white rounded-xl p-4 h-fit sticky top-20">
            <button
              onClick={() => setIsVisiblePromotion(!isVisiblePromotion)}
              className="w-full flex justify-between items-center bg-[#f3f4f6] p-3 rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-ticket text-[#dc2626]"></i>
                <div className="text-sm line-clamp-1">
                  Chọn hoặc nhập mã ưu đãi
                </div>
              </div>
              <i className="fa-solid fa-angle-right text-gray-400"></i>
            </button>

            <h3 className="font-semibold text-base !line-clamp-1 my-5">
              Thông tin đơn hàng
            </h3>

            <div className="flex items-center justify-between">
              <p className="h-fit text-xs text-gray-600">Tổng tiền</p>
              <div className="font-semibold">
                {price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>

            <div className="block h-[1px] bg-gray-300 my-2"></div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="h-fit text-xs text-gray-600">Tổng khuyến mãi</p>
                <div className="font-semibold">
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="h-fit text-xs text-gray-600">Phí vận chuyển</p>
                <p className="h-fit text-xs text-gray-600">Miễn phí</p>
              </div>
            </div>

            <div className="block border-gray-300 my-2 after:content-[''] w-full border-b h-0 border-dashed"></div>

            <div className="flex items-center justify-between">
              <p className="h-fit text-xs text-gray-600">Cần thanh toán</p>
              <div className="font-semibold text-red-500">
                {price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </div>
            </div>

            <button className="block w-full mt-5 p-4 font-semibold bg-[#fcaf17] text-white rounded-lg">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>

      <PromotionDrawer
        isVisible={isVisiblePromotion}
        onClose={closePromotionDrawer}
      />
    </section>
  );
}
