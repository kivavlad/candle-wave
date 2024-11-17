import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  const { Content } = Layout;

  return (
    <Layout>
      <Header />
      <Content className="content">
        <Chart />
      </Content>
    </Layout>
  )
}

export default App;
