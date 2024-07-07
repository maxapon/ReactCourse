import { useReducer } from "react";
import {Counter} from "../counter/component"

const INITIAL_FORM = {
    name: "",
    text: "",
    rating: 5
}

function reducer(state, {type, payload})
{
    switch (type)
    {
        case "setName":
            return {...state, name: payload}
        case "setText":
            return {...state, text: payload}
        case "setRating":
            return {...state, rating: payload}
        case "clear":
            return INITIAL_FORM
        default:
            return state
    }
}

const useForm = (initState) => {
    return useReducer(reducer, initState);
}


export const ReviewForm = () => {
    const [form, dispatch]= useForm(INITIAL_FORM)
    return (
        <div>
            <div>
                <span>Name:</span>
                <input value={form.name} onChange={(event) => {dispatch({type: "setName", payload: event.target.value})}}/>
            </div>
            <div>
                <span>Text:</span>
                <input value={form.text} onChange={(event) => {dispatch({type: "setText", payload: event.target.value})}}/>
            </div>
            <div>
                <span>Rating:</span>
                <Counter initValue={form.rating} onChange={(event) => {dispatch({type: "setRating", payload: event.target.value})}}/>
            </div>
            <button onClick={(event) => {dispatch({type: "clear"})}}>Save</button>
        </div>
    );
};