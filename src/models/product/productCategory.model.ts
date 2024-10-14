export class ProductCategory {
  id: number;
  name: string;
  listProduct: any[];

  constructor(id: number, name: string, listProduct: any[]) {
    this.id = id;
    this.name = name;
    this.listProduct = listProduct;
  }
}
