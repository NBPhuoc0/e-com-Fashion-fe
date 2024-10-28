'use client'
import { Tabs } from 'antd';
import React from 'react'
import './OrderTracking.css'
import Image from 'next/image';
import emptyState from '../../../public/assets/images/empty_state.png'

export default function OrderTracking() {
    const onChange = (key: string) => {
        console.log(key);
    };
    return (
        <div className='tabsOrder'>
            <Tabs
                onChange={onChange}
                type="card"
                items={
                    [
                        {
                            label: `Tất cả`,
                            key: "1",
                            children:
                                <>
                                    <div className='flex justify-center'>
                                        <Image
                                            className="overflow-hidden"
                                            src={emptyState}
                                            alt="image"
                                        />
                                    </div>
                                    <span className='flex justify-center font-semibold text-base'>Bạn chưa có đơn hàng nào</span>
                                </>
                        },
                        {
                            label: `Đang xử lý`,
                            key: "2",
                            children: <div className='flex justify-center'>
                                <Image
                                    className="overflow-hidden"
                                    src={emptyState}
                                    alt="image"
                                />
                            </div>
                        },
                        {
                            label: `Đang giao`,
                            key: "3",
                            children: <div className='flex justify-center'>
                                <Image
                                    className="overflow-hidden"
                                    src={emptyState}
                                    alt="image"
                                />
                            </div>
                        },
                        {
                            label: `Hoàn tất`,
                            key: "4",
                            children: <div className='flex justify-center'>
                                <Image
                                    className="overflow-hidden"
                                    src={emptyState}
                                    alt="image"
                                />
                            </div>
                        },
                        {
                            label: `Đã hủy`,
                            key: "5",
                            children: <div className='flex justify-center'>
                                <Image
                                    className="overflow-hidden"
                                    src={emptyState}
                                    alt="image"
                                />
                            </div>
                        },
                        {
                            label: `Trả hàng`,
                            key: "6",
                            children: <div className='flex justify-center'>
                                <Image
                                    className="overflow-hidden"
                                    src={emptyState}
                                    alt="image"
                                />
                            </div>
                        },
                    ]}
            />
        </div>

    )
}
