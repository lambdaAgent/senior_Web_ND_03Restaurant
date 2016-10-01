//MOBILE ONLY

//library
import React from "react";
import SimpleLogin from "../../../database/simpleClientAuth";
import DB from "../../../database/simpleDB.js"
import $ from "jquery";
import Signup from "../components_utils/SignUpButton";

//components
import Navbar from "../components_utils/Navbar";
import {Link, browserHistory} from "react-router";
import {FlashMessage, FlashDB} from "../components_utils/FlashMessage";



class AddReviewForm extends React.Component {
	constructor(props){
		super(props);
		this.submit_if_login = this.submit_if_login.bind(this);
		this.signupWithBackHistory = this.signupWithBackHistory.bind(this)
	}
	
	submit_if_login(e){
		e.preventDefault();
		var reviewText = $("#review")[0].value;
		if(reviewText === ""){
			$("#help-review").show()
		} else {
			$("#help-review").hide()
		}
		if(!SimpleLogin.isAuthenticated()){
			FlashDB.addAlert("you need to login first")
			return undefined;
		}

		var reviewText = $("#review")[0].value;
		DB.addReview(this.props.params.restaurantId, reviewText)
		browserHistory.goBack();
	}
	signupWithBackHistory(){
		SimpleLogin.fromAddReviewMobileToSignUp__ShowBackButton()
		browserHistory.push("/signup");
	} 
	render(){
		const props = this.props;
		return(
			<div>
				<div className="desktop">
					<Navbar className="" />
					<h1 className="">this page will only show at mobile screen</h1>
				</div>
		        <div className="container mobile " style={{marginTop: 50,position:"relative"}}>
			        <Navbar showBackButton={true}
		    				RBSymbol={<Signup style={{fontSize: 15, marginTop:"3px", color:"white"}}/>}
		    				RBAria={"signup"}
		    		        RBAction={ this.signupWithBackHistory }/>
					<form onSubmit="" name="addReview">
						<p><label htmlFor="review" aria-label="review">Review: </label></p>
						<textarea id="review" name="review" 
						          style={{width: "100%"}} 
						          rows={8} 
						          autoFocus
						          placeholder="&nbsp; add Review"></textarea>
						<span tabIndex="0"
							style={submitButtonStyle}
							onClick={this.submit_if_login }>submit</span>
						<span id={"help-review"} className="help-block" 
				             style={{color:"red", display: "none"}}>please fill the review
				        </span>
						
						
					</form>
				</div>

				<FlashMessage />
			</div>
		)
	}
};

const submitButtonStyle = {
	right: 40, 
	bottom: 10, 
	cursor:"pointer", 
	color:"#4C9DD6", 
	fontSize:20,
	float: "right"
};

module.exports = AddReviewForm;
