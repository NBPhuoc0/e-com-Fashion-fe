"use client";
import { useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import Link from "next/link";

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log(values);
    setLoading(false);
  };

  return (
    <div className="md:max-w-lg max-w-full mx-auto p-10 border rounded-lg shadow-md">
      <div className="mb-4">
        <span className="text-[#2a2a86] font-bold text-4xl">F</span>
        <span className="text-[#fcaf17] font-bold text-4xl">Store</span>
      </div>
      <div className="text-sm font-light text-[#6B7280] pb-8 ">
        Đăng ký tài khoản mới.
      </div>

      <Form
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Fullname"
          name="fullName"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input
            type="text"
            className="!p-2 !px-5"
            placeholder="Trinh Hoang Phuc"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input
            type="email"
            className="!p-2 !px-5"
            placeholder="phuc@gmail.com"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password className="!p-2 !px-5" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
        >
          <Input type="text" className="!p-2 !px-5" placeholder="Số 1 VVN" />
        </Form.Item>

        <div className="flex items-center gap-3">
          <Form.Item
            label="Date of birth"
            name="dateOfBirth"
            rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}
            className="flex-1"
          >
            <DatePicker className="!p-2 !px-5 w-full" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
            className="min-w-32"
          >
            <Select size="large">
              <Select.Option value="Male">Nam</Select.Option>
              <Select.Option value="Female">Nữ</Select.Option>
              <Select.Option value="Other">Khác</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full min-h-10 !bg-[#4F46E5]"
          >
            Đăng ký
          </Button>
        </Form.Item>

        <Form.Item>
          <div className="text-sm font-light text-[#6B7280] -mt-8">
            Bạn đã có tài khoản ?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-[#4F46E5] hover:underline"
            >
              Sign In
            </Link>
          </div>
        </Form.Item>
      </Form>

      <div className="relative flex items-center -mt-5">
        <div className="flex-grow border-t border-[1px] border-gray-200"></div>
        <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span>
        <div className="flex-grow border-t border border-gray-200"></div>
      </div>

      <form className="mt-5">
        <div className="flex flex-row gap-3 justify-center">
          <button className="flex items-center flex-row w-32 bg-gray-600 p-3 gap-3 rounded-md text-gray-200">
            <i className="fa-brands fa-google"></i>
            <span className="font-medium leading-4">Google</span>
          </button>
          <button className="flex items-center flex-row w-32 bg-gray-600 p-3 gap-3 rounded-md text-gray-200">
            <i className="fa-brands fa-facebook-f"></i>
            <span className="font-medium leading-4">Facebook</span>
          </button>
        </div>
      </form>
    </div>
  );
}
