import React, { ReactElement } from "react";
import "./style.scss";

interface IMyFooterProps {
  children: ReactElement;
}

export default function MyFooter({ children }: IMyFooterProps): ReactElement {
  return <div className="my-footer-root">{children}</div>;
}
