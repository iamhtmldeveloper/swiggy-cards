import { Button, Card, ListGroup } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faInr, faPercent } from "@fortawesome/free-solid-svg-icons";

function Cards(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.imageUrl} alt="Sahara Restaurant" />
        <Card.Body>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>{props.restDetails}</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> {props.star}
            </ListGroup.Item>
            <ListGroup.Item>{props.mins}</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> {props.forcount}
            </ListGroup.Item>
          </ListGroup>
          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> {props.off}
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      {/* <Card>
        <Card.Img variant="top" src={imageUrl2} alt="Burger King" />
        <Card.Body>
          <Card.Title>Burger King</Card.Title>
          <Card.Text>American</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>

          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a3sq1ywjy8ccttawtdqx"
        />
        <Card.Body>
          <Card.Title>McDonald's</Card.Title>
          <Card.Text>Burgers, Beverages, Cafe, Desserts</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>

          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hn4lxfo6fxjxpldugjsv"
        />
        <Card.Body>
          <Card.Title>Hangout Cakes & More</Card.Title>
          <Card.Text>Bakery</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>

          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/imneymlry3kb6ypuocmb"
        />
        <Card.Body>
          <Card.Title>Sahara Hotel - Kurla</Card.Title>
          <Card.Text>North Indian, Chinese, Mughlai, Beverages</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>
          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wbuctnhwpxjtv1qfu33x"
        />
        <Card.Body>
          <Card.Title>Cafe Sunlight</Card.Title>
          <Card.Text>Indian, Chinese</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>

          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d8nsvjglkbmfl3zo2srd"
        />
        <Card.Body>
          <Card.Title>Big Bowl Company</Card.Title>
          <Card.Text>North Indian, Chinese, Biryani</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>

          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g7donnzr1ev21elpr3nf"
        />
        <Card.Body>
          <Card.Title>Rolls Mania</Card.Title>
          <Card.Text>Indian, Fast Food</Card.Text>
          <ListGroup horizontal>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faStar} /> 4.0
            </ListGroup.Item>
            <ListGroup.Item>36 mins</ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faInr} /> 300 for two
            </ListGroup.Item>
          </ListGroup>

          <p className="card-discount">
            <FontAwesomeIcon icon={faPercent} /> 50% off | Use WELCOME50
          </p>
          <Button variant="primary">quick view</Button>
        </Card.Body>
      </Card> */}
    </>
  );
}

export default Cards;
