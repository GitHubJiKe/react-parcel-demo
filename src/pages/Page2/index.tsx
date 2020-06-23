import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import "./style.scss";
import { setTitle } from "../../common/utils";
import appStore from "../../store/appStore";
import ToDoList from "../../components/ToDoList";

const Page2: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTitle("已完成");
    appStore.setName("已完成");
  }, []);

  return (
    <div className="page-root">
      <ToDoList type="done" />
      <Button onClick={history.goBack}>Back</Button>
    </div>
  );
};

export default Page2;
