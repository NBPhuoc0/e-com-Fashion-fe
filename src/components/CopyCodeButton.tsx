"use client"

import { useState } from 'react';

const CopyCodeButton = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Hiển thị thông báo sao chép trong 2 giây
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    };

    return (
        <div>
            <button className='bg-amber-500 py-1.5 px-5 text-xs rounded-lg' onClick={copyToClipboard}>
                {copied ? 'Đã copy!' : 'Copy mã'}
            </button>
        </div>
    );
};

export default CopyCodeButton;
