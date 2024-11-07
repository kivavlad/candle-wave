import "./App.css";
import { Layout } from "antd";
import Header from "./components/Header";
import { ThemeConfigProvider } from "./contexts/ThemeConfigProvider";

function App() {
  const { Content } = Layout;

  return (
    <ThemeConfigProvider>
      <Layout>
        <Header />
        <Content className="content"></Content>
      </Layout>
    </ThemeConfigProvider>
  );
}

export default App;
