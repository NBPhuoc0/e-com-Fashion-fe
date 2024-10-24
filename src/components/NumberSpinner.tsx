import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';

const NumberSpinner = ({ setCount }: { setCount: (value: number) => void; }) => {
    const onChange: InputNumberProps['onChange'] = (value) => {
        console.log('changed', value);
        if (typeof value === 'number') { // Kiểm tra xem value có phải là số hay không
            setCount(value);  // Gọi setCount nếu value là số
        }
    };

    return (
        <InputNumber
            min={1}
            max={10}
            defaultValue={1}
            onChange={onChange}
            style={{
                width: '100%',
            }}
            size='middle'
        />
    );
};

export default NumberSpinner;