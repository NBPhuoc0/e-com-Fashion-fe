import { useState } from "react";
import { Rate } from "antd";
export default function ProductReview() {
  const [ratingPoint, setPoint] = useState<number>(5);
  const reviews = [1, 2, 3];

  return (
    <div className="grid gap-3">
      <h1 className="text-3xl font-bold">Khách hàng nói về sản phẩm</h1>

      {reviews.length == 0 && (
        <section className="w-full flex md:flex-row flex-col md:text-left text-center md:gap-0 gap-2 items-center justify-between bg-[#fffbeb] p-3 px-10 rounded-lg">
          <div className="grid gap-4">
            <h3 className="md:text-xl text-base font-medium">
              Trở thành người đầu tiên đánh giả sản phẩm
            </h3>
            <div>
              <button className="p-2 px-5 bg-red-600 text-white font-medium rounded-lg">
                Đánh giá về sản phẩm
              </button>
            </div>
          </div>
          <img
            src="https://fptshop.com.vn/img/imgStar.png?w=1920&q=100"
            alt=""
          />
        </section>
      )}

      {reviews.length > 0 && (
        <section className="flex sm:flex-row flex-col sm:gap-16 gap-10">
          <div className="grid text-center gap-3">
            <h1 className="text-5xl font-bold">5.0</h1>
            <span className="text-gray-400 text-sm">1 lượt đánh giá</span>
            <Rate disabled defaultValue={2} />
            <button className="p-2 sm:px-5 px-0 sm:min-w-52 bg-red-600 text-white font-medium rounded-lg">
              Đánh giá về sản phẩm
            </button>
          </div>

          <div className="w-full grid gap-3 ">
            {[5, 4, 3, 2, 1].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div>{item}</div>
                  <div>
                    <i className="fa-solid fa-star text-yellow-300 text-sm"></i>
                  </div>
                </div>
                <div className={`w-full h-3 rounded-lg bg-gray-100`}>
                  <div
                    className={`w-full h-3 rounded-lg ${
                      item == 5 ? "bg-red-600" : ""
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="flex sm:flex-row flex-col sm:gap-0 gap-5 sm:mt-0 mt-2 items-center justify-between">
        <div className="text-xl font-medium">{reviews.length} Bình luận</div>
        <div className="flex flex-wrap items-center gap-2">
          {[5, 4, 3, 2, 1].map((item) => (
            <div
              key={item}
              onClick={() => setPoint(item)}
              className={`flex items-center cursor-pointer transition-all duration-200 gap-1 p-1 px-3 border rounded-3xl ${
                ratingPoint === item
                  ? "border-red-600 text-red-600"
                  : "border-gray-300"
              }`}
            >
              <div>{item}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center sm:flex-row flex-col w-full gap-2 mt-5">
        <input
          type="text"
          placeholder="Nhập nội dung bình luận"
          className="flex-1 rounded-lg border-gray-300 focus:border-black focus:ring-0 ring-0 w-full"
        />
        <button className="p-2 px-10 h-full sm:w-auto w-full bg-black rounded-lg text-white font-medium">
          Gửi bình luận
        </button>
      </section>

      {reviews.length === 0 && (
        <section className="mt-8">
          <div className="grid text-center gap-3 text-gray-300">
            <i className="fa-solid fa-cloud text-5xl"></i>
            <span>Chưa có bình luận của khách hàng về bài viết này!</span>
          </div>
        </section>
      )}

      {reviews.length > 0 && (
        <section className="grid gap-10 mt-10">
          {reviews.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300">
                <img
                  src=""
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Trịnh Hoàng Phúc</div>
                  <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                  <div className="text-gray-500 text-md">11-1-2024</div>
                </div>
                <div>
                  <Rate disabled defaultValue={2} />
                </div>
                <div className="text-sm">Sản phẩm dùng tốt</div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
