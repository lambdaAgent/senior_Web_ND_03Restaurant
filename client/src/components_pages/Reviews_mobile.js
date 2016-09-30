/* Library */
import React, { Component } from 'react';
import {Link} from "react-router";

/* Components_utils */
import Navbar from "../components_utils/Navbar";
import Backbutton from "../components_utils/Backbutton";
import Review from "../components_utils/Review";


class App extends Component {

  render() {
    const props= this.props;
    const reviewers = reviews.map(r => <Review key={r.id} review={r}/> );
    return (
      <div className="container">

        <Navbar />
        <span className="desktop">this page will only show at mobile screen</span>
        <main className="reviews-mobile" style={{margin: "0 auto"}}>
          <Backbutton style={{display: "block"}} />
          <ul className="reviewList" role="reviewlist">
            {reviewers}
          </ul>
        </main>

      </div>
    );
  }
}

const reviews = [{
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
    }];


export default App;