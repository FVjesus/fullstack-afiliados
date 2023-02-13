import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Links from "../configs/LinkConfig";
import { AppLayout } from "../layouts/AppLayout";
import { HomeScreen } from "./home/HomeScreen";
import { SellerScreen } from "./sellers/SellerScreen";
import { ImportTransactionsScreen } from "./transactions/ImportTransactionsScreen";

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Links.app.home} element={<AppLayout />}>
          <Route path="" element={<HomeScreen />} />

          <Route path={Links.app.sellers} element={<SellerScreen />} />

          <Route path={Links.app.transactions} element={<ImportTransactionsScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
