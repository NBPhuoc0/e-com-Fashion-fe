"use client"

import React, { useEffect, useState } from 'react';
import { Button, Modal, Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRuler } from '@fortawesome/free-solid-svg-icons';
import './SizeGuide.css'
import sizeGuide_nam from '../../public/assets/images/nam_m0g3c0nprobhtwlagl.png'
import sizeGuide_nu from '../../public/assets/images/nudesktop_m0g7qymbf85vldo7av9.png'
import sizeGuide_treem from '../../public/assets/images/treem_m0g2rdob3827pgguj68.png'
import sizeGuide_phukien from '../../public/assets/images/phukien_m0g2tknquvm0uavodt.png'
import Image from 'next/image';
const SizeGuide: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const infos = [
        {
            id: 1,
            name: 'Nam',
            image: sizeGuide_nam
        },
        {
            id: 2,
            name: 'Nữ',
            image: sizeGuide_nu
        },
        {
            id: 3,
            name: 'Trẻ em',
            image: sizeGuide_treem
        },
        {
            id: 4,
            name: 'Phụ kiện',
            image: sizeGuide_phukien
        },
    ]
    const [isCentered, setIsCentered] = useState(false);
    // Theo dõi kích thước cửa sổ
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsCentered(true); // Căn giữa khi màn hình lớn hơn 768px
            } else {
                setIsCentered(false); // Không căn giữa khi màn hình nhỏ hơn 768px
            }
        };

        // Gọi hàm ngay khi component render lần đầu
        handleResize();

        // Gắn sự kiện lắng nghe thay đổi kích thước cửa sổ
        window.addEventListener('resize', handleResize);

        // Hủy sự kiện khi component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <button className='text-blue-500' onClick={showLoading}>
                <FontAwesomeIcon icon={faRuler} /> Hướng dẫn chọn size
            </button>
            <Modal
                title={<p>Bảng kích thước</p>}
                style={{ top: 30 }}
                footer={
                    <Button type="primary" onClick={showLoading}>
                        Reload
                    </Button>
                }
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
                width={890}
            >
                <div className='tabSizeGuide'>
                    <Tabs
                        defaultActiveKey="1"
                        centered={isCentered}
                        items={infos.map((item, i) => {
                            const id = String(i + 1);
                            return {
                                label: item.name,
                                key: id,
                                children: (
                                    <div className='h-[68vh] modal-body overflow-y-auto'>
                                        <Image
                                            src={item.image}
                                            alt="Picture of the author"
                                        // width={500} automatically provided
                                        // height={500} automatically provided
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                        />
                                    </div>
                                )
                            };
                        })}
                    />
                </div>
            </Modal>
        </>
    );
};

export default SizeGuide;