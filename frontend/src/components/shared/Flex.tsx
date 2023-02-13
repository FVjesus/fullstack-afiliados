import React, { ReactElement } from "react";

const Flex = (props: {
  children: React.ReactNode;
  className: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
}): ReactElement => {
  const { children, className, alignItems, justifyContent, flexDirection } = props;
  return (
    <div
      className={` d-flex ${className} ${flexDirection ? "flex-" + flexDirection : ""} ${
        alignItems ? "align-items-" + alignItems : ""
      } ${justifyContent ? "justify-content-" + justifyContent : ""}`}
    >
      {children}
    </div>
  );
};

Flex.defaultProps = {
  flexDirection: "row",
  className: ""
};

export default Flex;
