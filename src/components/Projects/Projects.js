import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LNDMIS from "../../Assets/Projects/LNDMIS.jpg";
import IGOALS from "../../Assets/Projects/IGOALS.jpg";
import BAFRIP from "../../Assets/Projects/BAFRIP.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LNDMIS}
              title="LNDMIS"
              description="The Web-Based Learning & Development Management System of the Institute of Computer Studies is an innovative platform designed to enhance the educational experience and streamline the management of learning and development programs"
              demoLink="https://cn.cnsclnd.net"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IGOALS}
              title="IGOALS"
              description="The Integrated Governance Online Application Learning System is a web-based repository that serves as a comprehensive platform for organizations to streamline their governance processes and facilitate knowledge sharing."
              demoLink="https://igoals.cnsclnd.net"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BAFRIP}
              title="BAFRIP"
              description="The Barangay Alawihao Facilities Reservation System is an efficient and user-friendly online platform designed to streamline the process of reserving various facilities within the barangay."
              demoLink="https://bafrip.cnsclnd.net"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
