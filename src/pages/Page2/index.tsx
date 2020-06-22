import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import "./style.scss";
import { setTitle } from "../../common/utils";

const Page2: React.FC = () => {
  const history = useHistory();

  setTitle("Page2");

  return (
    <div className="page-root">
      Page2
      <Button onClick={history.goBack}>Back</Button>
    </div>
  );
};

export default Page2;
