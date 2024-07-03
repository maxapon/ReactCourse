import {Dish} from '../dish/component'
import { Review } from '../review/component';

export const Restaurant = ({id, name, menu, reviews}) => {
    if( !menu?.length)
        return null;

    return (
        <div id={id} className='tabContent'>
            <h3>{name}</h3>
            <h4>Menu:</h4>
            <ul>
                {
                    menu.map((dish) => (
                        <li key={dish.id}>
                            <Dish id={dish.id} name={dish.name} price={dish.price} ingridients={dish.ingredients} />
                        </li>
                    ))
                }
            </ul>
            <h4>Reviews:</h4>
            <ul>
                {
                    reviews?.length ? 
                    reviews.map((review) => (
                        <li key={review.id}>
                            <Review id={review.id} user={review.user} rating={review.rating} text={review.text} />
                        </li>
                    )) 
                    : 'No reviews'
                }
            </ul>
        </div>
    );
};