'use client'

import Address from '@/components/account/Address';
import ForgotPassword from '@/components/account/ForgotPassword';
import OrderTracking from '@/components/account/OrderTracking';
import Profile from '@/components/account/Profile';
import { Tabs } from 'antd';
import React, { useState } from 'react'

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
export default function Account() {
    const [tabPosition, setTabPosition] = useState<TabPosition>('left');
    return (
        <div className='sectionContainer'>
            <div>
                <Tabs
                    defaultActiveKey="1"
                    centered
                    tabPosition={tabPosition}
                    items={
                        [
                            {
                                label: `Hồ sơ cá nhân`,
                                key: "1",
                                children:
                                    <div className='grid grid-cols-2 gap-10 mb-5 p-5 bg-[#f2f5f8]'>
                                        <div>
                                            <h2 className="text-3xl font-bold mb-6 text-center">Thông tin cá nhân</h2>
                                            <Profile />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold mb-6 text-center">Đổi mật khẩu</h2>
                                            <ForgotPassword />
                                        </div>
                                    </div>,
                            },
                            {
                                label: `Địa chỉ nhận hàng`,
                                key: "2",
                                children:
                                    <div className='p-5 bg-[#f2f5f8]'>
                                        <Address />
                                    </div>,
                            },
                            {
                                label: `Đơn hàng của tôi`,
                                key: "3",
                                children:
                                    <div className='p-5 bg-[#f2f5f8]'>
                                        <h2 className="text-2xl font-bold mb-6 text-start">Đơn hàng của tôi</h2>
                                        <OrderTracking />
                                    </div>,
                            }
                        ]
                    }
                />
            </div>
        </div>
    )
}
