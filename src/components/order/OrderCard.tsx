import Link from "next/link";

export default function OrderCard() {
  return (
    <div className="mb-2">
      <section className="flex items-center lg:gap-2 gap-1 rounded-t-lg bg-white p-3 px-4 border-0 border-b border-gray-200">
        <h6 className="text-sm font-medium">11/09/2024</h6>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <span className="text-sm">Giao hàng tận nơi</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <span className="text-sm">1 sản phẩm</span>
      </section>

      <section className="p-3 px-4 bg-white border-0 border-b border-gray-200">
        <div className="flex flex-col gap-3">
          {[1, 2].map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-[4px] border border-gray-200 flex">
                  <img
                    src="https://cdn2.fptshop.com.vn/unsafe/64x0/filters:quality(100)/2023_2_27_638131079929674572_HASP-TAINGHE-BLUETOOTH-LIFE-LITE-7.jpg"
                    alt=""
                    className="object-cover w-full h-auto m-auto"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm">
                    Tai nghe Bluetooth SoundPEATS Life Lite
                  </h5>
                  <span className="text-sm text-gray-400">Số lượng: 2</span>
                </div>
              </div>

              <div>500.000đ</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center w-full pt-2">
          <Link
            href={"/my-account/order-history/1"}
            className="text-indigo-600 font-medium text-sm flex items-center gap-2"
          >
            <div>Xem chi tiết</div>
            <i className="fa-solid fa-angle-right"></i>
          </Link>

          <div>
            <span className="mr-1 text-sm text-gray-400">Thành tiền:</span>
            <span className="text-orange-400">500.000đ</span>
          </div>
        </div>
      </section>

      <section className="p-3 px-4 bg-white rounded-b-lg flex justify-between items-center">
        <span className="text-sm text-gray-400">
          Bạn cần hỗ trợ? Liên hệ ngay với chúng tôi.
        </span>
        <button className="text-white text-sm bg-primary rounded-lg p-2 px-4">
          Mua lại
        </button>
      </section>
    </div>
  );
}
