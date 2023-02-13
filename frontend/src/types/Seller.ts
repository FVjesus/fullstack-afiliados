export interface Seller {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  amount: number;
}

export interface GetSellersResponse {
  sellers: Seller[];
}
