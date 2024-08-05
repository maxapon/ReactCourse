import { Link, useParams } from "react-router-dom";
import { useGetMenuByRestIdQuery } from "../../redux/services/api";

export const RestaurantPageMenu = () => {
  const { restaurantId } = useParams();
  const { data: menu, isSuccess: menuIsSuccess } =
    useGetMenuByRestIdQuery(restaurantId);

  if (!menuIsSuccess) return "loading...";

  return (
    <ul>
      {menu.map((item) => (
        <li key={item.id}>
          <Link to={`/dish/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
