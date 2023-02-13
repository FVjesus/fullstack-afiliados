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
  },
  createTransaction: async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await Client.post("/main", formData);
    return response;
  }
};
