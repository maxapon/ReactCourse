import { Dish } from "../dish/component";
import { ReviewForm } from "../review-form/component";
import { Review } from "../review/component";
import styles from "./styles.module.css";

export const Restaurant = ({ id, name, menu, reviews }) => {
  if (!menu?.length) return null;

  return (
    <div id={id} className={styles.restContainer}>
      <h3>{name}</h3>
      <h4 className={styles.restH4}>Menu:</h4>
      <div className={styles.restLine}></div>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish
              id={dish.id}
              name={dish.name}
              price={dish.price}
              ingridients={dish.ingredients}
            />
          </li>
        ))}
      </ul>
      <h4 className={styles.restH4}>Reviews:</h4>
      <div className={styles.restLine}></div>
      <ul>
        {reviews?.length
          ? reviews.map((review) => (
              <li key={review.id}>
                <Review
                  id={review.id}
                  user={review.user}
                  rating={review.rating}
                  text={review.text}
                />
              </li>
            ))
          : "No reviews"}
      </ul>
      <ReviewForm />
    </div>
  );
};
