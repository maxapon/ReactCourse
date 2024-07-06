import { restaurants} from "../../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";
import { useState } from "react";
import "/src/css/Tabs.css"

export const App = () => {
    const [currRestaurantIndx, setCurrRestaurantIndx] = useState(0);
    function changeActiveTab(event)
    {
        setCurrRestaurantIndx(event.target.value);
    }

    return (
        <Layout>
            <div className="tab">
                {restaurants.map((restaurant) => (
                    <button className={restaurants.indexOf(restaurant) == currRestaurantIndx ? "tabBtn active" : "tabBtn"} 
                            onClick={changeActiveTab} 
                            value={restaurants.indexOf(restaurant)} 
                            disabled={!Boolean(restaurant.menu?.length)}>
                        {restaurant.name}
                    </button>
                ))}
            </div>
            <div>
                {
                    <Restaurant id={restaurants[currRestaurantIndx].id} 
                                name={restaurants[currRestaurantIndx].name} 
                                menu={restaurants[currRestaurantIndx].menu} 
                                reviews={restaurants[currRestaurantIndx].reviews}/>
                }
            </div>
        </Layout>
    )
};