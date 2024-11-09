"use client";

import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default function MyAccount() {
  const [imageURL, setImageURL] = useState<string | undefined>(
    "https://cdn-icons-png.flaticon.com/512/236/236831.png"
  );

  const info = {
    customerName: "Văn Bá Trung Thành",
    bith: "2002-01-01",
    gender: "Male",
    phoneNumber: "0345046656",
  };

  const { RangePicker } = DatePicker;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
    if (info.file.status === "done") {
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
          bith: dayjs(info.bith, "YYYY-MM-DD"),
          gender: info.gender,
          phoneNumber: info.phoneNumber,
        }}
        layout="vertical"
      >
        <div className="pb-8 mb-2 border-b border-b-slate-400 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="my-4 w-24 md:w-32 lg:w-40 aspect-square">
              <img
                src={imageURL || "a.png"}
                alt=""
                className="object-cover rounded-full border-2 w-full h-full"
              />
            </div>

            <div className="px-4">
              <Upload
                name="avatar"
                showUploadList={false}
                // beforeUpload={() => false}
                onChange={handleImageChange}
              >
                <button className="border p-1 px-3 rounded-md flex items-center gap-2">
                  <UploadOutlined />
                  <div className="">Chọn một tập tin</div>
                </button>
              </Upload>
            </div>
          </div>
        </div>
        <Form.Item label="Tên khách hàng" name="customerName">
          <Input
            placeholder="Nhập tên khách hàng"
            type="text"
            className="w-full"
          />
        </Form.Item>
        <div className="grid grid-cols-3 gap-5">
          <Form.Item label="Ngày sinh" name="bith" className="col-span-2">
            <DatePicker placeholder={"Chọn ngày sinh"} className="w-full" />
          </Form.Item>
          <Form.Item label="Giới tính" name="gender" className="col-span-1">
            <Select placeholder="Chọn giới tính" className="w-full">
              <Select.Option value="Male">Nam</Select.Option>
              <Select.Option value="Female">Nữ</Select.Option>
              <Select.Option value="Other">Khác</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item label="Số điện thoại" name="phoneNumber">
          <Input
            placeholder="Nhập số điện thoại"
            type="text"
            className="w-full"
          />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="w-full bg-primary p-2 text-white font-medium rounded-lg"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}
