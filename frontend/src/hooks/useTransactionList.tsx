import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { TransactionService } from "../services/TransactionService";
import { Transaction } from "../types/Transaction";

export const useTransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { data, isLoading, error } = useQuery(["transactions"], () => {
    return TransactionService.getTransactions();
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      setTransactions(data);
    }
  }, [data, isLoading, error]);

  return { transactions, isLoading, error };
};
