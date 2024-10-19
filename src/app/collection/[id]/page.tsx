"use client"

import Image from "next/image";
import banner from '../../../../public/assets/images/banner-collection.webp'
import BreadcrumbC from "@/components/Breadcrumb";
import SelectC from "@/components/Select";
import ProductFilter from "@/components/collection/ProductFilter";
import ListProduct from "@/components/product/ListProduct";
import RecentProduct from "@/components/product/RecentProducts";

import { jacketProducts } from "@/dummy-data/product.data";
import { useEffect, useState } from "react";
import ListFilter from "@/components/collection/ListFilter";

export default function Collection() {
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
    const collectionGender = [
        { id: '1', name: 'Nữ' },
        { id: '2', name: 'Nam' },
        { id: '3', name: 'Bé trai' },
        { id: '4', name: 'Bé gái' }
    ]
    const collectionColor = [
        { id: '5', name: 'Đen' },
        { id: '6', name: 'Đỏ' },
        { id: '7', name: 'Vàng' },
        { id: '8', name: 'Cam' },
        { id: '9', name: 'Hồng' },
        { id: '10', name: 'Tím' },
        { id: '11', name: 'Nâu' }
    ]
    const collectionSize = [
        { id: '12', name: 'S' },
        { id: '13', name: 'M' },
        { id: '14', name: 'L' },
        { id: '15', name: 'XL' },
        { id: '16', name: '2XL' }
    ]
    const collectionPrice = [
        { id: '17', name: '350000' },
        { id: '18', name: 'Nam' },
        { id: '19', name: 'Bé trai' },
        { id: '20', name: 'Bé gái' }
    ]

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const [listFilters, setListFilters] = useState<{ id: string; name: string }[]>(() => {
        const savedFilters = localStorage.getItem('listFilters');
        return savedFilters ? JSON.parse(savedFilters) : [];
    });
    console.log("🚀 ~ Collection ~ listFilters:", listFilters)


    useEffect(() => {
        localStorage.setItem('listFilters', JSON.stringify(listFilters));

        return () => {
            localStorage.removeItem('listFilters');
        };
    }, [listFilters]);

    return (
        <div className="sectionContainer">
            <Image
                className="overflow-hidden"
                src={banner}
                alt="banner"
            />
            <BreadcrumbC items={breadcrumbItems} />
            <h1 className="font-semibold text-3xl py-5">Áo Gió</h1>
            <div className="py-2 sticky top-[66px] bg-white">
                <div className="grid grid-cols-24 gap-3">
                    <div className="flex justify-start items-center col-span-4 gap-3">
                        17 sản phẩm
                    </div>
                    <div className="col-span-20">
                        <div className="flex justify-between items-center">
                            <ListFilter listFilters={listFilters} onListFilter={setListFilters} />
                            <SelectC value="" textDefault="Sắp xếp theo" width={150} options={options} handleChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-24 gap-3 pb-20'>
                <div className='col-span-4'>
                    <div className="sticky top-[114px]">
                        <ProductFilter collections={{ collectionGender, collectionColor, collectionSize, collectionPrice }} listFilters={listFilters} onListFilter={setListFilters} />
                    </div>
                </div>
                <div className='col-span-20'>
                    <ListProduct listProduct={jacketProducts} />
                </div>
            </div>

            <div className='grid grid-cols-24 gap-3 pb-5'>
                <div className='col-span-4'>
                </div>
                <div className='col-span-20'>
                    <RecentProduct listProduct={jacketProducts} />
                </div>
            </div>
        </div>
    );
}
