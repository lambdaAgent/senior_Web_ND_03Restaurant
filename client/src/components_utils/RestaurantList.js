import React from "react";

import Star from "./Star";


const RestaurantList = (props) => {
	const restaurant = props.restaurant
	return (
		<li className="row" role="Restaurant" style={comment_mobile} aria-label="restaurant">
    	   <img src={restaurant.image} 
		   	    alt={restaurant.name}
		        style={imageMedia} />
		<info style={commentPanel} >
            <div className="" >
                <div> 
        			<h4 style={{marginBottom: "0px"}}
        				aria-label="restaurantName"
        			    > {restaurant.name}
        			</h4>
        			<span className="label label-danger" style={{fontSize:13}} aria-label="category">{restaurant.category}</span>        		
                </div>
                <div style={{float:"right"}}>
                	<Star className="starRating_VD desktop"
			  	          ratings={restaurant.ratings} />
                </div>
            </div>
        	{/* change this to open*/}
			<div role="review">
                <p>open:</p>
                <p>weekday: {restaurant.weekday}</p>
                <p>weekend: {restaurant.weekend}</p>
            </div>
		</info>
		<hr style={{border: "1px solid rgba(0,0,0,0.4)", width:"100%", padding:0}}/>
	</li>
	)
}

module.exports = RestaurantList

const comment_mobile = {width: "100%", listStyleType: "none", position: "relative", margin:"0 auto", width:"95%"}
const imageMedia = { borderRadius: "30px", float: "left", display:"inline-block",
                     width:"20%",border:"1px solid rgba(0,0,0,0.3)"};
const commentPanel = { marginLeft:"10px", width: "77%", maxWidth: "80%", display: "inline-block", marginBottom: "-20px"};
