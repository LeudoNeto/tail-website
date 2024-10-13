import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const projects = require("../../Assets/data/projects.json");

  // Dividir os projetos em duas metades
  const half = Math.ceil(projects.length / 2);
  const firstHalf = projects.slice(0, half);
  const secondHalf = projects.slice(half);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          As <strong className="blue">criações</strong> mais recentes da <strong className="blue">TAIL</strong>.
        </h1>
        <p style={{ color: "white" }}>
          Explore nossos principais projetos ao longo dos anos.
        </p>
        <Row className="justify-content-center py-5" >
          <Col lg="6" md="12" className="base-card py-0">
            {firstHalf.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </Col>

          <Col lg="6" md="12" className="base-card py-0">
            {secondHalf.map((project, index) => (
              <ProjectCard key={index} project={project}/>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
