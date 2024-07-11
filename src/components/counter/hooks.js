import { useCallback } from "react";
import { useState } from  "react"

const CounterConfig = {
    min: 0,
    max: 5
}

export const useCount = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevState) => Math.min(CounterConfig.max, prevState + 1) );
    }, [])
    const decrement = useCallback(() => {
        setCount((prevState) => Math.max(CounterConfig.min, prevState - 1));
    }, [])

    return {
        count,
        increment,
        decrement
    };
};