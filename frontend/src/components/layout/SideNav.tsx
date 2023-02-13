import React, { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout, Menu } from "antd";

import { FileTextOutlined, MoneyCollectOutlined, UsergroupAddOutlined } from "@ant-design/icons";

import Links from "../../configs/LinkConfig";

const { Sider } = Layout;

const SideNav = (): ReactElement => {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu
        theme="dark"
        disabledOverflow
        selectedKeys={[location.pathname]}
        style={{ height: "100%" }}
        mode="inline"
      >
        <Menu.Item key={Links.app.home} onClick={() => navigate(Links.app.home)}>
          <span>
            <MoneyCollectOutlined />
            <span>Transactions</span>
          </span>
        </Menu.Item>

        <Menu.Item key={Links.app.sellers} onClick={() => navigate(Links.app.sellers)}>
          <span>
            <UsergroupAddOutlined />
            <span>Sellers</span>
          </span>
        </Menu.Item>

        <Menu.Item key={Links.app.transactions} onClick={() => navigate(Links.app.transactions)}>
          <span>
            <FileTextOutlined />
            <span>Import Transactions</span>
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
