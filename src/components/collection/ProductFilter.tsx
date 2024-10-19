import React, { useState } from 'react'
import { Checkbox, Menu, MenuProps } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';

import './ProductFilter.css'

export default function ProductFilter({ collections, listFilters, onListFilter }: {
    collections: {
        collectionGender: { id: string; name: string; }[];
        collectionColor: { id: string; name: string; }[];
        collectionSize: { id: string; name: string; }[];
        collectionPrice: { id: string; name: string; }[];
    };
    listFilters: { id: string, name: string }[];
    onListFilter: (selectedItems: { id: string; name: string }[]) => void;
}) {
    const onClick: MenuProps['onClick'] = (e) => {
        const { key, domEvent } = e;
        const target = domEvent.target as HTMLElement;

        const id = key;
        const name = target.innerText || target.textContent;

        const alreadySelected = listFilters.some((item) => item.id === id);

        let newSelectedKeys: { id: string; name: string }[] = [];

        if (alreadySelected) {
            newSelectedKeys = listFilters.filter((item) => item.id !== id);
        } else {
            newSelectedKeys = [...listFilters, { id, name: name || '' }];
        }

        onListFilter(newSelectedKeys);
    };

    const isSelected = (id: string) => listFilters.some((item) => item.id === id);
    const renderCollectionGender = () => {
        return [
            collections.collectionGender.map((item) => (
                <Menu.Item className='custom-item' key={item.id}>
                    <Checkbox className='custom-checkbox pointer-events-none' checked={isSelected(item.id)}></Checkbox>
                    <span className='pl-3'>{item.name}</span>
                </Menu.Item>
            ))
        ];
    };
    const renderCollectionColor = () => {
        return [
            collections.collectionColor.map((item) => (
                <Menu.Item className='custom-item custom-item-color' key={item.id}>
                    <Checkbox className='custom-checkbox custom-checkbox-color pointer-events-none' checked={isSelected(item.id)}></Checkbox>
                    <span>{item.name}</span>
                </Menu.Item>
            ))
        ];
    };
    const renderCollectionSize = () => {
        return [
            collections.collectionSize.map((item) =>
            (
                <Menu.Item className='custom-item custom-item-size' key={item.id}>
                    <span>{item.name}</span>
                </Menu.Item>
            ))
        ];
    };
    const renderCollectionPrice = () => {
        return [
            collections.collectionPrice.map((item) => (
                <Menu.Item className='custom-item' key={item.id}>
                    <Checkbox className='custom-checkbox pointer-events-none' checked={isSelected(item.id)}></Checkbox>
                    <span className='pl-3'>{item.name}</span>
                </Menu.Item>
            ))
        ];
    };
    return (
        <div>
            <h2 className='text-xl font-semibold'>
                Bộ lọc
            </h2>
            <div className='menu-container h-[80vh] modal-body overflow-y-auto'>
                <Menu
                    onClick={onClick}
                    defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4']}
                    selectedKeys={listFilters.map(item => item.id)}
                    mode="inline"
                >
                    <SubMenu className='' key="sub1" title="Giới tính">
                        {renderCollectionGender()}
                    </SubMenu>
                    <SubMenu className='custom-menu-grid' key="sub2" title="Màu sắc">
                        {renderCollectionColor()}
                    </SubMenu>
                    <SubMenu className='custom-menu-grid' key="sub3" title="Kích thước">
                        {renderCollectionSize()}
                    </SubMenu>
                    <SubMenu key="sub4" title="Theo giá">
                        {renderCollectionPrice()}
                    </SubMenu>
                </Menu >
            </div>
        </div>
    )
}
