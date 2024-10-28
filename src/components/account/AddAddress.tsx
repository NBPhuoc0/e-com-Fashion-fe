import React, { useEffect, useState } from 'react';
import { Button, Form, FormProps, Input, Modal, Radio, RadioChangeEvent, Select, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { faBuilding, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AddAddress.css'
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
const AddAddress = ({ open, onClose, isEditMode, address }: {
    open: boolean;
    onClose: () => void;
    isEditMode: boolean;
    address: any;
}) => {
    console.log("🚀 ~ address:", address)
    // const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);

    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [form] = Form.useForm();
    useEffect(() => {
        if (isEditMode && address) {
            setSelectedProvince(address.province);
            const selectedProvinceData = provinces.find((province) => province.Name === address.province);
            setDistricts(selectedProvinceData?.Districts || []);

            setSelectedDistrict(address.district);
            const selectedDistrictData = selectedProvinceData?.Districts.find((district) => district.Name === address.district);
            setWards(selectedDistrictData?.Wards || []);

            form.setFieldsValue({
                name: address.name,
                phoneNumber: address.phoneNumber,
                province: address.province,
                district: address.district,
                ward: address.ward,
                adress: address.address,
                typeAdress: address.typeAddress,
                defaultChecked: address.defaultAddress,
            });
        }
    }, [isEditMode, address, provinces]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json`);
                setProvinces(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleProvinceChange = (provinceId: string) => {
        form.setFieldsValue({ district: null, ward: null });
        setSelectedProvince(provinceId);

        const selectedProvinceData = provinces.find((province) => province.Id === provinceId);
        setDistricts(selectedProvinceData?.Districts || []);
        setWards([]);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (districtId: string) => {
        form.setFieldsValue({ ward: null });
        setSelectedDistrict(districtId);
        const selectedDistrictData = districts.find((district) => district.Id === districtId);
        setWards(selectedDistrictData?.Wards || []);
    };

    const [value, setValue] = useState(1);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        form.resetFields()
        onClose();
    };
    const onFinish: FormProps<any>['onFinish'] = (values) => {
        console.log('Success:', values);
        setConfirmLoading(true);
        setTimeout(() => {
            onClose();
            setConfirmLoading(false);
            form.resetFields()
        }, 1000);
    };

    const onFinishFailed: FormProps<any>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>

            <Modal
                title={!isEditMode ? <div className='text-2xl'>Địa chỉ mới</div> : <div className='text-2xl'>Cập nhật địa chỉ</div>}
                open={open}
                onCancel={handleCancel}
                width="40%"
                footer={null}
            >
                <Form
                    form={form}
                    name="transactionForm"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <div className='text-lg text-slate-600 mb-2'>
                        Thông tin người nhận
                    </div>
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
                    <div className='text-lg text-slate-600 mb-2'>
                        Địa chỉ nhận hàng
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        <Form.Item className='!mb-3' label="Tỉnh/Thành phố" name="province">
                            <Select onChange={handleProvinceChange} placeholder="Chọn Tỉnh/Thành phố">
                                {provinces.map((province) => (
                                    <Select.Option key={province.Id} value={province.Id}>
                                        {province.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item className='!mb-3' label="Quận/Huyện" name="district">
                            <Select onChange={handleDistrictChange} placeholder="Chọn Quận/Huyện" disabled={!selectedProvince}>
                                {districts.map((district) => (
                                    <Select.Option key={district.Id} value={district.Id}>
                                        {district.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item className='!mb-3' label="Phường/Xã" name="ward">
                            <Select placeholder="Chọn Phường/Xã" disabled={!selectedDistrict}>
                                {wards.map((ward) => (
                                    <Select.Option key={ward.Id} value={ward.Name}>
                                        {ward.Name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </div>

                    <Form.Item className='!mb-3' label="Địa chỉ cụ thể" name="adress">
                        <Input placeholder='Nhập địa chỉ cụ thể' type="text" className="w-full" />
                    </Form.Item>
                    <div className='flex justify-between'>
                        <div>Loại địa chỉ</div>
                        <Form.Item label="" name="typeAdress" required={false}>
                            <Radio.Group className="flex justify-end space-x-2" optionType="button" buttonStyle="outline" onChange={onChange} value={value}>
                                <Radio.Button className='custom-radio-button !rounded-3xl' value={1}><FontAwesomeIcon icon={faHouse} /> Nhà</Radio.Button>
                                <Radio.Button className='custom-radio-button !rounded-3xl' value={2}><FontAwesomeIcon icon={faBuilding} /> Văn phòng</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </div>

                    <div className='flex justify-between border-t pt-2'>
                        <div className='text-lg text-slate-600'>Đặt làm địa chỉ mặc định</div>
                        <Form.Item label="" name="defaultChecked">
                            <Switch />
                        </Form.Item>
                    </div>

                    <Form.Item>
                        <Button size='large' loading={confirmLoading} type="primary" htmlType="submit" className="w-full">
                            {isEditMode ? 'Cập nhật' : 'Thêm'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddAddress;