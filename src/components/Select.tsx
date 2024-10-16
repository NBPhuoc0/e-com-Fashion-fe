import React from 'react';
import { Select } from 'antd';

const SelectC = ({ textDefault, width, options, handleChange }: { textDefault: string, width: number, options: { value: string; label: string }[], handleChange: (value: string) => void; }) => {
    console.log("🚀 ~ SelectC ~ options:", options)
    return (
        <Select
            placeholder={textDefault}
            style={{ width: width }}
            onChange={handleChange}
            options={options}
        />
    )
};

export default SelectC;