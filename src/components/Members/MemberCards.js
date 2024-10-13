import React from "react";
import Card from "react-bootstrap/Card";

function MemberCards({ member }) {
  return (
    <Card className="base-card-view" style={{ alignItems: "center" }}>
      <Card.Img src={member.imgPath} alt="card-img" style={{ padding: "16px", height: "128px", width: "128px" }} />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default MemberCards;
