import { Counter } from "../counter/component";
import '/src/css/Dish.css'

export const Dish = ({id, name, price, ingridients}) => {

    return (
        <div id={id} className="dishContainer">
            {name} - price per piece: {price};
            <br/>
            <p>{ingridients.join(', ')}</p>
            <Counter />
        </div>
    );
};