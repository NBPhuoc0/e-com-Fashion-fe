"use client"

import Image from "next/image";
import banner from '../../../public/assets/images/banner-collection.webp'
import BreadcrumbC from "@/components/Breadcrumb";
import SelectC from "@/components/Select";
export default function Product() {
  const breadcrumbItems = [
    { title: 'Trang chủ', link: '/' },
    { title: 'Áo gió' },
  ];

  const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ]

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="sectionContainer">

    </div>
  );
}
