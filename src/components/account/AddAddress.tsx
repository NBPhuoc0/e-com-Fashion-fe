import React, { useEffect, useState } from 'react';
import { Button, Form, FormProps, Input, Modal, Radio, RadioChangeEvent, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
interface Ward {
    Id: string;
    Name: string;
    Level: string;
}

interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}

interface Province {
    Id: string;
    Name: string;
    Districts: District[];
}
const AddAdress: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [data, setData] = useState<Province[]>([]);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    console.log("🚀 ~ wards:", wards)

    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    console.log("🚀 ~ selectedDistrict:", selectedDistrict)
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`);
                setData(res.data);
                setProvinces(res.data); // Set provinces directly from fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleProvinceChange = (provinceId: string) => {
        setSelectedProvince(provinceId);
        const selectedProvinceData = data.find((province) => province.Id === provinceId);
        setDistricts(selectedProvinceData?.Districts || []);
        setWards([]);
        setSelectedDistrict(null);
        form.setFieldsValue({ district: "", ward: "" });
    };

    const handleDistrictChange = (districtId: string) => {
        setSelectedDistrict(districtId);
        const selectedDistrictData = districts.find((district) => district.Id === districtId);
        setWards(selectedDistrictData?.Wards || []);
        form.setFieldsValue({ ward: "" });
    };

    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (values: any) => {
        console.log("🚀 ~ handleOk ~ values:", values)
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Button type='primary' onClick={showModal} icon={<PlusOutlined />} danger>Thêm địa chỉ</Button>
            <Modal
                title="Địa chỉ mới"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={1000}
            >
                <Form
                    name="transactionForm"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{ province: null, district: null, ward: null }}
                    layout="vertical"
                >
                    <div className='grid grid-cols-2 gap-5'>
                        <Form.Item
                            label="Họ và tên"
                            name="name"
                        >
                            <Input placeholder='Nhập họ và tên' type="text" className="w-full" />
                        </Form.Item>
                        <Form.Item
                            label="Số điện thoại"
                            name="phoneNumber"
                        >
                            <Input placeholder='Nhập số điện thoại' type="text" className="w-full" />
                        </Form.Item>
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        <Form.Item label="Tỉnh/Thành phố" name="province">
                            <Select onChange={handleProvinceChange} placeholder="Chọn Tỉnh/Thành phố">
                                {provinces.map((province) => (
                                    <Select.Option key={province.Id} value={province.Id}>
                                        {province.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Quận/Huyện" name="district">
                            <Select onChange={handleDistrictChange} placeholder="Chọn Quận/Huyện" disabled={!selectedProvince}>
                                {districts.map((district) => (
                                    <Select.Option key={district.Id} value={district.Id}>
                                        {district.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Phường/Xã" name="ward">
                            <Select allowClear placeholder="Chọn Phường/Xã" disabled={!selectedDistrict}>
                                {wards.map((ward) => (
                                    <Select.Option key={ward.Id} value={ward.Id}>
                                        {ward.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>

                    <Form.Item label="Địa chỉ cụ thể" name="adress">
                        <Input placeholder='Nhập địa chỉ cụ thể' type="text" className="w-full" />
                    </Form.Item>
                    <Form.Item label="Loại địa chỉ" name="typeAdress">
                        <Radio.Group className='flex justify-end' onChange={onChange} value={value}>
                            <Radio value={1}>Nhà</Radio>
                            <Radio value={2}>Văn phòng</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {/* <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Thay đổi
                        </Button>
                    </Form.Item> */}
                </Form>
            </Modal>
        </>
    );
};

export default AddAdress;