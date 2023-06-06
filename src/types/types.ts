export interface IProduct {
  _id: string;
  shop_title: string;
  product: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}

// export interface IOrderedProduct extends IProduct {
//   quantity?: number;
// }
