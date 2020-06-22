import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { setTitle } from "../../common/utils";

const Page1: React.FC = () => {
  setTitle("Page1");

  return (
    <div className="page-root">
      Page1
      <NavLink to="/page2">Page2</NavLink>
    </div>
  );
};

export default Page1;
