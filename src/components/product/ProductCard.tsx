import { ProductCardModel } from "@/models/product/productCard.model";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductCardModel }) => {
  return (
    <Link href={`product/${product.id}`}>
      <div>
        <img loading="lazy" src={product.images[0].url} alt="" />
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
