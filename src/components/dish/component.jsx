import { useState } from  "react"
import '/src/css/Dish.css'

const useCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1 > 5 ? 5 : prevState + 1 );
    }
    const decrement = () => {
        setCount((prevState) => prevState > 0 ? prevState - 1 : 0);
    }

    return {
        count,
        increment,
        decrement
    };
};


export const Dish = ({id, name, price, ingridients}) => {
    const {count, increment, decrement} = useCount();

    return (
        <div id={id} className="dishContainer">
            {name} - price per piece: {price}; total price: {count * price}
            <br/>
            <p>{ingridients.join(', ')}</p>
            <button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button>
        </div>
    );
};