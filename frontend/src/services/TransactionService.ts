import { GetSellersResponse } from "../types/Seller";
import { GetTransactionsResponse } from "../types/Transaction";
import { Client } from "./Client";

export const TransactionService = {
  getTransactions: async () => {
    const response = await Client.get<GetTransactionsResponse>("/transactions");
    return response.transactions;
  },
  getSellers: async () => {
    const response = await Client.get<GetSellersResponse>("/sellers");
    return response.sellers;
  }
};
