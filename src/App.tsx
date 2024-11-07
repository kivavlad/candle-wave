import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import Chart from "./components/Chart";
import { ThemeConfigProvider } from "./contexts/ThemeConfigProvider";

function App() {
  const { Content } = Layout;

  return (
    <ThemeConfigProvider>
      <Layout>
        <Header />
        <Content className="content">
          <Chart />
        </Content>
      </Layout>
    </ThemeConfigProvider>
  );
}

export default App;
