export interface Transaction {
  id: number;
  type: number;
  date: string;
  product_id: number;
  value: number;
  seller_id: number;
  created_at: string;
  updated_at: string;
  product: string;
  seller: string;
}

export interface GetTransactionsResponse {
  transactions: Transaction[];
}
