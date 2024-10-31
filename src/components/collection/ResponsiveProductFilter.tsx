import React, { ReactNode, useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import ProductFilter from './ProductFilter';
import SelectC from '../Select';
import ListFilter from './ListFilter';

const ResponsiveProductFilter = ({ collections, listFilters, onListFilter, options }: {
    collections: {
        collectionGender: { id: string; name: string; }[];
        collectionColor: { id: string; name: string; }[];
        collectionSize: { id: string; name: string; }[];
        collectionPrice: { id: string; name: string; }[];
    };
    listFilters: { id: string, name: string }[];
    onListFilter: (selectedItems: { id: string; name: string }[]) => void;
    options: { value: string; label: ReactNode }[],
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(1);

    const showDrawer = () => {
        setOpen(true);
    };


    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='flex items-center border px-4 py-1 rounded-3xl' onClick={showDrawer}>
                Bộ lọc<span className='text-blue-600 text-sm pr-2'>({listFilters.length}) </span> <FilterOutlined />
            </div>
            <Drawer
                title={
                    <div className='md:block hidden'>
                        <ListFilter listFilters={listFilters} onListFilter={onListFilter} />
                    </div>
                }
                placement='bottom'
                height='100%'
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button type="primary" onClick={onClose}>
                            Áp dụng
                        </Button>
                    </Space>
                }
                className='md:px-10'
            >
                <div className='mx-auto md:max-w-5xl px-4 md:px-10'>
                    <div className='pb-5'>
                        <h2 className='text-xl font-semibold'>
                            Sắp xếp theo
                        </h2>
                        <Radio.Group onChange={onChange} value={value}>
                            <Space className='flex !gap-4 py-5' direction="vertical">
                                {options.map((item) => (
                                    <Radio key={item.value} value={item.value}>{item.label}</Radio>
                                ))}
                            </Space>
                        </Radio.Group>
                    </div>

                    <ProductFilter collections={collections} listFilters={listFilters} onListFilter={onListFilter} />
                </div>

            </Drawer>
        </>
    );
};

export default ResponsiveProductFilter;