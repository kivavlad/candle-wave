import "./Header.css";
import { Button } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useTheme } from "../../contexts/ThemeConfigProvider";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="header">
      <div className="header-left"></div>
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
