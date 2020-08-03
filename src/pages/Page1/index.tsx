import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { setTitle } from "../../common/utils";
import appStore, { ToDO } from "../../store/appStore";
import { Input, Row, Col, Button, Modal } from "antd";
import ToDoList from "../../components/ToDoList";
import classnames from "classnames";
import { useObserver } from "mobx-react";

const Page1: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setTitle("未完成");
    appStore.setName("未完成");
  }, []);

  const onAdd = () => {
    if (!text) {
      return Modal.warning({
        title: "请输入内容",
      });
    }

    appStore.addToDo(new ToDO(text));

    setText("");
  };
  const className = undefined;
  return useObserver(() => (
    <div className={classnames("page-root", className)}>
      <Row justify="center">
        <Col span={10}>
          <Input
            placeholder="请输入"
            maxLength={30}
            minLength={0}
            value={text}
            onChange={(e) => {
              const value = e.currentTarget.value;
              setText(value);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                onAdd();
              }
            }}
          />
        </Col>
        <Col>
          <Button type="primary" onClick={onAdd}>
            添加
          </Button>
        </Col>
      </Row>
      <section className="todos-box">
        <ToDoList type="undone" />
      </section>
      <NavLink to="/page2">
        <Button type="primary">Page2</Button>
      </NavLink>
      <div className="pic pic-bg"></div>
    </div>
  ));
};

export default Page1;
