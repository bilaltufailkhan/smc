import React from "react";
import SingleCard from "./SingleCard";

import { Container, Row, Col } from "react-bootstrap";

import { CARDS } from "../utils/cards.js";

function Cards() {
  const [cardsData, setCardsData] = React.useState([]);

  const getCardsData = () => {
    setCardsData(CARDS);
  };

  React.useEffect(() => {
    getCardsData();
  }, []);

  return (
    <>
      <Container className="py-4">
        <Row>
          {cardsData.map((data) => (
            <Col lg="4" md="6" sm="12">
              <SingleCard
                title={data.title}
                img={data.img}
                content={data.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Cards;
