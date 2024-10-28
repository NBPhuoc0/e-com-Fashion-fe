import { faBuilding, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import React from 'react'

export default function AdressItem({ infoAddress }: {
    infoAddress: {
        name: string,
        phoneNumber: string,
        address: string,
        ward: string,
        district: string,
        province: string,
        typeAddress: number,
        defaultAddress: boolean
    }
}) {
    return (
        <div className='p-4 bg-white flex items-center justify-between'>
            <div className='flex items-center space-x-5'>
                <div className={`${infoAddress.defaultAddress ? 'bg-red-100' : 'bg-slate-100'} h-12 w-12 rounded-full flex justify-center items-center`}>
                    {infoAddress.typeAddress === 1 ?
                        <FontAwesomeIcon className={`${infoAddress.defaultAddress ? 'text-red-600' : ''} h-5 w-5`} icon={faBuilding} />
                        : <FontAwesomeIcon className={`${infoAddress.defaultAddress ? 'text-red-600' : ''} h-5 w-5`} icon={faHouse} />}
                </div>
                <div>
                    <div className='flex items-center space-x-3'>
                        <div className='flex'>
                            <p className='font-semibold'>{infoAddress.name}</p>
                            <p className='border-l mx-2 border-l-[#bdbdbd]'></p>
                            <p className='text-[#757575]'>{infoAddress.phoneNumber}</p>
                        </div>
                        {infoAddress.defaultAddress &&
                            <div className='border border-red-600 rounded-full bg-red-100 text-red-600 px-4 py-0.5'>
                                Mặc định
                            </div>
                        }
                    </div>
                    <div className='text-[#757575]'>{infoAddress.address}</div>
                    <div className='text-[#757575]'>{infoAddress.ward}, {infoAddress.district}, {infoAddress.province}</div>
                </div>
            </div>
            <div>
                <div className='text-end'>
                    <Button color="primary" variant="text">Cập nhật</Button>
                    {!infoAddress.defaultAddress && <Button color="danger" variant="text">Xóa</Button>}
                </div>
                {!infoAddress.defaultAddress && <Button>Thiết lập mặc định</Button>}
            </div>
        </div >
    )
}
