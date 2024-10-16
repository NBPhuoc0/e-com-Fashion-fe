import Link from "next/link";

interface ImageItem {
    id: number;
    url: string;
}

interface Product {
    id: number;
    name: string;
    min_variant_price: number;
    images: ImageItem[]
    title: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`product/${product.id}`}>
            <div>
                <img src={product.images[0].url} alt="" />
                <div className="pt-3 text-black">
                    <div className="text-sm line-clamp-1">{product.name}</div>
                    <div className="pt-2 font-semibold text-base">{product.min_variant_price.toLocaleString()} <span className="text-lg">đ</span></div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard