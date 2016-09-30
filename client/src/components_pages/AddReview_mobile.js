//MOBILE ONLY

//library
import React from "react";

//components
import Navbar from "../components_utils/Navbar";
import {Link, browserHistory} from "react-router";

const signupWithBackHistory = () => browserHistory.push("/signup?back=true")
const AddReviewForm = (props) => {
	const test = "";
	return(
		<div>
	        <Navbar showBackButton={true}
    				RBSymbol={<p style={{fontSize: 15, marginTop:"3px"}}>signup</p>}
    				RBAria={"signup"}
    		        RBAction={ signupWithBackHistory }/>

	        <div className="container mobile " style={{marginTop: 50,position:"relative"}}>
				<form onSubmit="" name="addReview">
					<p><label htmlFor="review" aria-label="review">Review: </label></p>
					<textarea id="review" name="review" style={{width: "100%"}} rows={8} placeholder="&nbsp; add Review"></textarea>
					<button 
						style={submitButtonStyle}
						onClick={() => {} }>submit</button>
				</form>
			</div>
		</div>
	)
};

const submitButtonStyle = {right: 40, bottom: 10, background: "none",border:"none", color:"blue",
							    position:'absolute', fontSize:20, hover:"none"};
							    
module.exports = AddReviewForm;
