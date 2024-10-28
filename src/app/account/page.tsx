'use client'

import Address from '@/components/account/Address';
import ForgotPassword from '@/components/account/ForgotPassword';
import OrderTracking from '@/components/account/OrderTracking';
import Profile from '@/components/account/Profile';
import { faLocationDot, faTruckPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                label: <div className='flex justify-end'><FontAwesomeIcon className='w-5 h-5 pr-2' icon={faUser} /> Hồ sơ cá nhân</div>,
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
                                label: <div className='flex justify-end'><FontAwesomeIcon className='w-5 h-5 pr-2' icon={faTruckPlane} /> Đơn hàng của tôi</div>,
                                key: "3",
                                children:
                                    <div className='p-5 bg-[#f2f5f8]'>
                                        <h2 className="text-2xl font-bold mb-6 text-start">Đơn hàng của tôi</h2>
                                        <OrderTracking />
                                    </div>,
                            },
                            {
                                label: <div className='flex justify-end'><FontAwesomeIcon className='w-5 h-5 pr-2' icon={faLocationDot} /> Địa chỉ nhận hàng</div>,
                                key: "2",
                                children:
                                    <div className='p-5 bg-[#f2f5f8]'>
                                        <Address />
                                    </div>,
                            },
                        ]
                    }
                />
            </div>
        </div>
    )
}
