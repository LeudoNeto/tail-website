import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MemberCard from './MemberCards';

const MembersRow = ({ members }) => {
  return (
    <Row style={{ justifyContent: "center" }}>
      {members.map(member => (
        <Col lg="3" md="4" sm="6" xs="12" style={{ maxWidth: "256px", padding: "16px" }} >
          <MemberCard member={member} />
        </Col>
      ))}
    </Row>
  );
};

export default MembersRow;