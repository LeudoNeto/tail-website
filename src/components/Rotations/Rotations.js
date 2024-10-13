import React from "react";
import { Container, Row } from "react-bootstrap";
import RotationCarousel from "./RotationCarousel";
import Particle from "../Particle";

function Rotations() {
  const rotations = require("../../Assets/data/rotations.json");

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Veja as mentes por trás de cada <strong className="blue">Rotação</strong>.
        </h1>
        <p style={{ color: "white" }}>
          Descubra nossa equipe presente em cada fase da TAIL.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {Object.keys(rotations).map(rotation => (
            <div className="p-4">
              <h1 className="project-heading" style={{ paddingBottom: "16px" }}>
                <strong className="blue">{ rotation }</strong>
              </h1>
              <RotationCarousel rotationProjects={rotations[rotation]} key={rotation} />
            </div>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Rotations;
