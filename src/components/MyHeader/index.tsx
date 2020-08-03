import React from "react";

import "./style.scss";

interface IMyHeaderProps {
  title: string;
}

const MyHeader = ({ title }: IMyHeaderProps): React.ReactElement => {
  return <h1 className="my-header-root">{title}</h1>;
};

export default MyHeader;
