import { ProductCardModel } from "@/models/product/productCard.model";
import Link from "next/link";
import "./ProductCard.css";
const ProductCard = ({ product }: { product: ProductCardModel }) => {
  return (
    <Link href={`/product/${product.id}`} className="product_card group">
      <div className="">
        <img
          loading="lazy"
          src={product.images[0].url}
          alt=""
          className="product_image transition-all duration-300 group-hover:scale-[101%]"
        />
        <div className="pt-3 text-black">
          <div className="text-sm line-clamp-1">{product.name}</div>
          <div className="pt-2 font-semibold text-base">
            {product.min_variant_price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
