import React from 'react'
import ReactDOM from 'react-dom/client'
import {restaurants} from '../materials/mock';

ReactDOM.createRoot(document.getElementById('root')).render(
  /*<ul className='MainUl'>
    {["first", "second"].map((value) => (<li>{value}</li>))}
  </ul>*/
  <div>
  <h2>Restaurants:</h2>
  <div>
    <div>
      <h3>{restaurants[0].name}</h3>
      <h4>Menu:</h4>
      <ul>
        {restaurants[0].menu.map((dish) => (<li>{dish.name} - price: {dish.price}<br></br><p>Ingredients: {dish.ingredients.join(', ')}</p></li>))}
      </ul>
      <h4>Reviews:</h4>
      <ul>
        {restaurants[0].reviews.map((review) => (<li>{review.user} Rating: {review.rating}: {review.text}; </li>))}
      </ul>
    </div>
    
    <div>
      <h3>{restaurants[1].name}</h3>
      <h4>Menu:</h4>
      <ul>
        {restaurants[1].menu.map((dish) => (<li>{dish.name} - price: {dish.price}<br></br><p>Ingredients: {dish.ingredients.join(', ')}</p></li>))}
      </ul>
      <h4>Reviews:</h4>
      <ul>
        {restaurants[1].reviews.map((review) => (<li>{review.user} Rating: {review.rating}: {review.text}; </li>))}
      </ul>
    </div>   

    <div>
      <h3>{restaurants[2].name}</h3>
      <h4>Menu:</h4>
      <ul>
        {restaurants[2].menu.map((dish) => (<li>{dish.name} - price: {dish.price}<br></br><p>Ingredients: {dish.ingredients.join(', ')}</p></li>))}
      </ul>
      <h4>Reviews:</h4>
      <ul>
        {restaurants[2].reviews.map((review) => (<li>{review.user} Rating: {review.rating}: {review.text}; </li>))}
      </ul>
    </div> 

    <div>
      <h3>{restaurants[3].name}</h3>
      <h4>Menu:</h4>
      <ul>
        {restaurants[3].menu.map((dish) => (<li>{dish.name} - price: {dish.price}<br></br><p>Ingredients: {dish.ingredients.join(', ')}</p></li>))}
      </ul>
      <h4>Reviews:</h4>
      <ul>
        {restaurants[3].reviews.map((review) => (<li>{review.user} Rating: {review.rating}: {review.text}; </li>))}
      </ul>
    </div> 

  </div>
</div>
)


