import Image from 'next/image'
import React, { useState } from 'react'
import emptyAdress from '../../../public/assets/images/empty_address_book.png'
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import AddressItem from './AddressItem';
import AddAddress from './AddAddress';

export default function Adress() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);

    const openAddModal = () => {
        setIsEditMode(false);
        setEditingAddress(null); 
        setIsModalOpen(true);
    };

    const openUpdateModal = (address: any) => {
        setIsEditMode(true);
        setEditingAddress(address);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
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
                <Button type='primary' onClick={openAddModal} icon={<PlusOutlined />} danger>Thêm địa chỉ</Button>
                <AddAddress open={isModalOpen}
                    onClose={closeModal}
                    isEditMode={isEditMode}
                    address={editingAddress} />
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
                        <AddressItem onOpen={() => openUpdateModal(item)} infoAddress={item} />
                    </div>
                ))
            }


        </div>
    )
}
