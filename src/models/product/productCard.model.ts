export class ProductCardModel {
  id: number;
  name: string;
  min_variant_price: number;
  promotion_price: number;
  images: {
    id: number;
    url: string;
  }[];
  sizes: {
    size_id: number;
    size: string;
  }[];
  colors: {
    id: number;
    color: string;
  }[];
  title: string;

  constructor(
    id: number,
    name: string,
    min_variant_price: number,
    promotion_price: number,
    images: { id: number; url: string }[],
    sizes: { size_id: number; size: string }[],
    colors: { id: number; color: string }[],
    title: string
  ) {
    this.id = id;
    this.name = name;
    this.min_variant_price = min_variant_price;
    this.promotion_price = promotion_price;
    this.images = images;
    this.sizes = sizes;
    this.colors = colors;
    this.title = title;
  }
}
