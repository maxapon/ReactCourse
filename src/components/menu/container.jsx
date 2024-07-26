import { Menu } from "./component";

export const MenuContainer = ({ menu }) => {
  if (!menu.length) return null;
  return <Menu menu={menu} />;
};
