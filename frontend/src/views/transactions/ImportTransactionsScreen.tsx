import React from "react";

import { Button, Card, Form, Typography, Upload } from "antd";

import { UploadOutlined } from "@ant-design/icons";

import Flex from "../../components/shared/Flex";
import { useImportTransaction } from "../../hooks/useImportTransaction";

export const ImportTransactionsScreen = () => {
  const { upload } = useImportTransaction();

  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (values: any) => {
    upload(values.file[0].originFileObj);
  };

  return (
    <div>
      <div className="page-header-alt overlap border-botton">
        <div className="container">
          <Flex className="py-2" justifyContent="between" alignItems="center">
            <Typography.Title>Import Transactions</Typography.Title>
          </Flex>
        </div>
      </div>
      <div className="container" style={{ marginTop: 130 }}>
        <Card title="Import transactions">
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="file" label="File" getValueFromEvent={getFile}>
              <Upload
                beforeUpload={file => {
                  return false;
                }}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Import
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};
