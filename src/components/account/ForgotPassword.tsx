'use client'

import React from 'react';
import type { FormProps } from 'antd';
import { Form, Input, Button, DatePicker, Select, message } from 'antd';
const { Option } = Select;

const ForgotPassword = () => {
    const { RangePicker } = DatePicker;

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
        <div className="p-5 bg-white shadow-md rounded-lg border">
            <Form
                name="transactionForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    label="Mật khẩu cũ"
                    name="password"
                >
                    <Input placeholder='Nhập mật khẩu cũ' type="text" className="w-full" />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu mới"
                    name="newPassword"
                >
                    <Input placeholder='Nhập mật khẩu mới' type="text" className="w-full" />
                </Form.Item>
                <Form.Item
                    label="Xác nhận mật khẩu"
                    name="confirmPassword"
                >
                    <Input placeholder='Xác nhận mật khẩu' type="text" className="w-full" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Thay đổi
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ForgotPassword;
