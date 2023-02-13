import React, { ReactElement } from "react";

import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = (): ReactElement => {
  return (
    <Footer className="text-center">
      <span>
        Copyright &copy; {`${new Date().getFullYear()}`}{" "}
        <span className="font-weight-semibold">Fabrício Velôso</span> All rights reserved.
      </span>
    </Footer>
  );
};

export default AppFooter;
