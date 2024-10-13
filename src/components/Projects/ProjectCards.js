import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function ProjectCards({ project }) {
  return (
    <Card className="base-card-view mb-4" style={{ maxHeight: "fit-content" }}>
      <Row>
        <Col xxl="5" xl="12" className="d-flex justify-content-center">
          <Card.Img style={{ padding: "16px 0 0 16px", maxWidth: "256px", maxHeight: "256px" }} src={project.imgPath} alt="card-img" />
        </Col>
        <Col xxl="7" xl="12" className="d-flex justify-content-center">
          <Card.Body style={{ minHeight: "fit-content", padding: "16px" }}>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text style={{ textAlign: "left" }}>
              {project.description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <div className="d-flex justify-content-center flex-wrap p-3">
        {project.badges.map((badge, index) => (
          <Button key={index} variant={badge.color} style={{ margin: "5px" }}>
            {badge.text}
          </Button>
        ))}
      </div>
    </Card>
  );
}
export default ProjectCards;
