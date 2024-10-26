"use client";

import BreadcrumbC from "@/components/Breadcrumb";
import ProductSlider from "@/components/product/ProductSlider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faShield, faStar, faStopwatch, faTags, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import CopyCodeButton from "@/components/CopyCodeButton";
import { useState } from "react";
import SizeGuide from "@/components/SizeGuide";
import NumberSpinner from "@/components/NumberSpinner";

import { jacketProducts } from "@/dummy-data/product.data";
import RecentProduct from "@/components/product/RecentProducts";
import ProductColor from "@/components/product/ProductColor";
import ProductSize from "@/components/product/ProductSize";
import PaymentMethod from "@/components/cart/PaymentMethod";
export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = {
    id: 35460,
    name: "Áo Khoác Gió Nam Thông Minh Trượt Nước",
    status: "active",
    created_by: "System",
    created_name: "System",
    updated_by: "System",
    updated_name: "System",
    created_date: "2022-05-03T08:33:22Z",
    updated_date: "2024-10-04T00:01:31Z",
    category_id: 121,
    category: "Áo gió nam",
    product_type: "normal",
    brand_id: null,
    brand: null,
    gender: "Nam",
    characteristics: null,
    collections: [
      {
        collection_id: 280,
        position: 101,
      },
      {
        collection_id: 278,
        position: 359,
      },
      {
        collection_id: 2,
        position: 31,
      },
      {
        collection_id: 335,
        position: 0,
      },
      {
        collection_id: 414,
        position: 0,
      },
      {
        collection_id: 415,
        position: 0,
      },
      {
        collection_id: 420,
        position: 0,
      },
      {
        collection_id: 421,
        position: 0,
      },
      {
        collection_id: 423,
        position: 0,
      },
      {
        collection_id: 425,
        position: 137,
      },
      {
        collection_id: 441,
        position: 0,
      },
      {
        collection_id: 446,
        position: 0,
      },
      {
        collection_id: 462,
        position: 0,
      },
      {
        collection_id: 514,
        position: 660,
      },
      {
        collection_id: 530,
        position: 0,
      },
      {
        collection_id: 555,
        position: 693,
      },
      {
        collection_id: 562,
        position: 1395,
      },
      {
        collection_id: 602,
        position: 1160,
      },
      {
        collection_id: 603,
        position: 311,
      },
      {
        collection_id: 604,
        position: 0,
      },
      {
        collection_id: 605,
        position: 0,
      },
      {
        collection_id: 611,
        position: 568,
      },
      {
        collection_id: 620,
        position: 559,
      },
      {
        collection_id: 12,
        position: 2,
      },
      {
        collection_id: 333,
        position: 2,
      },
      {
        collection_id: 624,
        position: 0,
      },
    ],
    material: null,
    min_variant_price: 599000.0,
    max_variant_price: 599000.0,
    tags: ",banchayt5,774,10t9,best8,thudong24",
    video: {
      url: "https://m.yodycdn.com/videos/website/AKM/AKM5041.mp4",
    },
    variants: [
      {
        id: 83972,
        name: "Áo Khoác Gió Nam Thông Minh Trượt Nước-Cam-M",
        color_id: 507,
        color: "Cam",
        size_id: null,
        partner_sync: true,
        inventory_quantity: 6657,
        prices: [
          {
            id: 224615,
            price: 599000.0,
            currency_code: "VND",
            currency_symbol: "đ",
            compare_at_price: 599000.0,
            price_rule_id: null,
            entitled_method: "QUANTITY",
          },
        ],
      },
      {
        id: 83952,
        name: "Áo Khoác Gió Nam Thông Minh Trượt Nước-Đen-M",
        color_id: 532,
        color: "Đen",
        size_id: null,
        partner_sync: true,
        inventory_quantity: 1258,
        prices: [
          {
            id: 224595,
            price: 599000.0,
            currency_code: "VND",
            currency_symbol: "đ",
            compare_at_price: 599000.0,
            price_rule_id: null,
            entitled_method: "QUANTITY",
          },
        ],
      },
      {
        id: 83957,
        name: "Áo Khoác Gió Nam Thông Minh Trượt Nước-Navy-M",
        color_id: 520,
        color: "Navy",
        size_id: null,
        partner_sync: true,
        inventory_quantity: 301,
        prices: [
          {
            id: 224600,
            price: 599000.0,
            currency_code: "VND",
            currency_symbol: "đ",
            compare_at_price: 599000.0,
            price_rule_id: null,
            entitled_method: "QUANTITY",
          },
        ],
      },
      {
        id: 83962,
        name: "Áo Khoác Gió Nam Thông Minh Trượt Nước-Xanh than-M",
        color_id: 199,
        color: "Xanh than",
        size_id: null,
        partner_sync: true,
        inventory_quantity: 81,
        prices: [
          {
            id: 224605,
            price: 599000.0,
            currency_code: "VND",
            currency_symbol: "đ",
            compare_at_price: 599000.0,
            price_rule_id: null,
            entitled_method: "QUANTITY",
          },
        ],
      },
      {
        id: 83967,
        name: "Áo Khoác Gió Nam Thông Minh Trượt Nước-Ghi sáng-M",
        color_id: 433,
        color: "Ghi sáng",
        size_id: null,
        partner_sync: true,
        inventory_quantity: 0,
        prices: [
          {
            id: 224610,
            price: 599000.0,
            currency_code: "VND",
            currency_symbol: "đ",
            compare_at_price: 599000.0,
            price_rule_id: null,
            entitled_method: "QUANTITY",
          },
        ],
      },
      {
        id: 83977,
        name: "Áo Khoác Gió Nam Thông Minh Trượt Nước-Xanh cổ vịt-M",
        color_id: 452,
        color: "Xanh cổ vịt",
        size_id: null,
        partner_sync: true,
        inventory_quantity: 0,
        prices: [
          {
            id: 224620,
            price: 599000.0,
            currency_code: "VND",
            currency_symbol: "đ",
            compare_at_price: 599000.0,
            price_rule_id: null,
            entitled_method: "QUANTITY",
          },
        ],
      },
    ],
    title: "Áo Khoác Gió Thông Minh Nam Trượt Nước\t\t",
    meta_desc:
      "Giải pháp mới cho mùa đông tới! Áo khoác gió nam trượt nước thông minh với tính năng nổi bật cùng sự tiện lợi tối đa giúp các anh chẳng ngại đường xa. Mua ngay!",
    url_handle: "ao-khoac-gio-nam-truot-nuoc-thong-minh",
    index_status: "index",
    unit: null,
    goods: "fashion",
    quantity_sold: null,
    star_avg: null,
    promotion_price: 0.0,
    display: true,
    position: 1,
    inventory_status: "in-stock",
    available_quantity: 15370,
    colors: [
      {
        id: 1130,
        color_id: 532,
        color: "Đen",
        parent_color_id: 1,
        parent_color: "Nhiều màu",
        url: "https://m.yodycdn.com/products/AKM5041-DEN (10).JPG",
        product_id: null,
        position: 1,
      },
      {
        id: 1131,
        color_id: 520,
        color: "Navy",
        parent_color_id: 1,
        parent_color: "Nhiều màu",
        url: "https://m.yodycdn.com/products/AKK5021-NAV AKM5041-NAV AKN5042-NAV.jpg",
        product_id: null,
        position: 2,
      },
      {
        id: 1132,
        color_id: 199,
        color: "Xanh than",
        parent_color_id: 1,
        parent_color: "Nhiều màu",
        url: "https://m.yodycdn.com/products/AKM5041-XTH (14).jpg",
        product_id: null,
        position: 3,
      },
      {
        id: 1134,
        color_id: 507,
        color: "Cam",
        parent_color_id: 1,
        parent_color: "Nhiều màu",
        url: "https://m.yodycdn.com/products/AKM5041-CAM (8).JPG",
        product_id: null,
        position: 5,
      },
    ],
    sizes: [
      {
        size_id: 4,
        size: "M",
        position: 1,
      },
      {
        size_id: 6,
        size: "L",
        position: 2,
      },
      {
        size_id: 7,
        size: "XL",
        position: 3,
      },
      {
        size_id: 8,
        size: "2XL",
        position: 4,
      },
      {
        size_id: 10,
        size: "3XL",
        position: 5,
      },
    ],
    images: [
      {
        id: 112739,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42360,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-02.jpg",
        position: 275,
      },
      {
        id: 112740,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42395,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-3.jpg",
        position: 310,
      },
      {
        id: 112741,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42396,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-4.jpg",
        position: 311,
      },
      {
        id: 112742,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42397,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-5.jpg",
        position: 312,
      },
      {
        id: 112743,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42398,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-6.jpg",
        position: 313,
      },
      {
        id: 112744,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42399,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-8.jpg",
        position: 314,
      },
      {
        id: 112745,
        product_id: null,
        color_id: 452,
        color: "Xanh cổ vịt",
        image_id: 42400,
        url: "https://m.yodycdn.com/products/ao-gio-nam-yody-akm5041-xcv-1.jpg",
        position: 315,
      },
      {
        id: 112746,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42373,
        url: "https://m.yodycdn.com/products/akm5041-xth-13.jpg",
        position: 6,
      },
      {
        id: 112747,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42374,
        url: "https://m.yodycdn.com/products/akm5041-xth-17.jpg",
        position: 5,
      },
      {
        id: 112748,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42375,
        url: "https://m.yodycdn.com/products/akm5041-xth-14.jpg",
        position: null,
      },
      {
        id: 112749,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42376,
        url: "https://m.yodycdn.com/products/akm5041-xth-15.jpg",
        position: 7,
      },
      {
        id: 112750,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42377,
        url: "https://m.yodycdn.com/products/akm5041-xth-16.jpg",
        position: 8,
      },
      {
        id: 112751,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42378,
        url: "https://m.yodycdn.com/products/akm5041-xth-18.jpg",
        position: null,
      },
      {
        id: 112752,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42350,
        url: "https://m.yodycdn.com/products/akm5041-xth-9-ca20413b-e1a7-4b38-a5a7-e11855c72503.jpg",
        position: 1,
      },
      {
        id: 112753,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42366,
        url: "https://m.yodycdn.com/products/akm5041-xth-3.jpg",
        position: 4,
      },
      {
        id: 112754,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42367,
        url: "https://m.yodycdn.com/products/akm5041-xth-6-1c924dbe-9453-4de1-b9cc-f3e1f22cd171.jpg",
        position: null,
      },
      {
        id: 112755,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42368,
        url: "https://m.yodycdn.com/products/akm5041-xth-7.jpg",
        position: 2,
      },
      {
        id: 112756,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42369,
        url: "https://m.yodycdn.com/products/akm5041-xth-8-45cf2c97-c27d-48f2-aa22-84d0480f4925.jpg",
        position: null,
      },
      {
        id: 112757,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42370,
        url: "https://m.yodycdn.com/products/akm5041-xth-10.jpg",
        position: null,
      },
      {
        id: 112758,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42371,
        url: "https://m.yodycdn.com/products/akm5041-xth-11.jpg",
        position: 3,
      },
      {
        id: 112759,
        product_id: null,
        color_id: 199,
        color: "Xanh than",
        image_id: 42372,
        url: "https://m.yodycdn.com/products/akm5041-xth-12.jpg",
        position: 9,
      },
      {
        id: 112760,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42357,
        url: "https://m.yodycdn.com/products/akm5041-den-11.jpg",
        position: 271,
      },
      {
        id: 112761,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42358,
        url: "https://m.yodycdn.com/products/akm5041-den-16.jpg",
        position: 272,
      },
      {
        id: 112762,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42359,
        url: "https://m.yodycdn.com/products/akm5041-den-13.jpg",
        position: 273,
      },
      {
        id: 112763,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42362,
        url: "https://m.yodycdn.com/products/akm5041-den-12.jpg",
        position: 276,
      },
      {
        id: 112764,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42363,
        url: "https://m.yodycdn.com/products/akm5041-den-14.jpg",
        position: 277,
      },
      {
        id: 112765,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42364,
        url: "https://m.yodycdn.com/products/akm5041-den-15.jpg",
        position: 278,
      },
      {
        id: 112766,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42365,
        url: "https://m.yodycdn.com/products/akm5041-den-7.jpg",
        position: null,
      },
      {
        id: 112767,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42353,
        url: "https://m.yodycdn.com/products/akm5041-den-8-305cee62-576b-4574-b1b0-025cac0a8c09.jpg",
        position: null,
      },
      {
        id: 112768,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42354,
        url: "https://m.yodycdn.com/products/akm5041-den-9-55b899ab-e3e9-42d1-93c6-360499ae7492.jpg",
        position: 268,
      },
      {
        id: 112769,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42355,
        url: "https://m.yodycdn.com/products/akm5041-den-4-ff6bdf4c-caa9-43f3-8593-b9e10f55666e.jpg",
        position: 269,
      },
      {
        id: 112770,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42356,
        url: "https://m.yodycdn.com/products/akm5041-den-10.jpg",
        position: 270,
      },
      {
        id: 112771,
        product_id: null,
        color_id: 532,
        color: "Đen",
        image_id: 42340,
        url: "https://m.yodycdn.com/products/akm5041-den-5.jpg",
        position: 255,
      },
      {
        id: 112772,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42344,
        url: "https://m.yodycdn.com/products/akm5041-cam-12.jpg",
        position: 259,
      },
      {
        id: 112773,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42345,
        url: "https://m.yodycdn.com/products/akm5041-cam-6-2baf101c-eb48-4323-bbf6-fc4b2f6d333e.jpg",
        position: 260,
      },
      {
        id: 112774,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42346,
        url: "https://m.yodycdn.com/products/akm5041-cam-7-657ea689-67f7-4a5d-8565-108e21b8b8ee.jpg",
        position: 261,
      },
      {
        id: 112775,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42347,
        url: "https://m.yodycdn.com/products/akm5041-cam-2.jpg",
        position: 262,
      },
      {
        id: 112776,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42348,
        url: "https://m.yodycdn.com/products/akm5041-cam-8-03591f71-b509-4913-8cd1-3db0a560b528.jpg",
        position: 263,
      },
      {
        id: 112777,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42349,
        url: "https://m.yodycdn.com/products/akm5041-cam-9-8740af8d-e629-43f6-8b0f-dac19622c4b7.jpg",
        position: 264,
      },
      {
        id: 112778,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42351,
        url: "https://m.yodycdn.com/products/akm5041-cam-10.jpg",
        position: 266,
      },
      {
        id: 112779,
        product_id: null,
        color_id: 507,
        color: "Cam",
        image_id: 42352,
        url: "https://m.yodycdn.com/products/akm5041-cam-11.jpg",
        position: 267,
      },
      {
        id: 112780,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42341,
        url: "https://m.yodycdn.com/products/akm5041-ghs-17.jpg",
        position: 256,
      },
      {
        id: 112781,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42342,
        url: "https://m.yodycdn.com/products/akm5041-ghs-13.jpg",
        position: 257,
      },
      {
        id: 112782,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42343,
        url: "https://m.yodycdn.com/products/akm5041-ghs-14.jpg",
        position: 258,
      },
      {
        id: 112783,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42335,
        url: "https://m.yodycdn.com/products/akm5041-ghs-5.jpg",
        position: 250,
      },
      {
        id: 112784,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42336,
        url: "https://m.yodycdn.com/products/akm5041-ghs-9.jpg",
        position: 251,
      },
      {
        id: 112785,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42337,
        url: "https://m.yodycdn.com/products/akm5041-ghs-12.jpg",
        position: 252,
      },
      {
        id: 112786,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42338,
        url: "https://m.yodycdn.com/products/akm5041-ghs-4.jpg",
        position: 253,
      },
      {
        id: 112787,
        product_id: null,
        color_id: 433,
        color: "Ghi sáng",
        image_id: 42339,
        url: "https://m.yodycdn.com/products/akm5041-ghs-18.jpg",
        position: 254,
      },
      {
        id: 112788,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42379,
        url: "https://m.yodycdn.com/products/akm5041-nav-5-d15a0b8b-d424-42e2-ae0f-5d9cb9b6648f.jpg",
        position: null,
      },
      {
        id: 112789,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42380,
        url: "https://m.yodycdn.com/products/akm5041-nav-9-60e32737-a0d6-4797-98ed-dc2c59dead3e.jpg",
        position: null,
      },
      {
        id: 112790,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42381,
        url: "https://m.yodycdn.com/products/akm5041-nav-3-5731b360-f8e5-43bf-ad85-98ee9ae44b2a.jpg",
        position: 4,
      },
      {
        id: 112791,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42382,
        url: "https://m.yodycdn.com/products/akm5041-nav-8-a5f75246-56aa-4132-8f73-3403b7616f7d.jpg",
        position: null,
      },
      {
        id: 112792,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42383,
        url: "https://m.yodycdn.com/products/akm5041-nav-12.jpg",
        position: 9,
      },
      {
        id: 112793,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42384,
        url: "https://m.yodycdn.com/products/akm5041-nav-14.jpg",
        position: 5,
      },
      {
        id: 112794,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42385,
        url: "https://m.yodycdn.com/products/akm5041-nav-15.jpg",
        position: 8,
      },
      {
        id: 112795,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42386,
        url: "https://m.yodycdn.com/products/akm5041-nav-16.jpg",
        position: 7,
      },
      {
        id: 112796,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42387,
        url: "https://m.yodycdn.com/products/akm5041-nav-10.jpg",
        position: 6,
      },
      {
        id: 112797,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42388,
        url: "https://m.yodycdn.com/products/akm5041-nav-1-96d63b6b-9a63-4d1f-aac4-aebd79e6cff4.jpg",
        position: null,
      },
      {
        id: 112798,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42389,
        url: "https://m.yodycdn.com/products/akm5041-nav-7-c6016aa6-4577-496d-b1a6-93a1bdc5b959.jpg",
        position: 2,
      },
      {
        id: 112799,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42390,
        url: "https://m.yodycdn.com/products/akm5041-nav-9.jpg",
        position: 3,
      },
      {
        id: 112800,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42391,
        url: "https://m.yodycdn.com/products/akm5041-nav-10-e9e9e7f8-ee7a-452a-a4d1-4074835066dd.jpg",
        position: null,
      },
      {
        id: 112801,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42392,
        url: "https://m.yodycdn.com/products/akm5041-nav-2.jpg",
        position: null,
      },
      {
        id: 112802,
        product_id: null,
        color_id: 520,
        color: "Navy",
        image_id: 42361,
        url: "https://m.yodycdn.com/products/akm5041-nav-5.jpg",
        position: 1,
      },
      {
        id: 112803,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42393,
        url: "https://m.yodycdn.com/products/akm5041-nav-3.jpg",
        position: null,
      },
      {
        id: 112804,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42394,
        url: "https://m.yodycdn.com/products/akm5041-nav-4.jpg",
        position: null,
      },
      {
        id: 112805,
        product_id: null,
        color_id: null,
        color: "",
        image_id: 42334,
        url: "https://m.yodycdn.com/products/akm5041-nav-7.jpg",
        position: null,
      },
    ],
  };

  const breadcrumbItems = [
    { title: "Trang chủ", link: "/" },
    { title: "Nam", link: "/nam" },
    { title: "Áo khoác nam", link: "/nam/ao-khoac" },
    { title: "Áo gió nam", link: "/nam/ao-gio" },
    { title: "Áo Khoác Gió Nam Thông Minh Trượt Nước" },
  ];

  const [selectedSize, setSelectedSize] = useState<string>('-');
  const [selectedColor, setSelectedColor] = useState<string>('-');
  const [countProduct, setCountProduct] = useState<number>();
  return (
    <div>
      <div className="sectionContainer">
        <BreadcrumbC items={breadcrumbItems} />
        <div className="flex flex-col lg:grid grid-cols-24 gap-3 py-5">
          <div className="col-span-1">
          </div>
          <div className="col-span-10">
            <div className="sticky top-[76px]">
              <ProductSlider product={product} />
            </div>
          </div>
          <div className="col-span-1">
          </div>
          <div className="col-span-11">
            {/* info product */}
            <div className="py-2">
              <h2 className="text-sm font-semibold">{product.name}</h2>
              <div className="py-2 flex items-center gap-1">
                <div className="mr-2">{params.id}</div>
                <div className="flex items-center h-4 w-4 text-amber-300">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="font-semibold text-sm">4.8</div>
                <div className="text-gray-400 text-sm">(120)</div>
                <div className="border-l-2 h-4"></div>
                <div className="flex gap-1 text-sm">
                  <div className="font-thin">Đã bán</div>
                  <div className="font-semibold">3328</div>
                </div>
              </div>
              <div className="font-semibold text-[#1c2430] text-2xl">{product.min_variant_price.toLocaleString()} đ</div>
            </div>
            {/* info discount */}
            <div className="py-2 flex items-center">
              <div className="text-center w-1/3 text-sm">Giảm 69K cho đơn hàng từ 499K</div>
              <div className="w-2/3 flex items-center">
                <span className="py-0.5 px-4 border text-xs text-red-600 my-0.5 mx-1.5 bg-zinc-100">69KT10</span>
                <CopyCodeButton code={'69KT10'} />
              </div>
            </div>
            {/* Color */}
            <ProductColor product={product} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
            {/* Size */}
            <ProductSize product={product} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            {/* Count */}
            <div className="py-3">
              <div className="font-medium pb-2">
                Số lượng:
              </div>
              <div className="flex gap-4 pb-4">
                <div className="w-1/4">
                  <NumberSpinner setCount={setCountProduct} />
                </div>
                <button className="w-3/4 border border-zinc-900 rounded-xl text-xl font-medium hover:bg-gray-100">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <button className="border w-full h-12 rounded-xl bg-[#FCAF17] hover:bg-[#fdc75d] shadow-2xl">Mua hàng</button>
            </div>
            <PaymentMethod />

            <div className="pt-3 text-sm">
              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3">
                  <FontAwesomeIcon className="h-5 w-5" icon={faTruckFast} />
                </div>
                <div className="text-[#394960] font-semibold pr-1">
                  Miễn phí vận chuyển:
                </div>
                <div className="text-[#394960]"> Đơn hàng từ 498k</div>
              </div>
              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3">
                  <FontAwesomeIcon className="h-5 w-5" icon={faStopwatch} />
                </div>
                <div className="text-[#394960] font-semibold pr-1">
                  Giao hàng:
                </div>
                <span className="text-[#394960]">Từ 3 - 5 ngày trên cả nước</span>
              </div>
              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3">
                  <FontAwesomeIcon
                    className="h-5 w-5"
                    icon={faArrowRightArrowLeft}
                  />
                </div>
                <div className="text-[#394960] font-semibold pr-1">
                  Miễn phí đổi trả:
                </div>
                <span className="text-[#394960]">
                  Tại 267+ cửa hàng trong 15 ngày
                </span>
              </div>
              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3">
                  <FontAwesomeIcon className="h-5 w-5" icon={faTags} />
                </div>
                <span className="text-[#394960]">
                  Sử dụng mã giảm giá ở bước thanh toán
                </span>
              </div>
              <div className="pb-3 flex">
                <div className="h-5 w-5 mr-3">
                  <FontAwesomeIcon className="h-5 w-5" icon={faShield} />
                </div>
                <span className="text-[#394960]">
                  Thông tin bảo mật và mã hoá
                </span>
              </div>
            </div>

            <ul className="py-3 text-sm">
              <li className="list-inside list-disc">
                Áo gió thông minh làm từ chất liệu vải gió, được cải tiến và nâng
                cấp với khả năng trượt nước. Đặc biệt có thể lộn ngược và gấp gọn
                thành 1 chiếc túi dễ dàng mang đi mọi nơi. Thiết kế gấu áo có chun
                rút, chun tay tránh gió lùa hiệu quả.
              </li>
            </ul>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="py-6 lg:py-10">
          <RecentProduct listProduct={jacketProducts} />
        </div>
      </div>
    </div>
  )
}
