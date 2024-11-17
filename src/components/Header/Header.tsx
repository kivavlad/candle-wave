import "./Header.css";
import { Button, Segmented, Select, Space } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../../contexts/ThemeConfigProvider";
import { useStore } from "../../hooks/useStore";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { dispatch } = useStore();

  const handleChangePair = (value: string) => {
    console.log(`Selected pair: ${value}`);
    dispatch({type: 'change-symbol', payload: value});
  };

  const handleChangeTimeframe = (value: string) => {
    console.log(`Selected timeframe: ${value}`);
    dispatch({type: 'change-interval', payload: value});
  };

  return (
    <div className="header">
      <div className="header-left">
        <Space wrap>
          <Select
            defaultValue="BTC/USDT"
            style={{ width: 120 }}
            onChange={handleChangePair}
            options={[
              { value: "BTC", label: "BTC/USDT" },
              { value: "ETH", label: "ETH/USDT" },
              { value: "SOL", label: "SOL/USDT" },
              { value: "TON", label: "TON/USDT" },
            ]}
          />

          <Segmented<string>
            options={["1m", "5m", "15m", "30m", "1h", "4h", "1d"]}
            onChange={handleChangeTimeframe}
          />
        </Space>
      </div>
      <Button
        type="text"
        onClick={toggleDarkMode}
        icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        size="large"
      />
    </div>
  );
};

export default Header;
