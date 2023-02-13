import React from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "antd";

import AppFooter from "../components/layout/Footer";
import HeaderNav from "../components/layout/HeaderNav";
import SideNav from "../components/layout/SideNav";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout>
      <HeaderNav />
      <Layout className="app-container">
        <SideNav />
        <Layout className="app-layout">
          <div className="app-content">
            <Content>
              <Outlet />
            </Content>
          </div>
          <AppFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export { AppLayout };
