import { restaurants} from "../../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";
import { ScrollBar } from "../scrollBar/component";
import { useState } from "react";
import "/src/css/Tabs.css"
import "/src/css/App.css"

export const App = () => {
    const [currRestaurantIndx, setCurrRestaurantIndx] = useState(0);
    function changeActiveTab(event)
    {
        setCurrRestaurantIndx(Number(event.target.value));
    }

    return (
        <Layout>
            <ScrollBar />
            <div className="tab">
                {restaurants.map((restaurant, indx) => (
                    <button className={indx === currRestaurantIndx ? "tabBtn active" : "tabBtn"} 
                            onClick={changeActiveTab} 
                            value={indx} 
                            key={restaurant.id}
                            disabled={!restaurant.menu?.length}>
                        {restaurant.name}
                    </button>
                ))}
            </div>
            <div>
                {
                    Array(5).fill(<Restaurant id={restaurants[currRestaurantIndx].id} 
                        name={restaurants[currRestaurantIndx].name} 
                        menu={restaurants[currRestaurantIndx].menu} 
                        reviews={restaurants[currRestaurantIndx].reviews}/>)
                }
            </div>
        </Layout>
    )
};