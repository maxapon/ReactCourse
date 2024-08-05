import { Menu } from "./component";
import { useGetMenuByRestIdQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {
  const { data: menu, isSuccess: menuIsSuccess } =
    useGetMenuByRestIdQuery(restaurantId);
  if (!menuIsSuccess || !menu.length) return null;
  return <Menu menu={menu} />;
};
