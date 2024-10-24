import { Button } from 'antd';
import React from 'react'
import SelectC from '../Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ListFilter({ listFilters, onListFilter }: {
    listFilters: { id: string, name: string }[];
    onListFilter: (selectedItems: { id: string; name: string }[]) => void;
}) {

    const handleChange = (value: string) => {
        const updatedFilters = listFilters.filter(item => item.id !== value);
        onListFilter(updatedFilters);
    };

    const options = listFilters.map(item => ({
        value: item.id,
        label: (
            <p className='flex justify-between'>
                <span>{item.name}</span>
                <span style={{ cursor: 'pointer' }} onClick={() => handleChange(item.id)}><FontAwesomeIcon icon={faXmark} /></span>
            </p>
        )
    }));
    return (
        <div className='flex items-center space-x-3'>
            {listFilters.length > 0 && <>
                <p className='text-sm'>Đang dùng bộ lọc: </p>
                {listFilters.length < 4 ? (
                    listFilters.map((item) => (
                        <div className='flex items-center space-x-2 px-5 py-1.5 bg-gray-100 rounded-lg text-xs'>
                            <span>{item.name}</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => handleChange(item.id)}><FontAwesomeIcon icon={faXmark} /></span>
                        </div>
                    ))) : (
                    <SelectC value={`${listFilters.length} bộ lọc`} textDefault='' options={options} width={220} handleChange={handleChange} />
                )}
                <Button onClick={() => onListFilter([])}>Xóa hết bộ lọc</Button>
            </>
            }
        </div>
    )
}
