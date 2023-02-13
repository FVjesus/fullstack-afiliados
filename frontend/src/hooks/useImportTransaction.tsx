import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { notification } from "antd";

import Links from "../configs/LinkConfig";
import { TransactionService } from "../services/TransactionService";

export const useImportTransaction = () => {
  const navigate = useNavigate();

  const uploadMutation = useMutation(TransactionService.createTransaction, {
    onSuccess: () => {
      notification.success({ message: "Transaction imported successfully!" });
      navigate(Links.app.home);
    },
    onError: () => {
      notification.error({ message: "An error ocurred on try import data" });
    }
  });

  const upload = (file: File) => {
    uploadMutation.mutate(file);
  };

  return { upload };
};
