import React from "react";
import Pages from "./pages";
import { Layout } from "antd";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Header>
        <MyHeader title="App" />
      </Header>
      <Content style={{ flex: 1 }}>
        <Pages />
      </Content>
      <MyFooter>
        <Footer>app</Footer>
      </MyFooter>
    </Layout>
  );
};

export default App;
