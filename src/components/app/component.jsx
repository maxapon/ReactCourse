import { restaurants} from "../../../materials/mock";
import { Restaurant } from "../restaurant/component";
import { Layout } from "../layout/component";
import React from  "react"
import "/src/css/Tabs.css"

export const App = () => {
    const [currentId, setId] = React.useState(restaurants[0].id);
    function changeActiveTab(event)
    {
        setId(event.target.value);
    }

    React.useEffect(() => {
        Array.from(document.getElementsByClassName("tabBtn")).forEach((element) => {
            if (element.value != currentId)
            {
                element.className = element.className.replace(" active", "")
            }
            else
            {
                element.className += " active"
                console.log(element.value);
            }
        });

        Array.from(document.getElementsByClassName("tabContent")).forEach((element) => {
            if (element.id != currentId)
            {
                element.style.display = "none";
            }
            else
            {
                element.style.display = "block"
            }
        })
    })

    return (
        <Layout>
            <div className="tab">
                {restaurants.map((restaurant) => (
                   <button className="tabBtn" onClick={changeActiveTab} value={restaurant.id} disabled={!Boolean(restaurant.menu?.length)}>{restaurant.name}</button>
                ))}
            </div>
            <div>
                {restaurants.map((restaurant) => (
                    <Restaurant id={restaurant.id} name={restaurant.name} menu={restaurant.menu} reviews={restaurant.reviews}/>
                ))}   
            </div>
        </Layout>
    )
};