import React from 'react';
import { Breadcrumb } from 'antd';

interface BreadcrumbItem {
    title: string | JSX.Element;
    link?: string; // Optional link
}

interface BreadcrumbCProps {
    items: BreadcrumbItem[];
}

const BreadcrumbC: React.FC<BreadcrumbCProps> = ({ items }) => (
    <Breadcrumb
        items={items.map(item => ({
            title: item.link ? <a href={item.link}>{item.title}</a> : item.title,
        }))}
    />
);

export default BreadcrumbC;