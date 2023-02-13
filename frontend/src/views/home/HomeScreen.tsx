import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Card, Table, Tag, Typography } from "antd";

import { PlusCircleOutlined } from "@ant-design/icons";

import Flex from "../../components/shared/Flex";
import Links from "../../configs/LinkConfig";
import { useTransactionList } from "../../hooks/useTransactionList";

export const HomeScreen = (): ReactElement => {
  const { transactions, isLoading, error } = useTransactionList();

  const navigate = useNavigate();

  const renderType = (type: number) => {
    if (type == 1) {
      return <Tag color="blue">Producer sale</Tag>;
    } else if (type == 2) {
      return <Tag color="blue">Affiliate sale</Tag>;
    } else if (type == 3) {
      return <Tag color="red">Commission paid</Tag>;
    } else {
      return <Tag color="green">Commission received</Tag>;
    }
  };

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type: number) => renderType(type)
    },
    {
      title: "Product",
      dataIndex: "product",
      key: "product"
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller"
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      render: (value: number) => {
        return (
          <span>
            {(value / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        );
      }
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    }
  ];

  return (
    <div>
      <div className="page-header-alt overlap border-botton">
        <div className="container">
          <Flex className="py-2" justifyContent="between" alignItems="center">
            <Typography.Title>Transactions</Typography.Title>
          </Flex>
          <Flex alignItems="center" justifyContent="between">
            <Flex className="mb-1">
              <div className="mb-3"></div>
            </Flex>
            <div>
              <Button
                onClick={() => navigate(Links.app.transactions)}
                type="primary"
                icon={<PlusCircleOutlined />}
                block
              >
                Import transactions
              </Button>
            </div>
          </Flex>
        </div>
      </div>
      <div className="container" style={{ marginTop: 130 }}>
        <Card title="Transactions list">
          <div className="table-responsive">
            <Table
              columns={tableColumns}
              dataSource={transactions}
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
