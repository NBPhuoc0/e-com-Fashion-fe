'use client'

import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Form, Input, Button, DatePicker, Select, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
const { Option } = Select;

const Profile = () => {
    const [imageURL, setImageURL] = useState<string | undefined>(undefined);
    console.log("🚀 ~ Profile ~ imageURL:", imageURL)
    const info = {
        customerName: 'Văn Bá Trung Thành',
        bith: '2002-01-01',
        gender: 'Male',
        phoneNumber: '0345046656',
    }
    const { RangePicker } = DatePicker;

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // const handleFileChange = (e: any) => {
    //     const selectedFile = e.target.files[0];
    //     readAndDisplayFile(selectedFile);
    // };

    // const readAndDisplayFile = (file: File) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setImageURL(reader.result as string);
    //     };
    //     reader.readAsDataURL(file);
    // };
    const handleImageChange = (info: any) => {
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageURL(reader.result as string);
            };
            reader.readAsDataURL(info.file.originFileObj);
        }
    };
    return (
        <div className="p-5 bg-white shadow-md rounded-lg border">
            <Form
                name="profileForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{
                    customerName: info.customerName,
                    bith: dayjs(info.bith, 'YYYY-MM-DD'),
                    gender: info.gender,
                    phoneNumber: info.phoneNumber,
                }}
                layout="vertical"
            >
                <div className="pb-8 mb-2 border-b border-b-slate-400 flex justify-center items-center">
                    <div>
                        <div className="flex justify-center my-4">
                            <img
                                src={imageURL || 'a.png'}
                                alt="Ảnh đại diện"
                                className="md:w-32 md:h-32 lg:h-40 lg:w-40 rounded-full border-2"
                            />
                        </div>

                        <div className="px-4">
                            <Upload
                                name="avatar"
                                showUploadList={false}
                                // beforeUpload={() => false}
                                onChange={handleImageChange}
                            >
                                <Button icon={<UploadOutlined />}>Chọn một tập tin</Button>
                            </Upload>
                        </div>
                    </div>
                </div>
                <Form.Item
                    label="Tên khách hàng"
                    name="customerName"
                >
                    <Input placeholder='Nhập tên khách hàng' type="text" className="w-full" />
                </Form.Item>
                <div className='grid grid-cols-3 gap-5'>
                    <Form.Item
                        label="Ngày sinh"
                        name="bith"
                        className='col-span-2'
                    >
                        <DatePicker placeholder={'Chọn ngày sinh'} className="w-full" />
                    </Form.Item>
                    <Form.Item
                        label="Giới tính"
                        name="gender"
                        className='col-span-1'
                    >
                        <Select placeholder="Chọn giới tính" className="w-full">
                            <Select.Option value="Male">Nam</Select.Option>
                            <Select.Option value="Female">Nữ</Select.Option>
                            <Select.Option value="Other">Khác</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <Form.Item
                    label="Số điện thoại"
                    name="phoneNumber"
                >
                    <Input placeholder='Nhập số điện thoại' type="text" className="w-full" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Profile;
