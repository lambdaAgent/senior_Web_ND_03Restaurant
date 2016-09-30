// library
import React from 'react';

// Components
import FloatingButton from "../components_utils/FloatingButton";
import Navbar from "../components_utils/Navbar"
import {Link} from "react-router";


class RestaurantDetail extends React.Component {
    constructor(R) {
        super(R);
        this.displayName = 'RestaurantDetail';
        this.state={addReview: false}
    }
    addReview(e){
    	e.preventDefault();
    	console.log("hello")
    	this.setState({addReview: true})
    }
    render() {
        return(
        	<div>
        		<Navbar />
				

        		<mainMobile className="container" >
	        		<FloatingButton 
	        			style={{display: this.state.addReview ? "none" : "inherit"}}
	        			onClick={this.addReview.bind(this)}/>
        			<div style={{position: "relative", 
        			     maxWidth: 400, border: "1px solid black",
        			     borderBottomRightRadius: 10,borderBottomLeftRadius: 10,
        			     margin: "0 auto"
        			 }} >
	        			<RestaurantDetail_M 
	        				restaurant={restaurant}
	        			/>
        			</div>
        		</mainMobile>
        	</div>
        )
    }
}

const RestaurantDetail_M = (props) => {
	const R = props.restaurant;
	return(
		<mobile role="restaurantDetail" 
		        className="card card-inverse">
		  <div className="card_image_overlay_VD" >
				<h2 aria-label="restaurantName" className="card-title" style={{marginTop: 5}}>{R.name}</h2>
		  </div>
		  <img className="card-img" style={{width:"100%"}} 
		        src={R.image} alt={R.name} />
       	  <span className="label label-danger">{R.category}</span>

		  
		  <div className="card-block" style={{marginTop: 10, paddingLeft: 10}}>
		  	<Star className="starRating_VD"
		  	      ratings={R.ratings} />
		  	<p><label aria-label="open">Open:</label></p>
		    <p className="card-text" aria-label="weekday">weekday: {R.weekday}</p>
		    <p className="card-text" aria-label="weekend">weekend: {R.weekend}</p>
		  </div>

		  <hr style={{border: "1px solid rgba(0,0,0,0.2"}} />
		{ R.comments.sort((a,b) => {
			  return a.commentedAt - b.commentedAt
		  }).slice(0,2).map(u =>  <ReviewList key={u.id} user={u}/>)
		 
		}

		  <Link to={"/review_mobile/"+R.name} className="btn btn-lg btn-block btn-primary">
		  	Read All Reviews >
		  </Link>
		</mobile>
	)
}

export default RestaurantDetail;

const Star = (props) => {
	const number = Number(props.ratings).toFixed(1)
	return (
		<label className={"glyphicon glyphicon-star no-hover " + props.className }
		       aria-label="ratings"
		       style={props.style}
		       >
		       <span className="ratingNumber_VD">{number}</span>
		</label>
	)
}

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


const restaurant = {
	"id": "restaurant-79-221-6099",
	"name": "Considine Group",
	"weekend": "9:40 AM",
	"weekday": "9:45 AM",
	"address": "546 Calypso Crossing",
	"ratings": "2.73",
	"image": "/images/Considine_Group.jpeg",
	"comments_amount": 15,
	"comments": [{
		"id": "81-242-8520",
		"first_name": "Henry",
		"last_name": "Garcia",
		"email": "hgarciac@issuu.com",
		"image": "https://robohash.org/perspiciatissuntsint.jpg?size=50x50&set=set1",
		"ratings": 5,
		"coments": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
		"commentedAt": 1346864400000
	}, {
		"id": "28-328-2275",
		"first_name": "Donald",
		"last_name": "Ortiz",
		"email": "dortiz8@hibu.com",
		"image": "https://robohash.org/enimenimid.bmp?size=50x50&set=set1",
		"ratings": 2,
		"coments": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
		"commentedAt": 1461430800000
	}, {
		"id": "82-344-9362",
		"first_name": "Edward",
		"last_name": "Fisher",
		"email": "efisher7@weebly.com",
		"image": "https://robohash.org/etquasireprehenderit.png?size=50x50&set=set1",
		"ratings": 1,
		"coments": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
		"commentedAt": 1435201440000
	}, {
		"id": "28-731-0272",
		"first_name": "Ruby",
		"last_name": "Watkins",
		"email": "rwatkinsq@boston.com",
		"image": "https://robohash.org/errorquiaqui.bmp?size=50x50&set=set1",
		"ratings": 3,
		"coments": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
		"commentedAt": 1331139600000
	}, {
		"id": "16-076-7923",
		"first_name": "Wayne",
		"last_name": "Porter",
		"email": "wporter1g@techcrunch.com",
		"image": "https://robohash.org/estoccaecatiexplicabo.jpg?size=50x50&set=set1",
		"ratings": 4,
		"coments": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
		"commentedAt": 1345695000000
	}, {
		"id": "59-728-9968",
		"first_name": "Steve",
		"last_name": "White",
		"email": "swhitep@reverbnation.com",
		"image": "https://robohash.org/namesta.jpg?size=50x50&set=set1",
		"ratings": 5,
		"coments": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
		"commentedAt": 1299733380000
	}, {
		"id": "11-534-2763",
		"first_name": "Michael",
		"last_name": "Green",
		"email": "mgreen1a@gov.uk",
		"image": "https://robohash.org/quicumquefacilis.jpg?size=50x50&set=set1",
		"ratings": 1,
		"coments": "In congue. Etiam justo. Etiam pretium iaculis justo.",
		"commentedAt": 1334978820000
	}, {
		"id": "90-485-1195",
		"first_name": "Bobby",
		"last_name": "Henderson",
		"email": "bhenderson14@bbb.org",
		"image": "https://robohash.org/veritatisautaut.bmp?size=50x50&set=set1",
		"ratings": 1,
		"coments": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
		"commentedAt": 1368291600000
	}, {
		"id": "59-733-4588",
		"first_name": "Fred",
		"last_name": "Williamson",
		"email": "fwilliamson19@twitter.com",
		"image": "https://robohash.org/adelenitioptio.jpg?size=50x50&set=set1",
		"ratings": 4,
		"coments": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
		"commentedAt": 1354381200000
	}, {
		"id": "54-902-6984",
		"first_name": "Joshua",
		"last_name": "Thomas",
		"email": "jthomas1@weebly.com",
		"image": "https://robohash.org/quamquiavoluptates.bmp?size=50x50&set=set1",
		"ratings": 0,
		"coments": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
		"commentedAt": 1426784400000
	}, {
		"id": "34-783-9292",
		"first_name": "Nancy",
		"last_name": "Ward",
		"email": "nwardd@hostgator.com",
		"image": "https://robohash.org/commodicumqueest.bmp?size=50x50&set=set1",
		"ratings": 5,
		"coments": "In congue. Etiam justo. Etiam pretium iaculis justo.",
		"commentedAt": 1376971980000
	}, {
		"id": "48-930-5818",
		"first_name": "Andrew",
		"last_name": "Wood",
		"email": "awoody@histats.com",
		"image": "https://robohash.org/ullamconsequunturperferendis.png?size=50x50&set=set1",
		"ratings": 2,
		"coments": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
		"commentedAt": 1450458000000
	}, {
		"id": "48-402-3936",
		"first_name": "Phyllis",
		"last_name": "Franklin",
		"email": "pfranklin13@163.com",
		"image": "https://robohash.org/autautminus.bmp?size=50x50&set=set1",
		"ratings": 1,
		"coments": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
		"commentedAt": 1418317200000
	}, {
		"id": "41-349-4064",
		"first_name": "Rachel",
		"last_name": "Murray",
		"email": "rmurray9@ow.ly",
		"image": "https://robohash.org/sedverovitae.png?size=50x50&set=set1",
		"ratings": 2,
		"coments": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
		"commentedAt": 1453568400000
	}, {
		"id": "52-914-7672",
		"first_name": "Evelyn",
		"last_name": "Banks",
		"email": "ebanks5@artisteer.com",
		"image": "https://robohash.org/velenimdolor.bmp?size=50x50&set=set1",
		"ratings": 5,
		"coments": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
		"commentedAt": 1414861200000
	}]
}