export const Review = ({id, user, rating, text}) => {
    return (
        <div id={id}>
            {user} - rating: {rating}:
            <br/>
            <p>{text}</p>
        </div>
    );
};