import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { setTitle } from "../../common/utils";
import appStore from "../../store/appStore";

const Page1: React.FC = () => {
  useEffect(() => {
    setTitle("Page1");
    appStore.setName("Page1");
  }, []);

  return (
    <div className="page-root">
      Page1
      <NavLink to="/page2">Page2</NavLink>
    </div>
  );
};

export default Page1;
