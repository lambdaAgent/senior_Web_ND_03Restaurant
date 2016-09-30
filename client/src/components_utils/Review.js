import React from 'react';
import moment from "moment";
import Star from "../components_utils/Star"

class Review extends React.Component {
	//can include more functionality in future
    constructor(props) {
        super(props);
        this.displayName = 'CommentCard';
    }
    
    render() {
    	const props = this.props.review
        return (
        	<li className="row" role="Review" style={comment_mobile}>
    			<img src={props.image} 
    			     alt={props.first_name + " " + props.last_name}
    			     style={imageMedia} />
        		<comment style={commentPanel} >
                    <div className="row" style={{margin:0}}>
                        <div style={{float: "left"}}> 
                			<h4 style={{marginBottom: "0px"}}
                				aria-label="username"
                			    > {props.first_name + " " + props.last_name}
                			</h4>
                			<span className="card-subtitle text-muted"
                				  role="userEmail"
                			      > {props.email} 
                			</span>
                			<p className="text-muted" style={{fontSize: "12px"}}
                			   role="timeReviewed"
                			   > {moment(props.commentedAt).format("YYYY-MM-DD h:mm a")}
                			</p>
                        </div>
                        <div style={{float:"right"}}>
                            <span style={{top: 0}}>ratings: </span>
                            <h1 className="text-center" style={{margin:0}}>{props.ratings}</h1>
                        </div>
                    </div>
        			<p role="review">{props.coments}</p>
        		</comment>
        		<hr style={{border: "1px solid rgba(0,0,0,0.4)", width:"100%", padding:0}}/>
        	</li>
        )
    }
}

const comment_mobile = {width: "100%", listStyleType: "none", position: "relative"}
const imageMedia = {borderRadius: "30px", float: "left", border:"1px solid rgba(0,0,0,0.3)"};
const commentPanel = {marginLeft:"10px",width: "80%", maxWidth: "80%", display: "inline-block", marginBottom: "-20px"};


export default Review;
