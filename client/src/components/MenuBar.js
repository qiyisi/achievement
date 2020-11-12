import { useContext } from "react";
import { Menu } from "semantic-ui-react";

import { AuthContext } from "../context/auth";

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <Menu>
      <Menu.Item children={`Hi, ${user.username}`} />
      <Menu.Item name="logout" position="right" onClick={logout} />
    </Menu>
  );
};

export default MenuBar;
