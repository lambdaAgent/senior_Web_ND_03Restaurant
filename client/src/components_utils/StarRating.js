import React  from "react";


const StarRating = (props) => {

	return(
		<div className="star-rating">
		  <div className="star-rating__wrap">
		    <input onClick={props.onClick(5)} className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5"/>
		    <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
		    <input onClick={props.onClick(4)} className="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4"/>
		    <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
		    <input onClick={props.onClick(3)} className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3"/>
		    <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
		    <input onClick={props.onClick(2)} className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2"/>
		    <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
		    <input onClick={props.onClick(1)} className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1"/>
		    <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
		  </div>
		</div>
	)
}

module.exports = StarRating;