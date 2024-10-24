import CartInfo from '@/components/cart/CartInfo'
import CartItem from '@/components/cart/CartItem'
import { jacketProductsHome } from '@/dummy-data/product.data'
import React from 'react'

export default function Cart() {
    return (
        <div className='bg-[#f2f5f8]'>
            <div className='sectionContainer'>
                <div className='flex flex-col lg:grid grid-cols-24 gap-3 pb-4'>
                    <h2 className='col-span-22 col-start-2 mt-3 py-4 px-8 text-2xl font-semibold bg-white'>Giỏ hàng</h2>
                    <div className='col-span-14 col-start-2'>
                        <div className='flex flex-col gap-1'>
                            {jacketProductsHome.map((item) => (
                                <CartItem product={item} />
                            ))}
                        </div>
                    </div>
                    <div className='col-span-8'>
                        <div className='bg-white sticky top-20'>
                            <div className='p-6'>
                                <CartInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
