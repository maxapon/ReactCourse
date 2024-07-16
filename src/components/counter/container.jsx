import { useCount } from "./hooks";
import { Counter } from "./component";

export const CounterContainer = () => {
    const {count, increment, decrement} = useCount();

    return <Counter value={count} increment={increment} decrement={decrement} />
}