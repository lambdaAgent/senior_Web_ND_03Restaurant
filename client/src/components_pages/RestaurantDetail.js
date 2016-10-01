// library
import React from 'react';
import SimpleLogin from "../../../database/simpleClientAuth";
import DB from "../../../database/simpleDB.js";
import {FlashMessage, FlashDB} from "../components_utils/FlashMessage";
const $ = require("jquery");

// Components
import FloatingButton from "../components_utils/FloatingButton";
import Navbar from "../components_utils/Navbar"
import {Link, browserHistory} from "react-router";
import Star from "../components_utils/Star";
import Review from "../components_utils/Review";
import StarRating from "../components_utils/StarRating"


class RestaurantDetail extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'RestaurantDetail';
        this.submit_if_login = this.submit_if_login.bind(this);
        this.state = {restaurant: DB.getRestaurantById(this.props.params.restaurantId)}        
    }
    addReview(e){
    	e.preventDefault();
    	browserHistory.push("/addReview/" + this.props.params.restaurantId)
    }
	
	submit_if_login(e){
		e.preventDefault();
		var reviewText = $("#review")[0].value;
		var ratings = $("#rating_value")[0].value;

		if(reviewText === ""){
			$("#help-review").html("please fill the review")
			return $("#help-review").css({visibility: "visible"})
		} else {
			$("#help-review").html("")
			$("#help-review").css({visibility: "hidden"})
		}
		if( ratings === 0 || !ratings){
			$("#help-review").html("please rate this restaurant")
			return $("#help-review").css({visibility: "visible"})
		} else {
			$("#help-review").html("")
			$("#help-review").css({visibility: "hidden"})

		}

		if(!SimpleLogin.isAuthenticated()){
			FlashDB.addAlert("you need to login first")
			return undefined;
		}

		var reviewText = $("#review")[0].value;
		var user = SimpleLogin.get();
		user.coments = reviewText;
		user.ratings = ratings;
		user.commentedAt = Date.parse(new Date());
		DB.addReview(this.props.params.restaurantId, user)
		this.forceUpdate();
	}
    render() {
    	const restaurant = this.state.restaurant;
        return(
        	<div>
        	    {/*desktop only*/}
        		<mainDesktop className="container desktop">
        			<Navbar />
	        		<div style={{maxWidth: 800, margin:"0 auto", marginTop:-50}}>
	        			<RestaurantDetail_D
	        				submit_if_login={this.submit_if_login}
	        				restaurant={restaurant}
	        			/>
	        		</div>
        		</mainDesktop>

        	    {/*mobile only*/}
        		<mainMobile className="container mobile" >
	        		<Navbar showBackButton={true}
	        				RBSymbol={<i className="glyphicon glyphicon-edit"></i>}
	        				RBAria={"add Review"}
	        		        RBAction={this.addReview.bind(this) }/>
	        		
        			<div style={{position: "relative", 
        			     maxWidth: 480, border: "1px solid black",
        			     borderBottomRightRadius: 10,borderBottomLeftRadius: 10,
        			     margin: "0 auto"}}
        			     >
	        			<RestaurantDetail_M 
	        				restaurant={restaurant}
	        			/>
        			</div>
        		</mainMobile>

        		<FlashMessage />
        	</div>
        )
    }
}

export default RestaurantDetail;


// -------------
//    DESKTOP
// -------------

const RestaurantDetail_D = (props) => {
	const R = props.restaurant;
	console.log("func", props.submit_if_login)
	return(
		<div style={{position: "relative"}}>

			<img src={R.image} alt={R.name} style={{width: "100%"}}/>
			<div className="card_image_overlay_VD" >
				<h2 aria-label="restaurantName" className="card-title" style={{marginTop: 5}}>{R.name}</h2>
			</div>
			<div className="card-block" style={{marginTop: 10, paddingLeft: 10}}>
				<h2 aria-label="restaurantName">{R.name}</h2>
				
			  	<Star className="starRating_VD"
			  	      ratings={R.ratings} />
	           	<span className="label label-danger" style={{fontSize:13}}>{R.category}</span>
			  	<p style={{marginBottom:0}}><label aria-label="open">Open:</label></p>
			    <p className="card-text" aria-label="weekday" style={{marginBottom:0}}>weekday: {R.weekday}</p>
			    <p className="card-text" aria-label="weekend" style={{marginBottom:0}}>weekend: {R.weekend}</p>
			</div>
			<hr style={{border: "1px solid rgba(0,0,0,0.2"}} />

    		<AddReviewForm submit_if_login={props.submit_if_login} />
    		<br />
			<label aria-label="latestReviews" style={{marginLeft: 10}}>latest Reviews: </label>
			  
			{ R.comments.sort((a,b) => b.commentedAt - a.commentedAt)
				        .map(u =>  <Review key={u.id} review={u}/>)}
		</div>
	)
}

// -------------
//    MOBILE
// -------------
const RestaurantDetail_M = (props) => {
	const R = props.restaurant;
	return(
		<div role="restaurantDetail" 
		        className="card card-inverse">
			  <div className="card_image_overlay_VD" >
					<h2 aria-label="restaurantName" className="card-title" style={{marginTop: 5}}>{R.name}</h2>
			  </div>
			  <img className="card-img" style={{width:"100%"}} 
			        src={R.image} alt={R.name} />

			  
			  <div className="card-block" style={{marginTop: 10, paddingLeft: 10}}>
			  	<Star className="starRating_VD"
			  	      ratings={R.ratings} />
	           	<span className="label label-danger" style={{fontSize:13}}>{R.category}</span>
			  	<p style={{marginBottom:0}}><label aria-label="open">Open:</label></p>
			    <p className="card-text" aria-label="weekday" style={{marginBottom:0}}>weekday: {R.weekday}</p>
			    <p className="card-text" aria-label="weekend" style={{marginBottom:0}}>weekend: {R.weekend}</p>
			  </div>
			  <hr style={{border: "1px solid rgba(0,0,0,0.2"}} />
			  <label aria-label="latestReviews" style={{marginLeft: 10}}>latest Reviews: </label>
			  
			{ R.comments.sort((a,b) => b.commentedAt - a.commentedAt)
				        .slice(0,2)
				        .map(u =>  <ReviewList key={u.id} user={u}/>)}

			  <Link to={"/review_mobile/"+R.id} className="btn btn-lg btn-block btn-primary">
			  	Read All Reviews >
			  </Link>
		</div>
	)
}

// ----------
//   common
// ----------

const ReviewList = (props) => {
	const user = props.user;
	const username = user.first_name + " " + user.last_name;
	return(
		<div className="media">
		  <a className="media-left" aria-label="avatar">
		    <img className="media-object" src={user.image} alt="avatar"/>
		  </a>
		  <div className="media-body">
		    <h4 className="media-heading" aria-label="username">{username}</h4>
		  	<p className="" aria-label="review">{user.coments}</p>  
		  </div>
		  <hr />
		</div>
	)
}

const AddReviewForm = props => {
	return(
		<form onSubmit="" name="addReview" style={{position: "relative"}}>
			<p><label htmlFor="review" aria-label="review">Ratings: </label></p>
			<StarRating />
			<textarea id="review" name="review" 
			          style={{width: "100%"}} 
			          rows={8} aria-label="add comments"
			          autoFocus
			          placeholder="add comments"></textarea>
			<span tabIndex="0"
				style={submitButtonStyle}
				onClick={props.submit_if_login }>submit</span>
			<span id={"help-review"} className="help-block" 
	             style={{color:"red", visibility: "hidden"}}>please fill the review
	        </span>
			
			
		</form>
	)
}


const submitButtonStyle = {
	right: 40, 
	bottom: 30, 
	cursor:"pointer", 
	position: "absolute",
	display:"block",
	color:"#4C9DD6", 
	fontSize:20,
	float: "right"
};


