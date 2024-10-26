import React from 'react'
import PaymentMethod from './PaymentMethod'

export default function CartInfo() {
    return (
        <div>
            <h2 className='text-base lg:text-xl font-semibold pb-4'>Chi tiết đơn hàng</h2>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs lg:text-base font-normal">Tổng giá trị sản phẩm</span>
                    <span className="text-gray-500 text-xs lg:text-base font-normal!text-gray-100">1.097.000 đ</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs lg:text-base font-normal">Vận chuyển</span>
                    <span className="text-gray-500 text-xs lg:text-base font-normal">20.000 đ</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs lg:text-base font-normal">Giảm giá vận chuyển</span>
                    <span className="text-red-500 text-xs lg:text-base font-normal">- 20.000 đ</span>
                </div>
            </div>

            <div className='border border-[#eceff4] my-4'></div>
            <div className="flex items-center justify-between">
                <span className="text-base lg:text-xl font-medium">Tổng thanh toán</span>
                <span className="text-base lg:text-xl font-medium">1.097.000 đ</span>
            </div>

            <span className="flex text-xs lg:text-base justify-end text-red-500 font-normal text-right">Bạn đã tiết kiệm được 120.000 đ</span>

            <button className="bg-[#fcaf17] border-[#ca8c12] w-full rounded-full mt-7 h-10 font-semibold">
                <span className="line-clamp-1 text-sm lg:text-base">Mua hàng (3)</span>
            </button>

            <PaymentMethod />
        </div>
    )
}
