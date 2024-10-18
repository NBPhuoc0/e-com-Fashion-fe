import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

interface BreadcrumbItem {
    title: string | JSX.Element;
    link?: string; // Optional link
}

const BreadcrumbC = ({ items }: { items: BreadcrumbItem[]; }) => (
    <div className="py-2">
        <Breadcrumb
            items={items.map(item => ({
                title: item.link ? <Link href={item.link}>{item.title}</Link> : item.title,
            }))}
        />
    </div>
);

export default BreadcrumbC;