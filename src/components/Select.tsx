import React, { ReactNode } from 'react'; // Import ReactNode từ React
import { Select } from 'antd';

const SelectC = ({ value, textDefault, width, options, handleChange }: {
    value: string,
    textDefault: string,
    width: number,
    options: { value: string; label: ReactNode }[],
    handleChange: (value: string) => void;
}) => {
    return (
        <Select
            value={value === '' ? undefined : value}
            placeholder={textDefault}
            style={{ width: width }}
            onChange={handleChange}
            options={options}
        />
    )
};

export default SelectC;