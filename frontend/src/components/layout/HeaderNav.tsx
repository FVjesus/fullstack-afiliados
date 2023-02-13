import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Header } from "antd/es/layout/layout";

const HeaderNav = (): ReactElement => {
  return (
    <Header className="app-header bg-secondary shadow">
      <div className="app-header-wrapper">
        <div style={{ width: 50, marginLeft: 12 }}>
          <Link to="/">
            <img className="img-fluid" src="/img/logo.png" />
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default HeaderNav;
