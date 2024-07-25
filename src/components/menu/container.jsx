import { Menu } from "./component";

export const MenuContainer = ({ dishIds }) => {
  if (!dishIds.length) return null;
  return <Menu dishIds={dishIds} />;
};
