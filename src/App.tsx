import React from "react";
import Pages from "./pages";
import { Layout } from "antd";
import { observer } from "mobx-react";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import appStore from "./store/appStore";

const { Header, Content, Footer } = Layout;

const App = observer(() => {
  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Header>
        <MyHeader title={appStore.name} />
      </Header>
      <Content style={{ flex: 1 }}>
        <Pages />
      </Content>
      <MyFooter>
        <Footer>app</Footer>
      </MyFooter>
    </Layout>
  );
});

export default App;
