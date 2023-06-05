export interface IProduct {
  _id: string;
  shop_title: string;
  product: string;
  price: number;
  description: string;
  image: string;
}

export interface IOrderedProduct extends IProduct {
  quantity?: number;
}
