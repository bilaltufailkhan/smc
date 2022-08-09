import React from "react";

import { Card } from "react-bootstrap";

function SingleCard({ title, img, content }) {
  return (
    <div>
      <Card className="border-0 my-3 single-card">
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={img} />
        <Card.Body className="px-0">
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleCard;
