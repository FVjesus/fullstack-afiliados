import React, { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout, Menu } from "antd";

import { GithubOutlined } from "@ant-design/icons";

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
            <GithubOutlined />
            <span>Users</span>
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNav;
