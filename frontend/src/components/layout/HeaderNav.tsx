import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Header } from "antd/es/layout/layout";

const HeaderNav = (): ReactElement => {
  return <Header className="app-header bg-primary shadow" />;
};

export default HeaderNav;
