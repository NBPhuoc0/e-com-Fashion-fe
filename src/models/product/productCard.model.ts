
export class ProductCardModel {
    id: number;
    name: string;
    min_variant_price: number;
    images: {
        id: number;
        url: string;
    }[];
    title: string;

    constructor(id: number, name: string, min_variant_price: number, images: { id: number; url: string; }[], title: string) {
        this.id = id;
        this.name = name;
        this.min_variant_price = min_variant_price;
        this.images = images;
        this.title = title;
    }
}