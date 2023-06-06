export interface IProduct {
  _id: string;
  shop_title: string;
  product: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IConfirmedOrder {
  user: IUser | null;
  order: IProduct[] | null;
}
