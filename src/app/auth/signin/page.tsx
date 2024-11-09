"use client";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    console.log("Email:", values.email);
    console.log("Password:", values.password);
    setLoading(false);
  };
  return (
    <section className="py-10 sectionContainer">
      <div className="md:max-w-lg max-w-full mx-auto p-10 border rounded-lg shadow-md">
        <div className="mb-4">
          <span className="text-[#2a2a86] font-bold text-4xl">F</span>
          <span className="text-[#fcaf17] font-bold text-4xl">Store</span>
        </div>
        <div className="text-sm font-light text-[#6B7280] pb-8 ">
          Đăng nhập vào hệ thống FStore.
        </div>

        <Form
          name="signin"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full min-h-10 !bg-[#4F46E5]"
            >
              Đăng nhập
            </Button>
          </Form.Item>

          <Form.Item>
            <div className="text-sm font-light text-[#6B7280] -mt-8">
              Bạn chưa có tài khoản ?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-[#4F46E5] hover:underline"
              >
                Sign Up
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
    </section>
  );
}
