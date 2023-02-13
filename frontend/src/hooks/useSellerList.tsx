import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { TransactionService } from "../services/TransactionService";
import { Seller } from "../types/Seller";

export const useSellerList = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);

  const { data, isLoading, error } = useQuery(["sellers"], () => {
    return TransactionService.getSellers();
  });

  useEffect(() => {
    if (!isLoading && !error && data) {
      setSellers(data);
    }
  }, [data, isLoading, error]);

  return { sellers, isLoading, error };
};
