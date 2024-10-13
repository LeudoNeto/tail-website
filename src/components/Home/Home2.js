import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "./HomeCards";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineContainer,
  AiOutlineUser,
} from "react-icons/ai";
import { FaHistory } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Saiba mais sobre a <span className="blue"> TAIL </span>
            </h1>
            <p className="home-about-body">
            Nós somos a <span className="blue">Liga de Tecnologia e Inteligência Artificial (TAIL)</span>, uma organização sem fins lucrativos, dirigida por estudantes. Nossa jornada começou em 2020, durante a pandemia.
            Estamos localizados em <span className="blue">João Pessoa - Paraíba, Brasil</span>, vinculados ao <span className="blue">Laboratório de Aplicações de Inteligência Artificial, ARIA - UFPB</span>.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="home-about-highlights my-3">
            <HomeCard
              Icon={FaHistory}
              title="Rotações"
              description="Descubra nossa equipe presente em cada fase da TAIL."
              buttonLink="/rotacoes"
            />
          </Col>

          <Col md={4} className="home-about-highlights my-3">
            <HomeCard
              Icon={AiOutlineUser}
              title="Membros"
              description="Conheça nosso time de doutores, mestres e estudantes."
              buttonLink="/membros"
            />
          </Col>

          <Col md={4} className="home-about-highlights my-3">
            <HomeCard
              Icon={AiOutlineContainer}
              title="Projetos"
              description="Explore nossos principais projetos ao longo dos anos."
              buttonLink="/projetos"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Redes Sociais da <span className="blue">TAIL</span></h1>
            <p>
              <span className="blue">Nosso time</span> adoraria ouvir
              o que <span className="blue">você</span> tem a dizer!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tailufpb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/tailufpb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/TailUFPB"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
