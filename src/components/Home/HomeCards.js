import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

function HomeCards(props) {
  return (
    <Card className="base-card-view">
      <Card.Body>
        <div style={{ fontSize: "3rem", textAlign: "center" }}>
          <props.Icon />
        </div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button as={Link} to={props.buttonLink} variant="primary">
          Acessar
          <BsBoxArrowUpRight style={{ fontSize: "1.2rem", marginLeft: "8px", marginBottom: "4px" }} />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HomeCards;
