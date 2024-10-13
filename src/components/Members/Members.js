import React from "react";
import { Container } from "react-bootstrap";
import MembersToggle from "./MembersToggle";
import Particle from "../Particle";

function Members() {
  const members = require("../../Assets/data/members.json");

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          Somos feitos de um grupo <strong className="blue">diverso</strong>.
        </h1>
        <p style={{ color: "white" }}>
          Conheça nosso time de doutores, mestres e estudantes.
        </p>

        <MembersToggle title="Professores" members={members.Professores} />
        <MembersToggle title="Fundadores" members={members.Fundadores} />
        <MembersToggle title="Presidência" members={members.Presidência} />
        <MembersToggle title="Diretores" members={members.Diretores} />
        
      </Container>
    </Container>
  );
}

export default Members;
