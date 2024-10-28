import Image from 'next/image'
import React from 'react'
import emptyAdress from '../../../public/assets/images/empty_address_book.png'
import { Button } from 'antd'
import AddressItem from './AddressItem';
import AddAdress from './AddAddress';

export default function Adress() {
    const listAddress = [
        {
            name: 'Văn Bá Trung Thành',
            phoneNumber: '0345046656',
            address: 'Thôn Hà Dục Đông',
            ward: 'Xã Đại Lãnh',
            district: 'Huyện Đại Lộc',
            province: 'Tỉnh Quảng Nam',
            typeAddress: 1,
            defaultAddress: true
        },
        {
            name: 'Trịnh Hoàng Phúc',
            phoneNumber: '0345046656',
            address: '1 Võ Văn Ngân',
            ward: 'Linh Chiểu',
            district: 'Thành phố Thủ Đức',
            province: 'Thành phố Hồ Chí Minh',
            typeAddress: 2,
            defaultAddress: false
        }
    ]
    return (
        <div>

            <div className='flex justify-between'>
                <h2 className="text-2xl font-bold mb-6 text-start">Địa chỉ nhận hàng</h2>
                <AddAdress/>
            </div>
            {listAddress.length === 0
                ? <div className='flex justify-center'>
                    <Image
                        className="overflow-hidden"
                        src={emptyAdress}
                        alt="image"
                    />
                </div> :
                listAddress.map((item, index) => (
                    <div className='my-1' key={index}>
                        <AddressItem infoAddress={item}/>
                    </div>
                ))
            }


        </div>
    )
}
