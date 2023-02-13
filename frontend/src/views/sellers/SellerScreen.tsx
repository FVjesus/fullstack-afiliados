import React, { ReactElement } from "react";

import { Card, Table, Typography } from "antd";

import Flex from "../../components/shared/Flex";
import { useSellerList } from "../../hooks/useSellerList";

export const SellerScreen = (): ReactElement => {
  const { sellers, isLoading, error } = useSellerList();

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Total movement in transactions",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => {
        return (
          <span>
            {(amount / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        );
      }
    }
  ];

  return (
    <div>
      <div className="page-header-alt overlap border-botton">
        <div className="container">
          <Flex className="py-2" justifyContent="between" alignItems="center">
            <Typography.Title>Sellers</Typography.Title>
          </Flex>
        </div>
      </div>
      <div className="container" style={{ marginTop: 130 }}>
        <Card title="Sellers list">
          <div className="table-responsive">
            <Table
              columns={tableColumns}
              dataSource={sellers}
              rowKey="id"
              loading={isLoading}
              pagination={{ position: ["topRight"] }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};
