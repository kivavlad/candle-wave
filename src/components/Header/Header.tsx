import "./Header.css";
import { Button, Segmented, Select, Space } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../../contexts/ThemeConfigProvider";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const handleChangePair = (value: string) => {
    console.log(`Selected pair: ${value}`);
  };

  const handleChangeTimeframe = (value: string) => {
    console.log(`Selected timeframe: ${value}`);
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
              { value: "BTC/USDT", label: "BTC/USDT" },
              { value: "ETH/USDT", label: "ETH/USDT" },
              { value: "SOL/USDT", label: "SOL/USDT" },
              { value: "TON/USDT", label: "TON/USDT" },
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
