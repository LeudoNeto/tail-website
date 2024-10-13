import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row, Modal } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";

function RotationProjectsCards({ project }) {
  // Estado para controlar o modal
  const [showModal, setShowModal] = useState(false);

  // Funções para abrir e fechar o modal
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className="base-card-view px-3">
        <Card.Title className="my-3">{project.diretoria} - {project.name}</Card.Title>
        {project.imgPath ? (
          // Se project.imgPath for válido, renderiza a imagem
          <div className="d-flex justify-content-center">
            <Card.Img
              style={{ maxWidth: "256px", maxHeight: "256px" }}
              src={project.imgPath}
              alt="card-img"
            />
          </div>
        ) : (
          // Senão, renderiza a descrição no lugar da imagem
          <Col xxl="7" xl="12" className="d-flex justify-content-center">
            <Card.Body style={{ minHeight: "fit-content", padding: "16px" }}>
              <Card.Text style={{ textAlign: "left" }}>
                {project.description}
              </Card.Text>
            </Card.Body>
          </Col>
        )}
        <div className="d-flex justify-content-center flex-wrap p-4">
          <Button variant="primary" onClick={handleOpenModal}>
            Saiba Mais
            <BsBoxArrowUpRight style={{ fontSize: "1.2rem", marginLeft: "8px", marginBottom: "4px" }} />
          </Button>
        </div>
      </Card>

      {/* Modal com as informações do projeto */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header>
          <Modal.Title className="blue fw-bold">Diretoria {project.diretoria} - {project.name}</Modal.Title>
          <Button
            onClick={handleCloseModal}
            variant="close"
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Diretor:</strong> {project.diretor}</p>
          <p><strong>Líder:</strong> {project.lider}</p>
          <p><strong>Membros:</strong> {project.membros.join(', ')}</p>
          <p><strong>Descrição:</strong> {project.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RotationProjectsCards;
