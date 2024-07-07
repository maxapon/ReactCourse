import { useCallback } from "react";
import { useState } from  "react"

const useCount = ({min = 0, max = 5, initValue = 0}) => {
    const [count, setCount] = useState(initValue);

    const increment = useCallback(() => {
        setCount((prevState) => prevState + 1 > max ? max : prevState + 1 );
    }, [])
    const decrement = useCallback(() => {
        setCount((prevState) => prevState > min ? prevState - 1 : min);
    }, [])

    return {
        count,
        increment,
        decrement
    };
};

export const Counter = (initValues) => {
    const {count, increment, decrement} = useCount(initValues);

    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
}