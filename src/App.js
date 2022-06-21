import { Container, Row, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cards from "./Cards";

function App() {
  // const imageUrl = [
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/geedkuyt9lobwntf2k3o",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eyb9wknx38rdkfeztk7f",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a3sq1ywjy8ccttawtdqx",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hn4lxfo6fxjxpldugjsv",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/imneymlry3kb6ypuocmb",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wbuctnhwpxjtv1qfu33x",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d8nsvjglkbmfl3zo2srd",
  //   "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g7donnzr1ev21elpr3nf",
  // ];

  let restData = [
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/geedkuyt9lobwntf2k3o",
      heading: "Sahara Restaurant",
      restDetails: "Indian, Chinese, Tandoor, Mughlai, Biryani, Desserts",
      star: "4.0",
      mins: "35 mins",
      forcount: "300 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eyb9wknx38rdkfeztk7f",
      heading: "Burger King",
      restDetails: "American",
      star: "4.2",
      mins: "36 mins",
      forcount: "350 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a3sq1ywjy8ccttawtdqx",
      heading: "McDonald's",
      restDetails: "Burgers, Beverages, Cafe, Desserts",
      star: "4.2",
      mins: "35 mins",
      forcount: "400 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hn4lxfo6fxjxpldugjsv",
      heading: "Hangout Cakes & More",
      restDetails: "Indian, Chinese, Tandoor, Mughlai, Biryani, Desserts",
      star: "4.3",
      mins: "36 mins",
      forcount: "400 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/imneymlry3kb6ypuocmb",
      heading: "Sahara Hotel - Kurla",
      restDetails: "North Indian, Chinese, Mughlai, Beverages",
      star: "4.1",
      mins: "29 mins",
      forcount: "650 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wbuctnhwpxjtv1qfu33x",
      heading: "Cafe Sunlight",
      restDetails: "Indian, Chinese",
      star: "3.9",
      mins: "34 mins",
      forcount: "400 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/d8nsvjglkbmfl3zo2srd",
      heading: "Big Bowl Company",
      restDetails: "North Indian, Chinese, Biryani",
      star: "4.0",
      mins: "34 mins",
      forcount: "300 for two",
      off: "50% off | Use WELCOME50",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g7donnzr1ev21elpr3nf",
      heading: "Rolls Mania",
      restDetails: "Indian, Fast Food",
      star: "4.2",
      mins: "36 mins",
      forcount: "200 for two",
      off: "50% off | Use WELCOME50",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col lg={3}>
            <Cards
              imageUrl={restData[0].imageUrl}
              heading={restData[0].heading}
              restDetails={restData[0].restDetails}
              star={restData[0].star}
              mins={restData[0].mins}
              forcount={restData[0].forcount}
              off={restData[0].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[1].imageUrl}
              heading={restData[1].heading}
              restDetails={restData[1].restDetails}
              star={restData[1].star}
              mins={restData[1].mins}
              forcount={restData[1].forcount}
              off={restData[1].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[2].imageUrl}
              heading={restData[2].heading}
              restDetails={restData[2].restDetails}
              star={restData[2].star}
              mins={restData[2].mins}
              forcount={restData[2].forcount}
              off={restData[2].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[3].imageUrl}
              heading={restData[3].heading}
              restDetails={restData[3].restDetails}
              star={restData[3].star}
              mins={restData[3].mins}
              forcount={restData[3].forcount}
              off={restData[3].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[4].imageUrl}
              heading={restData[4].heading}
              restDetails={restData[4].restDetails}
              star={restData[4].star}
              mins={restData[4].mins}
              forcount={restData[4].forcount}
              off={restData[4].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[5].imageUrl}
              heading={restData[5].heading}
              restDetails={restData[5].restDetails}
              star={restData[5].star}
              mins={restData[5].mins}
              forcount={restData[5].forcount}
              off={restData[5].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[6].imageUrl}
              heading={restData[6].heading}
              restDetails={restData[6].restDetails}
              star={restData[6].star}
              mins={restData[6].mins}
              forcount={restData[6].forcount}
              off={restData[6].off}
            />
          </Col>
          <Col lg={3}>
            <Cards
              imageUrl={restData[7].imageUrl}
              heading={restData[7].heading}
              restDetails={restData[7].restDetails}
              star={restData[7].star}
              mins={restData[7].mins}
              forcount={restData[7].forcount}
              off={restData[7].off}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
