// import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps, MenuTheme } from 'antd';
// import { Checkbox, Menu, Switch } from 'antd';
// import SubMenu from 'antd/es/menu/SubMenu';

// import './Menu.css'

// const MenuC = ({ collections }: {
//     collections: {
//         collectionGender: { id: string; name: string; }[];
//         collectionColor: { id: string; name: string; }[];
//         collectionSize: { id: string; name: string; }[];
//         collectionPrice: { id: string; name: string; }[];
//     }
// }) => {
//     const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
//     console.log("🚀 ~ selectedKeys:", selectedKeys)

//     const onClick: MenuProps['onClick'] = (e) => {
//         const { key } = e;
//         setSelectedKeys((prevSelectedKeys) =>
//             prevSelectedKeys.includes(key)
//                 ? prevSelectedKeys.filter((k) => k !== key) // Deselect if already selected
//                 : [...prevSelectedKeys, key] // Select new key
//         );
//     };
//     const renderCollectionGender = () => {
//         return [
//             collections.collectionGender.map((item) => (
//                 <Menu.Item className='custom-item' key={item.id}>
//                     <Checkbox className='custom-checkbox' checked={selectedKeys.includes(item.id)}></Checkbox>
//                     <span className='pl-3'>{item.name}</span>
//                 </Menu.Item>
//             ))
//         ];
//     };
//     const renderCollectionColor = () => {
//         return [
//             collections.collectionColor.map((item) => (
//                 <Menu.Item className='custom-item custom-item-color' key={item.id}>
//                     <Checkbox className='custom-checkbox custom-checkbox-color' checked={selectedKeys.includes(item.id)}></Checkbox>
//                     <span>{item.name}</span>
//                 </Menu.Item>
//             ))
//         ];
//     };
//     const renderCollectionSize = () => {
//         return [
//             collections.collectionSize.map((item) =>
//             (
//                 <Menu.Item className='custom-item custom-item-size' key={item.id}>
//                     <span>{item.name}</span>
//                 </Menu.Item>
//             ))
//         ];
//     };
//     const renderCollectionPrice = () => {
//         return [
//             collections.collectionPrice.map((item) => (
//                 <Menu.Item className='custom-item' key={item.id}>
//                     <Checkbox className='custom-checkbox' checked={selectedKeys.includes(item.id)}></Checkbox>
//                     <span className='pl-3'>{item.name}</span>
//                 </Menu.Item>
//             ))
//         ];
//     };
//     return (
      
//     );
// };

// export default MenuC;